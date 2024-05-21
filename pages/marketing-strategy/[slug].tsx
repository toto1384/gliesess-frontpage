import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { BasicNextSeo, Navbar } from "../../components/navbar"
import Image from "next/image"
import { MdBusiness, MdChevronRight, MdOpenInNew } from "react-icons/md"
import { domain, homePageTitle, innerLeave, kFormatter, slogan } from "../../utils/mainUtils"
import Link from "next/link"
import { CenteredCardPage } from "../../components/centeredCardPage"
import { PieChart } from 'react-minimal-pie-chart';
import { BarChart } from "../../components/barChart"
import StickyBox from "react-sticky-box"
import { ProgressBar } from "../../components/progressBar"
import { TableOfContent, widthClassName, RightPanel, similarArticlesId } from "../../components/blogSidePanel"
import { useSize } from "../../utils/useSize"
import { RetailStrategyComponent, retailStrategyPageName } from "../../components/retailStrategyComponent"
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { IconType } from "react-icons"
import React from "react"
import Head from "next/head"
import { authors, } from '../../utils/blog'
import { AuthorBox } from "../../components/blogItem"
import { dbConnect, getCompanyModel } from "../../utils/db"
import { format } from "date-fns"


export default function Applied({ company, similarCompanies }: InferGetServerSidePropsType<typeof getServerSideProps>) {


    const year = Number(/\b\d{4}\b/.exec(company.serpProps?.founded ?? '')?.[0].replace(/\d$/, '0') ?? -1)



    const socials = [
        { name: 'LinkedIn', metric: company.linkedinFollowers },
        { name: 'Facebook', metric: company.facebook?.followers },
        { name: 'Instagram', metric: company.instagramFollowers },
        { name: 'Youtube', metric: company.youtube?.subscribers },
    ].filter(i => i.metric) as { name: string, metric: number }[]

    const biggest = socials.sort((a, b) => b.metric - a.metric)[0]
    const smallest = socials.sort((a, b) => a.metric - b.metric)[0]

    const size = useSize(true)

    const foundedYear = company.serpProps?.founded?.match(/\b\d{4}\b/)?.[0]

    const h1Text = `${company.name} marketing strategy breakdown`

    const title = `${h1Text} • Gliesess`

    const description = `A comprehensive analysis of the ${company.name} marketing strategy. ${company.name} (${company.category}) was founded in the ${year}'s.`

    const url = `${domain}/marketing-strategy/${company.slug}`

    const datePublished = '"2024-04-02"'

    return <div className="flex flex-col items-center">

        <BasicNextSeo
            additionalProps={{}}
            title={title}
            description={description}
            url={url}
        />

        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org/",
                        "@type": "Article",
                        "headline": "${h1Text}",
                        "alternativeHeadline": "${title}",
                        "name": "${h1Text}",
                        "datePublished": ${datePublished},
                        "dateModified": ${datePublished},
                        "description": "${description}",
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
                            "@type": "WebPage",
                            "@id": "${url}/#webpage",
                            "url": "${url}/",
                            "name": "${h1Text}",
                            "isPartOf": {
                              "@id": "https://www.gliesess.com#website"
                            },
                            "datePublished": ${datePublished},
                            "dateModified": ${datePublished},
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
                                  "${url}/"
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
                              {
                                "@type": "ListItem",
                                "position": 2,
                                "item": {
                                  "@type": "WebPage",
                                  "@id": "https://www.gliesess.com/marketing-strategies/",
                                  "url": "https://www.gliesess.com/marketing-strategies/",
                                  "name": "${retailStrategyPageName({ countC: 0, disableCount: true })}"
                                }
                              },
                              {
                                "@type": "ListItem",
                                "position": 3,
                                "item": {
                                  "@type": "WebPage",
                                  "@id": "${url}/",
                                  "url": "${url}/",
                                  "name": "${h1Text}"
                                }
                              }
                            ]
                          },
                          ${authors[0].jsonSchema(`${url}/#/schema/person/4494fa0000534e80a656782c5f9bff73`)}
                        ]
                      }`
                }}
            />


        </Head>


        <div className={`top-0 z-30 w-full`}><Navbar /></div>
        <StickyBox className='z-50 w-full'><ProgressBar /></StickyBox>
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <div className="mb-20 mx-auto flex flex-col md:flex-row">

            {size.gmd && <div className='relative w-[30%] pt-10'>
                <StickyBox className='mt-[30vh] pt-10 h-fit ml-2'>
                    <TableOfContent />
                </StickyBox>
            </div>}
            <div>
                <div className={`w-full bg-white z-[5] rounded-none md:rounded-lg ${widthClassName} mt-32`}>
                    <div className="px-4 pt-14 md:px-12 md:pb-10 backdrop-blur-sm rounded-none md:rounded-lg bg-white">

                        <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                            {innerLeave([
                                <Link key={1} className='breadcrumb' href={'/marketing-strategies'}>Retail Strategies</Link>,
                                (year != -1 ? <Link key={2} className='breadcrumb' href={`/marketing-strategies/${year}`}>{year}s</Link> : undefined),
                                (company.category ? <Link key={2} className='breadcrumb' href={`/marketing-strategies/${company.category.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}>{company.category}</Link> : undefined),
                                (((year != -1) && company.category) ? <Link key={2} className='breadcrumb' href={`/marketing-strategies/${year}/${company.category.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}>{company.category} - {year}s</Link> : undefined),
                                <Link key={1} className='breadcrumb' href={`/marketing-strategy/${company.slug}`}>{company.name}</Link>,
                            ].filter(i => i), (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
                        </nav>
                        <div className="flex flex-row items-center space-x-2">
                            {company.icon ? <div className="rounded-xl overflow-hidden"><Image
                                width={70} height={70} className="object-contain"
                                src={company.icon as string}
                                alt={`${company.name} Logo`}
                            /></div> : <div className="w-16 h-16"><MdBusiness className="w-16 h-16" /></div>}
                            <h1 className="text-3xl font-semibold">{h1Text}</h1>
                        </div>

                        {size.llg && <TableOfContent className="mt-10" />}

                        <h2 id="about-heading" className="text-2xl mt-10 font-medium">About {company.name}</h2>
                        <p>{company.descriptionNew}</p>
                        {company.serpProps?.wikipedia && <Link className="a" target="_blank" href={company.serpProps.wikipedia}>See more on wikipedia</Link>}

                        <h2 id="marketing-summary-heading" className="text-2xl mt-10 font-medium">{company.name} marketing strategy</h2>
                        <p>{company.marketingDescription}</p>

                        <h2 id="general-info-heading" className="text-2xl mt-10 font-medium">General Info</h2>
                        <div className="">

                            {(company.serpProps?.founded && foundedYear) && <div className="my-2">
                                <p>Founded</p>
                                {innerLeave(
                                    company.serpProps.founded.split(foundedYear).map(i => <span className="text-indigo-500 font-medium text-lg">{i}</span>),
                                    <Link className="text-indigo-500 font-medium text-lg underline" href={`/marketing-strategies/${year}`} >{foundedYear}</Link>
                                )}

                                <hr />
                            </div>}
                            {company.serpProps?.founders && <div className="my-2">
                                <p>Founders</p>
                                <p className="text-indigo-500 font-medium text-lg">{company.serpProps?.founders}</p>
                                <hr />
                            </div>}
                            {company.serpProps?.headquarters && <div className="my-2">
                                <p>Headquarters</p>

                                {company.state ?
                                    <Link href={`/marketing-strategies/${company.state.slug}`} className="text-indigo-500 font-medium text-lg underline">{company.serpProps?.headquarters}</Link> :
                                    <p className="text-indigo-500 font-medium text-lg">{company.serpProps.headquarters}</p>}

                                <hr />
                            </div>}
                            {company.category && <div className="my-2">
                                <p>Category</p>
                                <Link href={`/marketing-strategies/${company.category?.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-') ?? 'Other'}`} className="text-indigo-500 font-medium text-lg underline">{company.category}</Link>
                                <hr />
                            </div>}
                            {company.domain && <div className="my-2">
                                <p>Website</p>
                                <Link href={`https://${company.domain}`} target="_blank" className="text-indigo-500 underline font-medium text-lg flex flex-row items-center">{company.domain} <MdOpenInNew /></Link>
                                <hr />
                            </div>}
                            {company.serpProps?.socialProfiles && <div className="my-2">
                                <p>Social media profiles</p>
                                <div className="flex flex-row items-center space-x-2">
                                    {company.serpProps.socialProfiles.map(i => {
                                        let icon: IconType = FaGlobe
                                        switch (i.name) {
                                            case 'X (Twitter)': icon = FaTwitter; break;
                                            case 'Facebook': icon = FaFacebook; break;
                                            case 'Instagram': icon = FaInstagram; break;
                                            case 'LinkedIn': icon = FaLinkedin; break;
                                            case 'Pinterest': icon = FaPinterest; break;
                                            case 'Youtube': icon = FaYoutube; break;
                                        }

                                        return <Link href={i.link} target="_blank">{React.createElement(icon, { className: 'text-indigo-500 w-6 h-6', })}</Link>
                                    })}
                                </div>
                            </div>}

                        </div>



                        {company.marketingMix && <>
                            <h2 id="marketing-mix-heading" className="text-2xl mt-10 font-medium">{company.name} marketing mix</h2>
                            <p className="whitespace-pre-line">{company.name}, like many other companies, relies on the classic 4Ps marketing mix framework to shape its marketing strategy. This framework comprises four essential elements:</p>
                            {company.marketingMix.product && <>
                                <h3 id="product-heading" className="text-xl mt-5 font-medium">Product</h3>
                                <p className="whitespace-pre-line">{company.marketingMix.product}</p>
                            </>}

                            {company.marketingMix.price && <>
                                <h3 id="product-heading" className="text-xl mt-5 font-medium">Price</h3>
                                <p className="whitespace-pre-line">{company.marketingMix.price}</p>
                            </>}

                            {company.marketingMix.place && <>
                                <h3 id="product-heading" className="text-xl mt-5 font-medium">Place</h3>
                                <p className="whitespace-pre-line">{company.marketingMix.place}</p>
                            </>}

                            {company.marketingMix.promotion && <>
                                <h3 id="product-heading" className="text-xl mt-5 font-medium">Promotion</h3>
                                <p className="whitespace-pre-line">{company.marketingMix.promotion}</p>
                            </>}

                            <br /> <br />
                            <p>By strategically managing these four elements, {company.name} can develop marketing strategies tailored for customer needs, enhance brand value, and drive business growth.</p>
                        </>}
                        {company.companyInfo && <>
                            <h2 id="stock-heading" className="text-2xl mt-10 font-medium">{company.name} is on {company.companyInfo.exchangeShortName}</h2>

                            {company.icon &&
                                <div className='relative mx-auto my-5'><Image
                                    alt={`${company.name} stock and company info`}
                                    src={`/marketing-str/${company.slug}.jpg`}
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className='rounded-lg aspect-video object-cover'
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                </div>}


                            <p className="">
                                {company.name} is listed on the {company.companyInfo.exchangeShortName}, a significant milestone that underscores its prominence in the {company.category} industry. {company.name} went public on {format(new Date(company.companyInfo.ipoDate!), 'MMMM dd, yyyy')}, marking the beginning of its journey in the public market, allowing investors to participate in the company's growth. <br /><br />

                                Over the years, {company.name} stock price has seen considerable fluctuations, reflecting its evolving business strategies, market conditions, and overall economic factors.<br /><br />

                                This growth trajectory not only highlights {company.name} success but also demonstrates its impact on the {company.category} landscape, making it a pivotal player in the industry and a significant entity on the {company.companyInfo.exchangeShortName}.{company.name} stock price has gotten to {company.companyInfo.price} {company.companyInfo.currency} at the time of writing this article.<br /><br />
                            </p>

                        </>
                        }

                        <div className="flex flex-col md:flex-row mt-10">
                            <div>
                                <h2 id="search-engine-traffic-heading" className="text-2xl font-medium">Search engine traffic</h2>

                                <p>
                                    {company.name} places a strong emphasis on generating {(company.organicTraffic ?? 0) > (company.paidTraffic ?? 0) ? "organic" : "paid"} traffic, which makes up a significant portion of its overall web traffic. This strategic focus on {(company.organicTraffic ?? 0) > (company.paidTraffic ?? 0) ? "organic" : "paid"} search helps {company.name} attract a vast audience without relying heavily on {(company.organicTraffic ?? 0) > (company.paidTraffic ?? 0) ? "paid advertisements" : "SEO"}. <br /> <br />

                                    {company.name} receives a {kFormatter(company.organicTraffic ?? 0)} visitors per month from organic search and {kFormatter(company.paidTraffic ?? 0)} per month from paid search. A substantial number of visitors each month are from {(company.organicTraffic ?? 0) > (company.paidTraffic ?? 0) ? "organic" : "paid"} search, demonstrating the effectiveness of its {(company.organicTraffic ?? 0) > (company.paidTraffic ?? 0) ? "SEO" : "PPC"} efforts. <br /> <br />

                                    {company.name} <Link className="a" href={`https://moz.com/learn/seo/domain-authority`} target="_blank">domain authority</Link> is {company.domainAuthority}. A high domain authority indicates that the website is well-regarded by search engines, making it easier to rank for relevant keywords and attract organic traffic.<br /><br />

                                    By maintaining a strong focus on {(company.organicTraffic ?? 0) > (company.paidTraffic ?? 0) ? "organic" : "paid"} traffic, {company.name} exemplifies how businesses can build an impactful online presence. This strategy not only enhances visibility and brand reputation but also paves the way for growth and success in the digital marketplace.
                                </p>

                                {/* <p className="whitespace-pre-line">{company.name} focuses more on {((company.organicTraffic ?? 0) > (company.paidTraffic ?? 0)) ? 'Organic Traffic' : 'Paid Traffic'} with its organic traffic accounting for {((company.organicTraffic ?? 0) * 100 / ((company.organicTraffic ?? 0) + (company.paidTraffic ?? 0))).toFixed(1)}% of all traffic. {"\n\n"} {company.name} gets {kFormatter(company.organicTraffic ?? 0)} visitors per month from organic search and {kFormatter(company.paidTraffic ?? 0)} per month from paid search</p>
                                <h3 id="domain-authority-heading" className="text-xl mt-3">Domain authority</h3>
                                <p className="whitespace-pre-line">{company.name} <Link className="a" href={`https://moz.com/learn/seo/domain-authority`} target="_blank">domain authority</Link> is {company.domainAuthority}.</p> */}

                            </div>
                            <PieChart
                                className=""
                                data={[
                                    { title: 'Organic', value: Math.ceil((company.organicTraffic ?? 0) * 100 / ((company.organicTraffic ?? 0) + (company.paidTraffic ?? 0))), color: '#4859C9' },
                                    { title: 'Paid', value: Math.ceil((company.paidTraffic ?? 0) * 100 / ((company.paidTraffic ?? 0) + (company.organicTraffic ?? 0))), color: '#CF90F9' },
                                    // { title: 'Three', value: 20, color: '#6A2135' },
                                ]}
                                animate label={i => `${i.dataEntry.title}`}
                                style={{ height: '250px' }}
                                labelStyle={{ fontSize: 5, fontWeight: 600, color: 'white', }} lineWidth={75}
                            />
                        </div>


                        <h2 id="youtube-heading" className="text-2xl mt-10 font-medium">{company.name} Youtube marketing strategy</h2>
                        <p className="whitespace-pre-line">{company.name} has an active Youtube Channel with over {kFormatter(company.youtube?.subscribers ?? 0)} subscribers. Their whole channel has {kFormatter(company.youtube?.channelViews ?? 0)} views. {'\n\n'}They posted {company.youtube?.videoCount} videos, which means that every video got them {kFormatter((company.youtube?.channelViews ?? 0) / (company.youtube?.videoCount ?? 0))} views for the channel and {kFormatter((company.youtube?.subscribers ?? 0) / (company.youtube?.videoCount ?? 0))} subscribers</p>

                        {company.instagramFollowers && <>
                            <h2 id="youtube-heading" className="text-2xl mt-10 font-medium">{company.name} Instagram marketing strategy</h2>
                            <p className="whitespace-pre-line">
                                {company.name} has been steadily expanding its presence across various social media platforms to engage with its vast audience, Instagram being one of them. Currently {company.name} has {kFormatter(company.instagramFollowers)} followers on Instagram. With its visually-driven interface and widespread popularity, Instagram provides {company.name} with a platform to showcase its diverse range of products and connect with customers on a more personal level.
                            </p>
                        </>}

                        {(company.linkedinFollowers ? 1 : 0) + (company.facebook?.followers ? 1 : 0) + (company.instagramFollowers ? 1 : 0) + (company.youtube?.subscribers ? 1 : 0) >= 3 &&
                            <>
                                <h2 id="social-media-heading" className="text-2xl mt-10 font-medium">{company.name} Social media marketing strategy breakdown</h2>
                                <p>{company.name} marketing strategy is not lacking social media. Gaining {kFormatter(biggest.metric)} followers/subscribers on {biggest.name} is the biggest achievement for {company.name} on social media. While {smallest.name} is lacking, with only {kFormatter(smallest.metric)} followers/subscribers, the other platforms sit right in the middle. Here is a breakdown for all of them:</p>
                                <BarChart
                                    data={{
                                        labels: socials.map(i => i.name),
                                        datasets: [
                                            {
                                                label: 'Followers',
                                                data: socials.map(i => i.metric),
                                                backgroundColor: '#495AC9',
                                            },
                                        ],
                                    }}
                                />
                            </>
                        }

                        <hr className="my-10" />
                        <h2 className="text-2xl font-medium">R.O.I. of marketing channels</h2>
                        <p>Even though online marketing channels are found to be more effective than offline marketing channels, not all are created the same. If you think of just running banner ads, you need to rethink your marketing strategy.</p>
                        <br />

                        <p>At the front of online marketing strategies sits <b>email marketing</b>, boasting high reach and engagement. Following after that is <b>SEO</b>, a cornerstone of any successful digital campaign. What makes this duo truly formidable is their synergy, working hand in hand to fuel an efficient online marketing engine.</p>
                        <br />
                        <p>SEO is our cup of tea, so if you want to start or improve your marketing strategy, feel free to <span className="a" onClick={() => {
                            // @ts-ignore: Unreachable code error
                            MeetFox.initStaticButton({ url: 'https://meetfox.com/en/e/gliesess/borderless' }); return false;
                        }}>book a call with us</span>.</p>
                        <BarChart
                            data={{
                                labels: ['SEO', 'Email Marketing', 'Banner Ads', 'Social Media Marketing', 'Keyword ads'],
                                datasets: [
                                    {
                                        label: 'ROI ($)',
                                        data: [22, 44, 2, 12, 17],
                                        backgroundColor: '#495AC9',
                                    },
                                ],
                            }}
                        />
                        <p>* According to Data & Marketing Association (DMA)</p>

                        <AuthorBox author={authors[0]} />

                        {size.llg && <RightPanel articleLink={`${domain}/marketing-strategy/${company.slug}`} />}

                        <div className="flex md:hidden my-5 items-center justify-center">
                            <div className='flex flex-col mx-2'>
                                <h2 className="text-2xl font-medium text-center" id={similarArticlesId}>Similar marketing strategy breakdowns</h2>
                                {similarCompanies.map(j => <RetailStrategyComponent company={j} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden self-center md:flex my-5 bottom-5 ${widthClassName}`}>
                    <div className='flex flex-col mx-2'>
                        <h2 className="text-2xl font-medium text-center" id={similarArticlesId}>Similar marketing strategy breakdowns</h2>
                        {similarCompanies.map(j => <RetailStrategyComponent company={j} />)}
                    </div>
                </div>

            </div>

            {size.gmd && <StickyBox className='w-[30%] mt-[30vh] h-fit mr-2'> <RightPanel articleLink={`${domain}/marketing-strategy/${company.slug}`} /> </StickyBox>}
        </div>




    </div>
}



export async function getServerSideProps(context: GetServerSidePropsContext) {
    // await csrf(context.req, context.res)

    const CompanyModel = getCompanyModel(await dbConnect())

    if (!context.params?.slug) return { notFound: true }

    const company = await CompanyModel.findOne({ slug: context.params?.slug as string })

    const similarCompanies = await CompanyModel.find({ category: company?.category, slug: { $ne: company?.slug } }).limit(5)

    if (!company) return { notFound: true }

    return {
        props: {
            company: JSON.parse(JSON.stringify(company)) as typeof company,
            similarCompanies: JSON.parse(JSON.stringify(similarCompanies)) as typeof similarCompanies
        }
    }
}








