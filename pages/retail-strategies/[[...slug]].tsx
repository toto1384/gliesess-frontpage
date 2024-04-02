import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { BasicNextSeo, Navbar } from "../../components/navbar"
import { CenteredCardPage } from "../../components/centeredCardPage"
import 'react-json-view-lite/dist/index.css';
import { MdChevronRight } from "react-icons/md"
import Link from "next/link"
import { domain, innerLeave } from "../../utils/mainUtils"
import { RetailStrategyComponent, retailStrategyPageName } from "../../components/retailStrategyComponent"
import { BreadcrumbJsonLd } from "next-seo"
import { useRouter } from "next/router";
import { getCompanyModel, dbConnect, CompanyObject } from "../../utils/db";


export default function LoginPage({ companies, years, year, type, state, states, types, count: [{ companies: countC }] }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter()
    return <>
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />

        <BasicNextSeo
            title={`${retailStrategyPageName({ category: type?._id, countC, state: state?._id, year: year ?? undefined })} • Gliesess`}
            description={`Browse the ${retailStrategyPageName({ category: type?._id, countC, state: state?._id, year: year ?? undefined, disableCount: true })} on Gliesess.`}
            url={`${domain}/${((router.query.slug ?? []) as string[]).join('/')}`}
        />
        <BreadcrumbJsonLd
            itemListElements={[
                {
                    position: 1,
                    name: retailStrategyPageName({ countC, disableCount: true }),
                    item: `${domain}/retail-strategies`,
                },
                year ? {
                    position: 2,
                    name: retailStrategyPageName({ countC, year: year ?? undefined, disableCount: true }),
                    item: `${domain}/retail-strategies/${year}`,
                } : undefined,
                type ? {
                    position: 3,
                    name: retailStrategyPageName({ countC, category: type._id, disableCount: true }),
                    item: `${domain}/retail-strategies/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`,
                } : undefined,
                state ? {
                    position: 4,
                    name: retailStrategyPageName({ countC, state: state._id, disableCount: true }),
                    item: `${domain}/retail-strategies/${state._id.toLowerCase()}`,
                } : undefined,
                ((year && type) ? {
                    position: 5,
                    name: retailStrategyPageName({ countC, year: year ?? undefined, category: type._id, disableCount: true }),
                    item: `${domain}/retail-strategies/${year}/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`,
                } : undefined),
            ].filter(i => i)}
        />

        <CenteredCardPage className="mt-32 md:mt-0" appBar={<Navbar />}>

            <h1 className="text-3xl font-semibold">{retailStrategyPageName({ category: type?._id, countC, state: state?._id, year: year ?? undefined })}</h1>

            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/retail-strategies'}>Retail Strategies</Link>,
                    (year ? <Link key={2} className='breadcrumb' href={`/retail-strategies/${year}`}>{year}s</Link> : undefined),
                    (type ? <Link key={2} className='breadcrumb' href={`/retail-strategies/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}>{type._id}</Link> : undefined),
                    (state ? <Link key={2} className='breadcrumb' href={`/retail-strategies/${state._id.toLowerCase()}`}>{state._id}</Link> : undefined),

                    ((year && type) ? <Link key={2} className='breadcrumb' href={`/retail-strategies/${year}/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}>{type._id} - {year}s</Link> : undefined),
                ].filter(i => i), (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>

            {(years && !year) && <>
                <h3 className="text-xl font-semibold mt-5">Filter by year</h3>
                <div className="flex flex-row overflow-x-scroll no-scrollbar">
                    {years.map(i => <Link
                        href={`/retail-strategies/${i._id === 'Other' ? '' : i._id}`}
                        className="text-sm px-2 mx-1 whitespace-nowrap bg-gradient-to-r from-blue-100/60 to-purple-100/60 py-1 rounded-xl"
                    >{`${i._id}s`}</Link>)}
                </div>
            </>
            }


            {(types && !type) && <>
                <h3 className="text-xl font-semibold mt-5">Filter by Categories</h3>
                <div className="flex flex-row overflow-x-scroll no-scrollbar">
                    {types.map(i => <Link
                        href={`/retail-strategies/${i._id?.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-') ?? 'Other'}`}
                        className="text-sm px-2 mx-1 whitespace-nowrap bg-gradient-to-r from-blue-100/60 to-purple-100/60 py-1 rounded-xl"
                    >{`${i._id}`}</Link>)}
                </div>
            </>
            }

            {(states && !state) && <>
                <h3 className="text-xl font-semibold mt-5">Filter by States</h3>
                <div className="flex flex-row overflow-x-scroll no-scrollbar">
                    {states.map(i => <Link
                        href={`/retail-strategies/${i._id?.toLowerCase() ?? 'Other'}`}
                        className="text-sm px-2 mx-1 whitespace-nowrap bg-gradient-to-r from-blue-100/60 to-purple-100/60 py-1 rounded-xl"
                    >{`${i._id}`}</Link>)}
                </div>
            </>
            }

            <div className="mt-10">
                {companies.map(company => <RetailStrategyComponent company={company} />)}
            </div>

        </CenteredCardPage>
    </>
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    // await csrf(context.req, context.res)

    const CompanyModel = getCompanyModel(await dbConnect())

    // types
    const yearsArray = [];

    for (let year = 1800; year <= new Date().getFullYear(); year += 10) {
        yearsArray.push(year);
    }

    const [{ states, types, years }]: {
        types: { _id: string, count: number }[],
        states: { _id: string, count: number }[],
        years: any[],
        count: { companies: number }[]
    }[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
        {
            $facet: {
                types: [
                    { $group: { _id: "$category", count: { $count: {} } } },
                ],
                states: [
                    {
                        $addFields: {
                            resultObject: {
                                $regexFind: {
                                    input: "$serpProps.headquarters",
                                    regex: /[A-Z][A-Z]/
                                },
                            },
                        },
                    },
                    {
                        $match: {
                            resultObject: { $ne: null },
                        },
                    },
                    {
                        $group: {
                            _id: "$resultObject.match",
                            fieldN: {
                                $count: {},
                            },
                        },
                    },
                    { $sort: { fieldN: -1 } },
                ],
                years: [
                    { $addFields: { resultObject: { $regexFind: { input: "$serpProps.founded", regex: /\b\d{4}\b/ } } } },
                    {
                        $addFields: {
                            year: { $toInt: "$resultObject.match" },
                        }
                    },
                    {
                        $bucket: {
                            groupBy: "$year",
                            boundaries: yearsArray,
                            default: "Other",
                            output: {
                                "count": { $sum: 1 },
                            }
                        }
                    },
                    // { $sort: { count: -1 } },
                    { $limit: 20 }
                ]
            }
        }

    ])

    const type = types.find(i => context.params?.slug?.includes(i._id?.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-'))) ?? null

    const state = states.find(i => context.params?.slug?.includes(i._id?.toLowerCase())) ?? null
    console.log("🚀 ~ getServerSideProps ~ state:", state)

    const year = (context.params?.slug as string[] ?? []).find((i: string) => /\b\d{4}\b/.test(i)) ?? null

    const [{ companies, count }]: { companies: CompanyObject, count: [{ companies: number }] }[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
        ...(year ? [
            { $addFields: { resultObject: { $regexFind: { input: "$serpProps.founded", regex: new RegExp(year.replace(/\d$/, '\\d')) } } } },
            {
                $match: {
                    resultObject: { $ne: null }
                }
            }
        ] : []),
        ...(type ? [{ $match: { "category": type._id } }] : []),
        ...(state ? [
            { $addFields: { resultObject: { $regexFind: { input: "$serpProps.founded", regex: new RegExp(state._id.toUpperCase()) } } } },
            {
                $match: {
                    resultObject: { $ne: null }
                }
            }
        ] : []),

        {
            $facet: {
                companies: [
                    // { $match: [] }
                ],
                count: [
                    {
                        $count: "companies"
                    }
                ],
            }
        }
    ])



    return {
        props: {
            companies: JSON.parse(JSON.stringify(companies)) as CompanyObject[],
            years: JSON.parse(JSON.stringify(years)) as { _id: string, count: number }[] | undefined,
            types: JSON.parse(JSON.stringify(types)) as { _id: string, count: number }[] | undefined,
            states: JSON.parse(JSON.stringify(states)) as { _id: string, count: number }[] | undefined,
            year, type, state, count
        }
    }
}