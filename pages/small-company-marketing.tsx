import { GetServerSidePropsContext } from "next"
import BlogPage from "../components/blogPage"
import { getBlogItem } from "../utils/blogServer"


const firstSlug = "small-company-marketing"


export default BlogPage


export async function getStaticProps({ params }: GetServerSidePropsContext) {

    const path = [firstSlug,]

    return await getBlogItem(path)
}

