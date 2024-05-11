import { useRouter } from "next/router"
import { authors, } from "../../utils/blog"
import { CenteredCardPage } from "../../components/centeredCardPage"
import { AuthorItem, BlogItem, } from "../../components/blogItem"
import { BasicNextSeo, Navbar } from "../../components/navbar"
import Link from "next/link"
import { blogTitle, domain } from "../../utils/mainUtils"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { dbConnect, getBlogModel } from "../../utils/db"



export default function Applied({ actualBlogs }: InferGetServerSidePropsType<typeof getServerSideProps>) {


    const router = useRouter()

    const description = "Welcome to Gliesess Blog. Read articles about SEO, Case studies, Marketing strategies and others"
    const url = `${domain}/blog`

    return <>
        <BasicNextSeo title={blogTitle} description={description} url={url} />

        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} className='mt-32 bg-transparent'
        // bgImageClassName="bg-svg" bgImageStyle={{
        //     backgroundSize: 'cover',
        //     height: '55vh',
        //     width: '100vw',
        //     marginTop: '3rem',
        //     'backgroundPosition': 'center',
        //     'backgroundRepeat': 'no-repeat'
        // }}
        >
            <h1 className="text-3xl font-semibold">Blog Gliesess</h1>
            <h2 className="text-2xl font-medium my-3">Posts</h2>
            {actualBlogs.map(i => <BlogItem i={i} />)}

            {/* <hr className="my-10" />
            <Link href={`/blog/categories`}><h2 className="text-2xl font-medium decoration-purple-500 cursor-pointer hover:text-purple-500 underline transition-all mb-3">Categories</h2></Link>
            <div className="flex flex-wrap items-center space-x-2">
                {categories.map(i => <CategoryItem i={i} />)}
            </div> */}

            <hr className="my-10" />
            <Link href={`/blog/authors`}><h2 className="text-2xl font-medium decoration-purple-500 cursor-pointer hover:text-purple-500 underline transition-all mb-3">Authors</h2></Link>
            <div className="flex flex-wrap items-center space-x-2">
                {authors.map(i => <AuthorItem i={i} />)}
            </div>

        </CenteredCardPage>
    </>
}


export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {

    const BlogModel = getBlogModel(await dbConnect())

    const actualBlogs = await BlogModel.find({ private: { $ne: true }, ...(query.s ? { mdText: { "$regex": query.s as string, "$options": "i" } } : {}) })

    return {
        props: { actualBlogs: JSON.parse(JSON.stringify(actualBlogs)) as typeof actualBlogs },
    }
}