import { format } from "date-fns"
import { InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { MdChevronRight, MdHome } from "react-icons/md"
import Markdown from "react-markdown"
import StickyBox from "react-sticky-box"
import { authors } from "../utils/blog"
import { domain, slogan, homePageTitle, innerLeave } from "../utils/mainUtils"
import { useSize } from "../utils/useSize"
import { AuthorBox, BlogItem } from "./blogItem"
import { TableOfContent, widthClassName, publishedById, RightPanel, similarArticlesId } from "./blogSidePanel"
import { BasicNextSeo, Navbar, CTA } from "./navbar"
import { ProgressBar } from "./progressBar"
import Image from "next/image"
import { BlogObject, blogItemProjection } from "../utils/types"
import { ProjectionType } from "../utils/projectionType"


// todo redo breadcrumbs, and url
export default function BlogPage({ blog, suggested }: { blog: BlogObject, suggested: ProjectionType<BlogObject, typeof blogItemProjection>[] }) {


  const size = useSize(true)

  const url = `${domain}/${blog.slugs.join('/')}`

  const author = authors.find(i => i.name === blog.author)!


  return <div className='flex flex-col items-center'>
    <BasicNextSeo title={blog.seo.title} description={blog.seo.desc} url={url} />
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                        "@context": "http://schema.org/",
                        "@type": "Article",
                        "headline": "${blog.h1}",
                        "alternativeHeadline": "${blog.seo.title}",
                        "name": "${blog.h1}",
                        "datePublished": "${blog.date}",
                        "dateModified": "${blog.date}",
                        "description": "${blog.description}",
                        "image": {
                            "@type": "ImageObject",
                            "height": "1024",
                            "width": "1024",
                            "url": "https://www.gliesess.com/blog/${blog.image}"
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Alex Totolici",
                            "url": "https://www.gliesess.com/authors/alex-totolici/"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Gliesess",
                            "sameAs": [
                                "https://www.linkedin.com/company/gliesess",
                                "https://twitter.com/gliesess_ads",
                                "https://www.youtube.com/@GliesessSEO"
                            ],
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.gliesess.com/logo.png"
                            }
                        }
                    }`
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
                        "@context": "https://schema.org",
                        "@graph": [
                          {
                            "@type": "WebSite",
                            "@id": "https://www.gliesess.com#website",
                            "url": "https://www.gliesess.com",
                            "name": "Gliesess",
                            "description": "${slogan}",
                            "inLanguage": "en-US"
                          },
                          {
                            "@type": "ImageObject",
                            "@id": "${url}/#primary-image",
                            "inLanguage": "en-US",
                            "url": "https://www.gliesess.com/blog/${blog.image}"
                          },
                          {
                            "@type": "WebPage",
                            "@id": "${url}/#webpage",
                            "url": "${url}",
                            "name": "${blog.h1}",
                            "isPartOf": {
                              "@id": "https://www.gliesess.com#website"
                            },
                            "primaryImageOfPage": {
                              "@id": "${url}/#primaryimage"
                            },
                            "datePublished": "${blog.date}",
                            "dateModified": "${blog.date}",
                            "author": {
                              "@id": "${url}/#/schema/person/4494fa0000534e80a656782c5f9bff73"
                            },
                            "breadcrumb": {
                              "@id": "${url}/#breadcrumb"
                            },
                            "inLanguage": "en-US",
                            "potentialAction": [
                              {
                                "@type": "ReadAction",
                                "target": [
                                  "${url}"
                                ]
                              }
                            ]
                          },
                          {
                            "@type": "BreadcrumbList",
                            "@id": "${url}/#breadcrumb",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "item": {
                                      "@type": "WebPage",
                                      "@id": "https://www.gliesess.com",
                                      "url": "https://www.gliesess.com",
                                      "name": "${homePageTitle}"
                                    }
                                },
                                ${blog.slugs.slice(-1).map((i, index) => `
                                {
                                    "@type": "ListItem",
                                    "position": ${index + 2},
                                    "item": {
                                      "@type": "WebPage",
                                      "@id": "${domain}/${blog.slugs.slice(0, index + 1).join('/')}",
                                      "url": "${domain}/${blog.slugs.slice(0, index + 1).join('/')}",
                                      "name": "${i[0].toUpperCase()}${i.replaceAll('-', " ").slice(1)}"
                                    }
                                  },
                                `)}
                              {
                                "@type": "ListItem",
                                "position": ${blog.slugs.slice(-1).length + 2},
                                "item": {
                                  "@type": "WebPage",
                                  "@id": "${url}",
                                  "url": "${url}",
                                  "name": "${blog.h1}"
                                }
                              }
                            ]
                          },
                          ${author.jsonSchema(`${url}/#/schema/person/4494fa0000534e80a656782c5f9bff73`)}
                        ]
                      }`
        }}
      />
    </Head>

    <div className={`absolute top-0 z-0 rounded-lg`} style={{
      height: '55vh',
      width: '100vw',
      marginTop: '3rem',
    }}>
      <div style={{
        height: '55vh',
        width: '100vw',
        // marginTop: '3rem',
        backgroundImage: `url(/blog/${blog.image})`,
        backgroundSize: 'cover',
        WebkitFilter: "blur(50px) brightness(120%)",
        filter: "blur(50px) brightness(120%)",
        // backgroundColor: "rgba(240,240,240,1)",
        // backgroundBlendMode: "multiply"
      }}></div>
      <Image src={`/blog/${blog.image}`} alt={`${blog.h1} Image`} id='primary-image' fill className='object-cover  lg:scale-[0.80] lg:scale-y-90 lg:rounded-b-lg' />
    </div>
    <div className={`top-0 z-30 w-full mb-0 md:mb-16`}><Navbar alwaysWhite /></div>
    <StickyBox className='z-50 w-full'><ProgressBar /></StickyBox>

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
            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
              {innerLeave(
                [
                  <Link key={1} className='breadcrumb' href={'/'}><MdHome aria-label="Home" className="w-6 h-6 icon-button" /></Link>,
                  ...blog.slugs.map((i, index) => <Link key={1} className='breadcrumb' href={`/${blog.slugs.slice(0, index + 1).join('/')}`}>
                    {i[0].toUpperCase()}{i.replaceAll('-', " ").slice(1)}
                  </Link>
                  )

                ]
                , (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <h1 className='text-3xl mb-2'>{blog.h1}</h1>
            <p className='text-lg mb-5' id={publishedById}>Published on {format(new Date(blog.date), 'dd-MM-yyyy')}</p>

            {size.llg && <TableOfContent />}
            <Markdown components={{
              h1: (props) => <h1 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-3xl font-semibold mt-7'></h1>,
              h2: (props) => <h2 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-2xl font-medium mt-5'></h2>,
              h3: (props) => <h3 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-xl font-medium mt-3'></h3>,
              h4: (props) => <h4 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-lg mt-3'></h4>,
              h5: (props) => <h5 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-lg mt-3'></h5>,
              h6: (props) => props.children == 'CTA' ? <CTA /> : <h6 {...props} id={props.children?.toString().trim().replace(' ', '-').toLowerCase()} className='text-lg mt-3'></h6>,
              p: (props) => props.children?.toString().includes('www.youtube.com/watch') ? <iframe className='w-full aspect-video rounded-lg' src={props.children.toString().replace('/watch?v=', '/embed/')} /> : <>
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
                className='rounded-lg'
                style={{ width: '100%', height: 'auto' }}
              />
              </div>
            }}>{blog?.mdText?.replaceAll(/^[ \t]+/gm, '')}</Markdown>

            <AuthorBox author={author} />

            <hr className='my-5' />
            <p className='my-2 space-x-2'><span>Tags:</span> {innerLeave(blog.tags.map((i: any) => <Link
              href={`/blog/tags/${i.toLowerCase().replaceAll(' ', '-')}`}
              className='a'
            >
              <span className='hoverableChip'>{i}</span>
            </Link>), <span>•</span>)}</p>
            {size.llg && <RightPanel articleLink={url} />}
            <div className="flex md:hidden my-5 items-center justify-center">
              <div className='flex flex-col'>
                <h2 className="text-2xl text-center" id={similarArticlesId}>Similar articles</h2>
                {suggested.map((j: any) => <BlogItem i={j} />)}
              </div>
            </div>
          </div>
        </div>
        <div className={`hidden self-center md:flex my-5 bottom-5 ${widthClassName}`}>
          <div className='flex flex-col'>
            <h2 className="text-2xl text-center" id={similarArticlesId}>Similar articles</h2>
            {suggested.map((j: any) => <BlogItem i={j} />)}
          </div>
        </div>

      </div>

      {size.gmd && <StickyBox className='w-[30%] mt-[50vh] h-fit mr-2'> <RightPanel articleLink={url} /> </StickyBox>}
    </div>

  </div >
}