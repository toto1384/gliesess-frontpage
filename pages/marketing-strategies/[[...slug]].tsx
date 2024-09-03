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
import { getCompanyModel, dbConnect, } from "../../utils/db";
import { CompanyObject } from "../../utils/types";


export default function LoginPage({ companies, years, year, type, state, states, types, count: givenCount }: InferGetServerSidePropsType<typeof getStaticProps>) {

    const router = useRouter()

    // const [page, setPage] = useState(1)

    const page = Number((router.query.slug as string[])?.find(i => i.match(/page-\d$/))?.split('-')[1] ?? "1")


    const count = givenCount?.[0]?.companies ?? 0


    return <>
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />

        <BasicNextSeo
            additionalProps={{
                noindex: count === 0
            }}
            title={`${retailStrategyPageName({ category: type?._id, countC: count, state: state?._id, year: year ?? undefined })}`}
            description={`Browse the ${retailStrategyPageName({ category: type?._id, countC: count, state: state?._id, year: year ?? undefined, disableCount: true })} on Gliesess.`}
            url={`${domain}/marketing-strategies/${((router.query.slug ?? []) as string[]).join('/')}`.replace(/\/$/g, "")}
        />
        <BreadcrumbJsonLd
            itemListElements={[
                {
                    position: 1,
                    name: retailStrategyPageName({ countC: count, disableCount: true }),
                    item: `${domain}/marketing-strategies`,
                },
                year ? {
                    position: 2,
                    name: retailStrategyPageName({ countC: count, year: year ?? undefined, disableCount: true }),
                    item: `${domain}/marketing-strategies/${year}`,
                } : undefined,
                type ? {
                    position: 3,
                    name: retailStrategyPageName({ countC: count, category: type._id, disableCount: true }),
                    item: `${domain}/marketing-strategies/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`,
                } : undefined,
                state ? {
                    position: 4,
                    name: retailStrategyPageName({ countC: count, state: state._id, disableCount: true }),
                    item: `${domain}/marketing-strategies/${state._id.toLowerCase()}`,
                } : undefined,
                ((year && type) ? {
                    position: 5,
                    name: retailStrategyPageName({ countC: count, year: year ?? undefined, category: type._id, disableCount: true }),
                    item: `${domain}/marketing-strategies/${year}/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`,
                } : undefined),
            ].filter(i => i)}
        />

        <CenteredCardPage className="mt-32 md:mt-0" appBar={<Navbar />}>

            <h1 className="text-3xl font-semibold">{retailStrategyPageName({ category: type?._id, countC: count, state: state?._id, year: year ?? undefined })}</h1>

            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/marketing-strategies'}>Retail Strategies</Link>,
                    (year ? <Link key={2} className='breadcrumb' href={`/marketing-strategies/${year}`}>{year}s</Link> : undefined),
                    (type ? <Link key={2} className='breadcrumb' href={`/marketing-strategies/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}>{type._id}</Link> : undefined),
                    (state ? <Link key={2} className='breadcrumb' href={`/marketing-strategies/${state._id.toLowerCase()}`}>{state._id}</Link> : undefined),

                    ((year && type) ? <Link key={2} className='breadcrumb' href={`/marketing-strategies/${year}/${type._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`}>{type._id} - {year}s</Link> : undefined),
                ].filter(i => i), (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>

            {(years && !year) && <>
                <h3 className="text-xl font-semibold mt-5">Filter by year</h3>
                <div className="flex flex-row overflow-x-scroll no-scrollbar">
                    {years.map(i => <Link
                        href={`/marketing-strategies/${i._id === 'Other' ? '' : i._id}`}
                        className="text-sm px-2 mx-1 whitespace-nowrap bg-gradient-to-r from-blue-100/60 to-purple-100/60 py-1 rounded-xl"
                    >{`${i._id}s`}</Link>)}
                </div>
            </>
            }


            {(types && !type) && <>
                <h3 className="text-xl font-semibold mt-5">Filter by Categories</h3>
                <div className="flex flex-row overflow-x-scroll no-scrollbar">
                    {types.map(i => <Link
                        href={`/marketing-strategies/${i._id?.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-') ?? 'Other'}`}
                        className="text-sm px-2 mx-1 whitespace-nowrap bg-gradient-to-r from-blue-100/60 to-purple-100/60 py-1 rounded-xl"
                    >{`${i._id}`}</Link>)}
                </div>
            </>
            }

            {(states && !state) && <>
                <h3 className="text-xl font-semibold mt-5">Filter by States</h3>
                <div className="flex flex-row overflow-x-scroll no-scrollbar">
                    {states.map(i => <Link
                        href={`/marketing-strategies/${i._id?.toLowerCase().replaceAll(' ', "-") ?? 'Other'}`}
                        className="text-sm px-2 mx-1 whitespace-nowrap bg-gradient-to-r from-blue-100/60 to-purple-100/60 py-1 rounded-xl"
                    >{`${i._id}`}</Link>)}
                </div>
            </>
            }

            <div className="mt-10">
                {companies.map(company => <RetailStrategyComponent company={company} />)}
            </div>

            {((page !== 1) || (count > (companies.length + (20 * (page - 1))))) && <div className="flex flex-row max-w-[100vw] overflow-x-scroll overflow-y-hidden items-center mt-5">
                {Array.from(Array(page - 1)).map((i, index) => {
                    return <Link key={index}
                        href={`/marketing-strategies/${((router.query.slug ?? []) as string[]).filter(i => !i.includes('page')).join('/')}/page-${index + 1}`}
                        className="rounded text-center px-2 py-1 mr-2 bg-gradient-to-r from-blue-100/60 to-purple-100/60"
                    >
                        {index + 1}
                    </Link>
                })}


                {(count > (companies.length + (20 * (page - 1)))) && <Link
                    href={`/marketing-strategies/${((router.query.slug ?? []) as string[]).filter(i => !i.includes('page')).join('/')}/page-${page + 1}`}
                    className="rounded min-w-[150px] px-2 py-1 text-center bg-gradient-to-r from-blue-100/60 to-purple-100/60"
                >
                    <p className="line-clamp-1"> Next </p>
                </Link>
                }

            </div>}

        </CenteredCardPage>
    </>
}


export async function getStaticProps(context: GetServerSidePropsContext) {
    // await csrf(context.req, context.res)

    const CompanyModel = getCompanyModel(await dbConnect())

    // types
    const yearsArray = [];

    for (let year = 1800; year <= new Date().getFullYear(); year += 10) {
        yearsArray.push(year);
    }


    // fetch the filters
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
                        $match: {
                            "state.name": { $ne: null },
                        },
                    },
                    {
                        $group: {
                            _id: "$state.name",
                            fieldN: {
                                $count: {},
                            },
                        },
                    },
                    { $sort: { fieldN: -1 } },
                ],
                years: [
                    {
                        $bucket: {
                            groupBy: "$foundedYear",
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

    const state = states.find(i => context.params?.slug?.includes(i._id?.toLowerCase().replaceAll(' ', '-'))) ?? null
    console.log("🚀 ~ getServerSideProps ~ state:", state)

    const year = (context.params?.slug as string[] ?? []).find((i: string) => /\b\d{4}\b/.test(i)) ?? null


    const page = Number(((context.params?.slug as string[] ?? []).find(i => i.match(/page-\d$/))?.split('-')[1]) ?? "1")

    // fetch the objects
    const aggregation = [
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
            { $match: { "state.name": state._id } }
        ] : []),

        {
            $facet: {
                companies: [
                    // { $match: [] }
                    { $skip: (page - 1) * 20 },
                    { $limit: 20 }
                ],
                count: [
                    {
                        $count: "companies"
                    }
                ],
            }
        }
    ]
    console.dir(aggregation, { depth: 100 })

    const [{ companies, count }]: { companies: CompanyObject, count?: [{ companies: number }] }[] = await CompanyModel.aggregate(aggregation)



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


export async function getStaticPaths() {


    const CompanyModel = getCompanyModel(await dbConnect())

    const categories: { _id: string, count: number }[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
        { $group: { _id: "$category", count: { $count: {} } } },
    ])

    const state: { _id: string, count: number }[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
        {
            $match: {
                "state.slug": { $ne: null },
            },
        },
        {
            $group: {
                _id: "$state.slug",
                count: {
                    $count: {},
                },
            },
        },
        { $sort: { fieldN: -1 } },
    ])

    const yearsArray = [];

    for (let year = 1800; year <= new Date().getFullYear(); year += 10) {
        yearsArray.push(year);
    }

    const year: { _id: string, count: number }[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
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
        { $sort: { count: -1 } },
    ])

    let paths: any[] = [];

    paths = [...paths, ...[...year, ...state, ...categories].map((post) => {
        // console.log(post)  
        return { params: { slug: [post._id] }, }
    })]

    console.log(paths)

    // { fallback: false } means other routes should 404
    return { paths, fallback: 'blocking' }
}