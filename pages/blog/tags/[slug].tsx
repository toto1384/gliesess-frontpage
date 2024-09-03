import { GetServerSidePropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { MdChevronRight } from "react-icons/md";
import { domain, innerLeave, tagTitle } from "../../../utils/mainUtils";
import { CenteredCardPage } from "../../../components/centeredCardPage";
import { BasicNextSeo, Navbar } from "../../../components/navbar";
import Link from "next/link";
import { BlogItem } from "../../../components/blogItem";
import { useRouter } from "next/router";
import { dbConnect, getBlogModel } from "../../../utils/db";


export default function Tag({ actualBlogs }: InferGetStaticPropsType<typeof getServerSideProps>) {

    const router = useRouter()

    const tag = (router.query?.slug as string)!



    const description = `Explore the "${tag}" tag and all of its posts - Blog Gliesess`
    const url = `${domain}/blog/tags/${tag.toLowerCase().replaceAll(' ', '-')}`
    return <>
        <BasicNextSeo
            title={tagTitle(tag)}
            description={description}
            url={url}
        />
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} className='mt-32'>
            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/blog'}>Blog</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/tags`}>Tags</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/tags/${tag.toLowerCase().replaceAll(' ', '-')}`}>{tag}</Link>,
                ], (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <h1 className="text-3xl">Posts • {tag}</h1>
            {actualBlogs.map(i => <BlogItem key={i.h1} i={i} />)}
        </CenteredCardPage>
    </>
}

export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {


    const BlogModel = getBlogModel(await dbConnect())

    console.log({ tags: { "$regex": (query.slug as string).replaceAll('-', " "), "$options": "i" } })
    const actualBlogs = await BlogModel.find({ private: { $ne: true }, tags: { "$regex": (query.slug as string).replaceAll('-', " "), "$options": "i" } })

    return {
        props: { actualBlogs: JSON.parse(JSON.stringify(actualBlogs)) as typeof actualBlogs },
    }
}

// export async function getStaticPaths() {
//     // When this is true (in preview environments) don't
//     // prerender any static pages
//     // (faster builds, but slower initial page load)
//     if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//       return {
//         paths: [],
//         fallback: 'blocking',
//       }
//     }
   
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()
   
//     // Get the paths we want to prerender based on posts
//     // In production environments, prerender all pages
//     // (slower builds, but faster initial page load)
//     const paths = posts.map((post) => ({
//       params: { id: post.id },
//     }))
   
//     // { fallback: false } means other routes should 404
//     return { paths, fallback: false }
//   }