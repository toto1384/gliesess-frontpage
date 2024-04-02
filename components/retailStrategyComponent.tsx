import Image from "next/image";
import { MdBusiness } from "react-icons/md";
import Link from "next/link";
import { CompanyObject } from "../utils/db";

export function RetailStrategyComponent({ company }: { company: CompanyObject }) {

    const state = company.serpProps?.headquarters?.match(/[A-Z][A-Z]/)?.[0].toLowerCase()
    return <div className="flex flex-row space-x-2 bg-gradient-to-r from-blue-100/60 to-purple-100/60 my-2 px-2 py-1 rounded-xl items-center">
        <Link href={`/retail-strategy/${company.slug}`}>
            <div className="w-[50px] h-[50px]">
                {company.icon ? <div className="rounded-xl overflow-hidden"><Image
                    width={50} height={50} className="object-contain"
                    src={company.icon as string}
                    alt={`${company.name} Logo`}
                /></div> : <div className="w-12 h-12"><MdBusiness className="w-12 h-12" /></div>}
            </div>
        </Link>
        <div className="flex flex-col">
            <Link href={`/retail-strategy/${company.slug}`} className="a"><h3 className="text-xl font-semibold">{company.name}</h3></Link>

            <div className="flex flex-row items-center space-x-2 mt-2">
                <Link href={`/retail-strategy/${company.category}`} className="a"><p className="">{company.category}</p></Link>
                {company.serpProps?.headquarters && <>
                    <span>•</span>
                    {state ? <Link href={`/retail-strategies/${state}`} className="a">{company.serpProps?.headquarters}</Link> : <p>{company.serpProps.headquarters}</p>}

                </>
                }
            </div>

            <p className="line-clamp-2">{company.description?.slice(0, 100)}...</p>
            {/* <p>{company.domain}</p> */}
            {/* <div className="flex flex-row">
                {company.serpProps?.founded && <p className="chip border rounded px-2 mx-1">Founded: {company.serpProps?.founded}</p>}
                {company.serpProps?.founders && <p className="chip border rounded px-2 mx-1">Founders: {company.serpProps?.founders}</p>}
                {company.serpProps?.headquarters && <p className="chip border rounded px-2 mx-1">Headquarters: {company.serpProps?.headquarters}</p>}
                {company.serpProps?.type && <p className="chip border rounded px-2 mx-1">Type: {company.serpProps?.type}</p>}
            </div> */}
        </div>
        {/* <JsonView data={JSON.parse(company.serp ?? '{}')} shouldExpandNode={allExpanded} style={darkStyles} /> */}
    </div>
}



export const retailStrategyPageName = ({ category, countC, state, year, disableCount }: { countC: number, category?: string, state?: string, year?: string | number, disableCount?: boolean }) => `${disableCount ? '' : `${countC} `}${category ? `${category.toLowerCase()} ` : ''}${`${(!disableCount && countC) || category ? 'm' : 'M'}arketing strategy breakdowns`} ${(year || state) ? `of ${year ?? ''}${(year && state) ? ', ' : ''}${state ? state : ''} companies` : ''}`