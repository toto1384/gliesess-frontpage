

import { GetServerSidePropsContext } from "next"
import BlogPage from "../../components/blogPage"
import { getBlogItem } from "../../utils/blogServer"
import { dbConnect, getBlogModel } from "../../utils/db"


const firstSlug = "seo-case-studies"


export default BlogPage

export async function getStaticProps(res: any) {
    const path = [firstSlug, res.params.slug as string]

    return await getBlogItem(path)
}


export async function getStaticPaths() {


    const BlogModel = getBlogModel(await dbConnect())

    const blogs = await BlogModel.find({ slugs: firstSlug })


    const paths = blogs.map((post) => {
        // console.log(post)  
        return { params: { slug: post.slugs[post.slugs.length - 1] }, }
    })

    console.log(paths)

    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}