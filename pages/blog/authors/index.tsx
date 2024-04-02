

import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MdChevronRight } from "react-icons/md";
import { authors, blogs, } from "../../../utils/blog";
import { domain, innerLeave } from "../../../utils/mainUtils";
import { CenteredCardPage } from "../../../components/centeredCardPage";
import { BasicNextSeo, Navbar } from "../../../components/navbar";
import Link from "next/link";
import Image from "next/image";
import { AuthorItem } from "../../../components/blogItem";


export default function Authors() {
    const title = `Authors - Blog Gliesess`
    const description = `Blog authors - Explore Gliesess authors including ${authors.slice(0, 3).map(i => `${i.name}, `)}`
    const url = `${domain}/blog/authors`
    return <>
        <BasicNextSeo title={title} description={description} url={url} />
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} className='mt-32'>
            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/blog'}>Blog</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/authors`}>Authors</Link>,
                ], (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <h1 className="text-3xl">Authors • Gliesess Blog</h1>
            <div className="flex flex-wrap items-center space-x-2 mt-5 w-full">
                {authors.map(i => <AuthorItem i={i} />)}
            </div>
        </CenteredCardPage>
    </>
}

// export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {



//     return { props: {}, }
// }