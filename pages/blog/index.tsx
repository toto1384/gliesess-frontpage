import Head from "next/head"
import { useRouter } from "next/router"
import { blogs } from "../../utils/blog"
import { Navbar } from ".."
import { CenteredCardPage } from "../../components/centeredCardPage"
import { BlogItem } from "../../components/blogItem"



export default function Applied() {


    const router = useRouter()

    const actualBlogs = router.query.s ? blogs.filter(i => i.h1.includes(router.query.s as string) || i.mdText.includes(router.query.s as string)) : blogs

    return <>
        <Head>
            <title>Blog Gliesess</title>
            <meta name="description" content={"Blog Gliesess"}></meta>
        </Head>

        <CenteredCardPage appBar={<Navbar alwaysWhite />} className='mt-32'
        // bgImageClassName="bg-svg" bgImageStyle={{
        //     backgroundSize: 'cover',
        //     height: '55vh',
        //     width: '100vw',
        //     marginTop: '3rem',
        //     'backgroundPosition': 'center',
        //     'backgroundRepeat': 'no-repeat'
        // }}
        >
            <h1 className="text-3xl">Blog Gliesess</h1>
            {actualBlogs.map(i => <BlogItem i={i} />)}
        </CenteredCardPage>
    </>
}