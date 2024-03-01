
import Markdown from 'react-markdown'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { format } from 'date-fns'
import { CenteredCardPage } from '../../components/centeredCardPage'
import Link from 'next/link'
import { BlogItem } from '../../components/blogItem'
import { blogs } from '../../utils/blog'
import { CTA, Navbar } from '../../components/navbar'
import Image from 'next/image'

function toUnicodeEscape(str: string) {
    return str.split('').map(function (char) {
        var code = char.charCodeAt(0);
        var hex = code.toString(16);
        return code < 128 ? char : "\\u" + "0000".substring(0, 4 - hex.length) + hex;
    }).join('');
}




export default function Applied({ blog, source, similarArticles }: any) {
    return <>
        <Head>
            <title>{blog.seo.title}</title>
            <meta name='description' content={blog.seo.desc} />
        </Head>
        <CenteredCardPage
            appBar={<Navbar alwaysWhite />} className='mt-52'
            bgImageStyle={{
                backgroundImage: `url(/blog/${blog.image})`,
                backgroundSize: 'cover',
                height: '55vh',
                width: '100vw',
                marginTop: '3rem',
                'backgroundPosition': 'center',
                'backgroundRepeat': 'no-repeat'
            }} sameWidthBottom
            bottom={<div className='flex flex-col'>
                <h2 className="text-2xl text-center">Similar articles</h2>
                {similarArticles.map((j: any) => <BlogItem i={j} />)}
            </div>}
        >
            {/* <Image sizes='100%' src={ } /> */}
            <h1 className='text-3xl mb-2'>{blog.h1}</h1>
            <h4 className='text-lg mb-5'>Published by <Link className='a' href={`/blog/author/${blog.author.toLowerCase().replaceAll(' ', '-')}`}>
                {blog.author}
            </Link> pe {format(new Date(blog.date), 'dd-MM-yyyy')}</h4>
            <Markdown components={{
                h1: (props) => <h1 {...props} className='text-3xl font-semibold mt-7'></h1>,
                h2: (props) => <h2 {...props} className='text-2xl font-medium mt-5'></h2>,
                h3: (props) => <h3 {...props} className='text-xl mt-3'></h3>,
                h4: (props) => <h4 {...props} className='text-lg mt-3'></h4>,
                h5: (props) => <h5 {...props} className='text-lg mt-3'></h5>,
                h6: (props) => props.children == 'CTA' ? <CTA /> : <h6 {...props} className='text-lg mt-3'></h6>,
                p: (props) => <>
                    <p {...props} className='my-1 whitespace-pre-wrap'></p>
                    <br />
                </>,
                ol: (props) => <ol {...props} className='list-decimal'></ol>,
                ul: (props) => <ul {...props} className='list-disc'></ul>,
                blockquote: (props) => <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 text-xl italic font-medium leading-relaxed text-gray-900" {...props}>
                </blockquote>,
                a: (props) => (props.href && props.children) ? <Link {...props as any} className='a'></Link> : <p>{props.children}</p>,
                img: (props) => <div className='relative'><Image
                    alt={props.alt!}
                    src={props.src!}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: '100%', height: 'auto' }}
                />
                </div>
            }}>{source}</Markdown>

            <hr className='my-5' />
            <p>Categories {blog.category.map((i: any) => <Link href={`/blog/category/${i.toLowerCase().replaceAll(' ', '-')}`}>
                <span className='font-semibold px-1 a'>{i}</span>
            </Link>)} </p>
            <p className='my-2 space-x-2'><span>Tags:</span> {blog.tags.map((i: any) => <Link
                href={`/blog/tag/${i.toLowerCase().replaceAll(' ', '-')}`}
            >
                <span className='hoverableChip'>{i}</span>
            </Link>)}</p>
        </CenteredCardPage >
    </>
}

export async function getServerSideProps({ req, res, query, params }: GetServerSidePropsContext) {
    const blog = blogs.find(i => i.slug === params?.slug as string)

    if (!blog) return { notFound: true }


    const similarArticles = blogs.sort((a, b) => {
        const aScore = a.category.filter(i => blog.category.includes(i)).length + a.tags.filter(i => blog.tags.includes(i)).length
        const bScore = b.category.filter(i => blog.category.includes(i)).length + b.tags.filter(i => blog.tags.includes(i)).length

        return aScore - bScore
    }).slice(0, 3)

    return { props: { source: blog?.mdText?.replaceAll(/^[ \t]+/gm, ''), blog, similarArticles } }

}

