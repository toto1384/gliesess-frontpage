import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { dbConnect, getBlogModel } from "../../utils/db"
import { BasicNextSeo, CTA, Navbar } from "../../components/navbar"
import { BlogItem } from "../../components/blogItem"
import { CenteredCardPage } from "../../components/centeredCardPage"
import { domain } from "../../utils/mainUtils"


const firstSlug = "seo-case-studies"

export default function Applied({ blogs }: InferGetServerSidePropsType<typeof getServerSideProps>) {




    return <>
        <BasicNextSeo
            title={"SEO Case Studies • Gliesess"}
            description={"Discover our latest SEO case studies and learn how we increased rankings for..."}
            url={`${domain}/seo-case-studies`}
        />

        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} >
            <h1 className="text-3xl font-semibold">SEO Case studies</h1>

            <p className="mt-10 whitespace-pre-line">
                Ever felt like your website is lost in a sea of internet noise? Yeah, we've all been there. But fear not! {"\n\n"}We're like the treasure map to getting your site noticed. We've helped businesses big and small turn their online presence from a tumbleweed into a bustling marketplace. Let's make your online presence as visible as a neon sign in the desert night.
            </p>

            <CTA className="m-auto" customText="Become a Case Study" />

            <hr className="my-5" />

            {blogs.map(i => <BlogItem i={i} />)}

        </CenteredCardPage>
    </>

}


export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {

    const BlogModel = getBlogModel(await dbConnect())

    const blogs = await BlogModel.find({ private: { $ne: true }, slugs: firstSlug })

    return {
        props: {
            blogs: JSON.parse(JSON.stringify(blogs)) as typeof blogs
        },
    }
}