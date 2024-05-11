import { GetServerSidePropsContext } from "next"
import BlogPage from "../../components/blogPage"
import { getBlogItem } from "../../utils/blogServer"


const firstSlug = "local-seo-strategies"


export default BlogPage

export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {

    const path = [firstSlug, ...((query.slug as string[]) ?? [])]

    return await getBlogItem(path)
}






