
import { GetServerSidePropsContext } from "next"
import { getBlogItem } from "../../utils/blogServer"
import BlogPage from "../../components/blogPage"


const firstSlug = "shopify-seo"


export default BlogPage


export async function getStaticProps({ params }: GetServerSidePropsContext) {

    const path = [firstSlug,]

    return await getBlogItem(path)
}

