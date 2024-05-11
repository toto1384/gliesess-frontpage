import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MdChevronRight, MdPublic, MdWeb } from "react-icons/md";
import { authors, } from "../../../utils/blog";
import { domain, innerLeave } from "../../../utils/mainUtils";
import { CenteredCardPage } from "../../../components/centeredCardPage";
import { BasicNextSeo, Navbar } from "../../../components/navbar";
import Link from "next/link";
import { BlogItem } from "../../../components/blogItem";
import Image from "next/image";
import { useSize } from "../../../utils/useSize";
import { FaIntercom, FaLinkedin } from "react-icons/fa";
import { dbConnect, getBlogModel } from "../../../utils/db";


export default function Author({ authorBlogs }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const authorName = authorBlogs[0]!.author

    const author = authors.find(i => i.name === authorName)!


    const title = `${author.name} - Blog Gliesess`
    const description = `Explore all the posts written by ${author.name} - Blog Gliesess`
    const url = `${domain}/blog/authors/${author.name.toLowerCase().replaceAll(' ', '-')}`

    const size = useSize(true)
    const imageSize = size.gmd ? 250 : 150

    return <>
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: author.jsonSchema(),
                }}
            />
        </Head>
        <BasicNextSeo title={title} description={description} url={url} />
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} className='mt-32'>
            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/blog'}>Blog</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/authors`}>Authors</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/authors/${author.name.toLowerCase().replaceAll(' ', '-')}`}>{author.name}</Link>,
                ], (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="flex flex-col md:mx-5">
                    <h1 className="text-3xl md:text-5xl font-semibold">{author.name}</h1>
                    <p className="text-lg my-5">{author.shortDescription}</p>
                    <p className="">{author.longDescription}</p>

                </div>
                <div className="flex flex-col items-center my-5">
                    <Image
                        src={author.image} alt="Alex Totolici Photo"
                        className="rounded-full mx-10 border-blue-950 border-8 aspect-square object-cover"
                        width={imageSize} height={imageSize}
                    />
                    <div className="flex flex-row justify-between">
                        <a href={author.linkedin} className="hover:text-secondary mx-4" aria-label="Alex Totolici Linkedin account">
                            <FaLinkedin className='w-7 h-7' />
                        </a>
                        <a href={author.website} className="hover:text-secondary mx-4" aria-label="Alex Totolici website">
                            <MdPublic className='w-7 h-7' />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="my-10" />

            <h2 className="text-2xl font-medium">Posts by {author.name}</h2>
            {authorBlogs.map(i => <BlogItem key={i.h1} i={i} />)}
        </CenteredCardPage>
    </>
}

export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {

    const BlogModel = getBlogModel(await dbConnect())

    const actualBlogs = await BlogModel.find({ private: { $ne: true }, authorSlug: query.slug as any })

    return {
        props: { authorBlogs: JSON.parse(JSON.stringify(actualBlogs)) as typeof actualBlogs },
    }
}