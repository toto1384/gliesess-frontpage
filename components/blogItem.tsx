import removeMarkdown from "markdown-to-text"
import Link from "next/link"
import { BlogItem, domain } from "../utils/blog"
import Image from "next/image"


export function BlogItem({ i }: { i: BlogItem }) {
    const href = `/blog/${i.slug}`
    return <div className="border flex space-x-2 flex-row items-center rounded-lg my-2 border-blue-200 ">
        <Link className="w-[192px]" href={href}>
            <img className="ml-1 rounded-lg" width="192" height="192" src={`${domain}/blog/${i.image}`} alt={`${i.image} blog image`}></img>
        </Link>
        <div className="flex flex-col w-fit p-2">
            <Link href={href} className="hover:text-blue-500 group" >
                <h4 className="text-lg w-full">{i.h1}</h4>
            </Link>
            <h6 className="mb-1">{i.category.map(j => <Link href={`/blog/category/${j.toLowerCase().replaceAll(' ', '-')}`}><span className="hoverableChip mr-1">{j}</span></Link>)}</h6>
            <p className="w-fit text-sm">{i.description ?? removeMarkdown(i.mdText).slice(0, 200)}</p>
        </div>

    </div>
}