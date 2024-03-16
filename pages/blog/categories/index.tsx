



import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MdChevronRight } from "react-icons/md";
import { authors, blogs, categories, domain } from "../../../utils/blog";
import { innerLeave } from "../../../utils/mainUtils";
import { CenteredCardPage } from "../../../components/centeredCardPage";
import { Navbar } from "../../../components/navbar";
import Link from "next/link";
import Image from "next/image";
import { CategoryItem } from "../../../components/blogItem";


export default function Authors() {
    const title = `Categories - Blog Gliesess`
    const url = `${domain}/blog/categories`
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
                ], (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <h1 className="text-3xl">Categories • Gliesess Blog</h1>
            {categories.map(i => <CategoryItem i={i} />)}
        </CenteredCardPage>
    </>
}

// export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {


//     // const categories = blogs.map(i=>i.category).reduce((t,r)=>[...t,...r])


//     return { props: {}, }
// }