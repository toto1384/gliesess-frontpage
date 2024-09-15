import Image from "next/image";
import { MdBusiness, MdExpandMore, MdOpenInNew } from "react-icons/md";
import Link from "next/link";
import { CompanyObject } from "../utils/types";
import { createElement, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons";
import { kFormatter } from "../utils/mainUtils";

export function RetailStrategyComponent({ company }: { company: CompanyObject }) {

    const [expanded, setExpanded] = useState(false)

    const socials = [
        { name: 'LinkedIn', metric: company.linkedinFollowers, icon: FaLinkedin },
        { name: 'Facebook', metric: company.facebook?.followers, icon: FaFacebook },
        { name: 'Instagram', metric: company.instagramFollowers, icon: FaInstagram },
        { name: 'Youtube', metric: company.youtube?.subscribers, icon: FaYoutube },
    ].filter(i => i.metric) as { name: string, metric: number, icon: IconType }[]

    return <div className="flex flex-col">
        <div className="flex flex-row space-x-2 bg-gradient-to-r from-blue-100/60 to-purple-100/60 my-2 px-2 py-1 rounded-xl items-center">
            <Link href={`/marketing-strategy/${company.slug}`}>
                <div className="w-[50px] h-[50px]">
                    {company.icon ? <div className="rounded-xl overflow-hidden"><Image
                        width={50} height={50} className="object-contain"
                        src={company.icon as string}
                        alt={`${company.name} Logo`}
                    /></div> : <div className="w-12 h-12"><MdBusiness className="w-12 h-12" /></div>}
                </div>
            </Link>
            <div className="flex flex-col">
                <Link href={`/marketing-strategy/${company.slug}`} className="a"><h3 className="text-xl font-semibold">{company.name}</h3></Link>

                <div className="flex flex-row items-center space-x-2 mt-2">
                    <Link href={`/marketing-strategies/${company.category.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}`} className="a"><p className="">{company.category}</p></Link>
                    {company.state && <>
                        <span>•</span>
                        {company.state ? <Link href={`/marketing-strategies/${company.state.slug}`} className="a">{company.state.name}</Link> : <p>{company.serpProps?.headquarters}</p>}

                    </>
                    }
                </div>

                <p className="line-clamp-2">{company.descriptionNew?.slice(0, 100)}...</p>
                {/* <p>{company.domain}</p> */}
                {/* <div className="flex flex-row">
                {company.serpProps?.founded && <p className="chip border rounded px-2 mx-1">Founded: {company.serpProps?.founded}</p>}
                {company.serpProps?.founders && <p className="chip border rounded px-2 mx-1">Founders: {company.serpProps?.founders}</p>}
                {company.serpProps?.headquarters && <p className="chip border rounded px-2 mx-1">Headquarters: {company.serpProps?.headquarters}</p>}
                {company.serpProps?.type && <p className="chip border rounded px-2 mx-1">Type: {company.serpProps?.type}</p>}
            </div> */}
            </div>
            {/* <JsonView data={JSON.parse(company.serp ?? '{}')} shouldExpandNode={allExpanded} style={darkStyles} /> */}
            <div><MdExpandMore className={`${expanded ? 'rotate-180' : ''} transition-all cursor-pointer select-none w-7 h-7`} onClick={() => setExpanded(!expanded)} /></div>
        </div>
        <div className={`${expanded ? 'h-36' : 'h-0 invisible'} flex items-center w-full transition-height bg-gradient-to-t from-blue-100/60 to-purple-100/60 rounded-xl px-5 py-1`}>
            <div className="flex flex-row justify-between w-full">
                <div>
                    <h4 className="text-lg font-semibold">Socials</h4>
                    {socials.map(i => <div className="flex flex-row items-center space-x-1">
                        {createElement(i.icon)}
                        {kFormatter(i.metric)}
                    </div>)}
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Search engines</h4>
                    {company.domainAuthority && <p>Domain Authority: {company.domainAuthority}</p>}
                    {company.organicTraffic && <p>Organic Traffic: {kFormatter(company.organicTraffic)}</p>}
                    {<p>Paid Traffic: {kFormatter(company.paidTraffic ?? 0)}</p>}
                    {company.domain && <Link className="a flex flex-row items-center" href={`https://${company.domain}`}>{company.domain} <MdOpenInNew /></Link>}
                </div>
            </div>
        </div>
    </div>
}



export const retailStrategyPageName = ({ category, countC, state, year, disableCount }: { countC: number, category?: string, state?: string, year?: string | number, disableCount?: boolean }) => `${disableCount ? '' : `${countC} `}${category ? `${category.toLowerCase()} ` : ''}${`${(!disableCount && countC) || category ? 'm' : 'M'}arketing ${countC == 1 ? "strategy" : "strategies"}`} ${(year || state) ? `of ${year ? `${year}'s` : ''}${(year && state) ? ', ' : ''}${state ? state : ''} companies` : ''}`