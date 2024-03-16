
import Markdown from 'react-markdown'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { format } from 'date-fns'
import Link from 'next/link'
import { BlogItem } from '../../components/blogItem'
import { blogs, domain } from '../../utils/blog'
import { CTA, Navbar } from '../../components/navbar'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import StickyBox from 'react-sticky-box'
import { useSize } from '../../utils/useSize'
import { NewsletterForm } from '../../components/footer'
import { ShareButton } from '../../components/shareButton'



const similarArticlesId = 'similarArticles'
const publishedById = 'publishedBy'
const contentsId = 'contents'

function useHeadings() {
    const [headings, setHeadings] = React.useState<Element[]>([]);
    React.useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3, h4"));
        setHeadings(elements);
    }, []);
    return headings.slice(0, headings.findIndex(el => similarArticlesId === el.id)).filter(i => ![publishedById, contentsId].includes(i.id));
}

// Now, the function that renders it all
function TableOfContent() {
    const headings = useHeadings();

    const { activeId } = useHeadsObserver(headings)

    return <div className='border rounded'>
        <h2 className='text-xl font-semibold ml-5 mb-2 mt-10' id={contentsId}>Contents</h2>
        {/* {activeId} */}
        <ul className='mb-10'>
            {headings.map(heading => (
                <a href={`#${heading.id}`}>
                    <li
                        className={`cursor-pointer p-2 border-l-2 ${activeId === heading.id && 'border-l-blue-800'} hover:border-l-blue-500`}
                        // onClick={() => heading.scrollIntoView()}
                        style={{
                            marginLeft: Number(heading.tagName[1]) * 10
                        }}
                        key={heading.textContent}
                    >{heading.textContent}</li>

                </a>
            ))}
        </ul>
    </div>
}

export function useHeadsObserver(toObserveElements: Element[]) {
    const observer = useRef<any>()
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const handleObsever = (entries: any[]) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        observer.current = new IntersectionObserver(handleObsever, {
            rootMargin: "-20% 0% -35% 0px"
        }
        )

        toObserveElements.map((elem) => observer.current.observe(elem))

        return () => observer.current?.disconnect()
    }, [toObserveElements])

    return { activeId }
}



export default function BlogPost({ blog, source, similarArticles }: any) {
    const widthClassName: string = `md:min-h-fit md:min-w-[30rem] md:w-fit md:mb-10 max-w-4xl transition mx-auto`

    const size = useSize(true)

    function RightPanel() {
        return <>
            <div className='border rounded mt-10 pt-10 px-2'>
                <div className='mx-2'>
                    <h2 id={contentsId} className='text-xl font-semibold mb-1.5'>Improve you customer acquisition systems</h2>
                    <p>One email at a time</p>
                    <p>(no spam, we promise)</p>
                </div>
                <NewsletterForm />
            </div>
            <div className='px-4 border rounded mt-6 py-7'>
                <h2 id={contentsId} className='text-xl font-semibold mb-1.5'>Share this post on the internet!</h2>
                <ShareButton link={`${domain}/blog/${blog.slug}`} />
            </div>
        </>
    }

    return <div className='flex flex-col items-center'>
        <Head>
            <title>{blog.seo.title}</title>
            <meta name='description' content={blog.seo.desc} />
        </Head>

        <div className={`absolute top-0 z-0`} style={{
            backgroundImage: `url(/blog/${blog.image})`,
            backgroundSize: 'cover',
            height: '55vh',
            width: '100vw',
            marginTop: '3rem',
            'backgroundPosition': 'center',
            'backgroundRepeat': 'no-repeat'
        }}></div>
        <div className={`top-0 z-30 w-full mb-0 md:mb-16`}><Navbar alwaysWhite /></div>

        <div className="mb-20 mx-auto flex flex-col md:flex-row">

            {size.gmd && <div className='relative w-[30%] pt-10'>
                <StickyBox className='mt-[50vh] pt-10 h-fit ml-2'>
                    <TableOfContent />
                </StickyBox>
            </div>}
            <div>
                <div className={`w-full bg-white z-[5] rounded-none md:rounded-lg ${widthClassName} mt-52`}>
                    <div className="px-4 pt-14 md:px-12 md:pb-10 backdrop-blur-sm rounded-none md:rounded-lg bg-white">
                        {/* <Image sizes='100%' src={ } /> */}
                        <h1 className='text-3xl mb-2'>{blog.h1}</h1>
                        <h4 className='text-lg mb-5' id={publishedById}>Published by <Link className='a' href={`/blog/authors/${blog.author.toLowerCase().replaceAll(' ', '-')}`}>
                            {blog.author}
                        </Link> on {format(new Date(blog.date), 'dd-MM-yyyy')}</h4>

                        {size.llg && <TableOfContent />}
                        <Markdown components={{
                            h1: (props) => <h1 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-3xl font-semibold mt-7'></h1>,
                            h2: (props) => <h2 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-2xl font-medium mt-5'></h2>,
                            h3: (props) => <h3 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-xl font-medium mt-3'></h3>,
                            h4: (props) => <h4 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-lg mt-3'></h4>,
                            h5: (props) => <h5 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-lg mt-3'></h5>,
                            h6: (props) => props.children == 'CTA' ? <CTA /> : <h6 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-lg mt-3'></h6>,
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
                        <p>Categories {blog.category.map((i: any) => <Link href={`/blog/categories/${i.toLowerCase().replaceAll(' ', '-')}`}>
                            <span className='font-semibold px-1 a'>{i}</span>
                        </Link>)} </p>
                        <p className='my-2 space-x-2'><span>Tags:</span> {blog.tags.map((i: any) => <Link
                            href={`/blog/tag/${i.toLowerCase().replaceAll(' ', '-')}`}
                        >
                            <span className='hoverableChip'>{i}</span>
                        </Link>)}</p>
                        {size.llg && <RightPanel />}
                        <div className="flex md:hidden my-5 items-center justify-center">
                            <div className='flex flex-col'>
                                <h2 className="text-2xl text-center" id={similarArticlesId}>Similar articles</h2>
                                {similarArticles.map((j: any) => <BlogItem i={j} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden self-center md:flex my-5 bottom-5 ${widthClassName}`}>
                    <div className='flex flex-col'>
                        <h2 className="text-2xl text-center" id={similarArticlesId}>Similar articles</h2>
                        {similarArticles.map((j: any) => <BlogItem i={j} />)}
                    </div>
                </div>

            </div>

            {size.gmd && <StickyBox className='w-[30%] mt-[50vh] h-fit mr-2'> <RightPanel /> </StickyBox>}
        </div>

    </div>
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

