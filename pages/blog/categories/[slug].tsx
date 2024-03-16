import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MdChevronRight } from "react-icons/md";
import { blogs, domain } from "../../../utils/blog";
import { innerLeave } from "../../../utils/mainUtils";
import { CenteredCardPage } from "../../../components/centeredCardPage";
import { Navbar } from "../../../components/navbar";
import Link from "next/link";
import { BlogItem } from "../../../components/blogItem";
import { useRouter } from "next/router";


export default function Author({ categoryBlogs }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter()

    const category = categoryBlogs[0]!.category.find(j => j.toLowerCase().replaceAll(' ', '-') === router.query?.slug)!


    const title = `${category} - Blog Gliesess`
    const url = `${domain}/blog/categories/${category.toLowerCase().replaceAll(' ', '-')}/`
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={title}></meta>
        </Head>
        <NextSeo
            canonical={url}
            openGraph={{
                locale: 'ro_RO',
                type: 'article',
                title, description: title, url,
                siteName: `Blog Gliesess`
            }}
            twitter={{
                cardType: 'summary_large_image'
            }}
            robotsProps={{
                maxSnippet: -1, maxImagePreview: 'large', maxVideoPreview: -1
            }}
        />
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} className='mt-32'>
            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/blog'}>Blog</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/categories`}>Categories</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/categories/${category.toLowerCase().replaceAll(' ', '-')}`}>{category}</Link>,
                ], (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <h1 className="text-3xl">Posts • {category}</h1>
            {categoryBlogs.map(i => <BlogItem key={i.h1} i={i} />)}
        </CenteredCardPage>
    </>
}

export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {

    const categoryBlogs = blogs.filter(i => i.category.some(j => j.toLowerCase().replaceAll(' ', '-') === params?.slug))
    // const authors = [...new Set(blogs.map(i=>i.author))]


    if (!categoryBlogs[0]) return { notFound: true }

    return { props: { categoryBlogs }, }
}