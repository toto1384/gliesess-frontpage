import { GetServerSidePropsContext } from "next"
import BlogPage from "../../components/blogPage"
import { getBlogItem } from "../../utils/blogServer"
import { dbConnect, getBlogModel } from "../../utils/db"


const firstSlug = "email-marketing"


export default BlogPage

export async function getStaticProps({ params }: GetServerSidePropsContext) {
    const path = [firstSlug, ...((params?.slug as string[]) ?? [])]

    return await getBlogItem(path)
}


export async function getStaticPaths() {
    const BlogModel = getBlogModel(await dbConnect())

    const blogs = await BlogModel.find({ slugs: firstSlug })

    const paths = [...blogs.map((post) => ({
        params: { slug: post.slugs.filter(i => i != firstSlug) },
    }))]
    console.dir(paths, { depth: 100 })

    return { paths, fallback: false }
}