



import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MdChevronRight } from "react-icons/md";
import { authors, blogs, categories, } from "../../../utils/blog";
import { categoriesTitle, domain, innerLeave } from "../../../utils/mainUtils";
import { CenteredCardPage } from "../../../components/centeredCardPage";
import { BasicNextSeo, Navbar } from "../../../components/navbar";
import Link from "next/link";
import Image from "next/image";
import { CategoryItem } from "../../../components/blogItem";


export default function Authors() {

    const description = `Blog categories - Explore categories such as ${categories.slice(0, 3).map(i => `${i.name}, `)}`
    const url = `${domain}/blog/categories`
    return <>
        <BasicNextSeo title={categoriesTitle} description={description} url={url} />
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} className='mt-32'>
            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/blog'}>Blog</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/categories`}>Categories</Link>,
                ], (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <h1 className="text-3xl">Categories • Gliesess Blog</h1>
            <div className="flex flex-wrap items-center space-x-2 mt-5">
                {categories.map(i => <CategoryItem i={i} />)}
            </div>
        </CenteredCardPage>
    </>
}

// export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {


//     // const categories = blogs.map(i=>i.category).reduce((t,r)=>[...t,...r])


//     return { props: {}, }
// }