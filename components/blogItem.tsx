import removeMarkdown from "markdown-to-text"
import Link from "next/link"
import { BlogItemType, domain } from "../utils/blog"
import Image from "next/image"


export function BlogItem({ i }: { i: BlogItemType }) {
    const href = `/blog/${i.slug}`
    return <div className="border flex space-x-2 flex-col md:flex-row items-center rounded-lg m-2 border-blue-200 ">
        <Link className="w-[192px]" href={href}>
            <Image className="ml-1  rounded-lg" width="192" height="192" src={`${domain}/blog/${i.image}`} alt={`${i.image} blog image`}></Image>
        </Link>
        <div className="flex flex-col w-fit p-2">
            <Link href={href} className="hover:text-blue-500 group" >
                <h4 className="text-lg w-full">{i.h1}</h4>
            </Link>
            <h6 className="mb-1">{i.category.map(j => <Link href={`/blog/categories/${j.toLowerCase().replaceAll(' ', '-')}`} className="a"><span className="hoverableChip mr-1">{j}</span></Link>)}</h6>
            <p className="w-fit text-sm">{i.description ?? removeMarkdown(i.mdText).slice(0, 200)}</p>
        </div>

    </div>
}


export function AuthorItem({ i }: { i: { name: string, image: string } }) {
    return <Link
        href={`/blog/authors/${i.name.toLowerCase().replaceAll(' ', '-')}`}
        className="flex flex-col border rounded items-center w-fit px-6 py-4 hover:bg-blue-100 transition-all cursor-pointer"
    >
        <Image width={100} height={100} className="rounded-full border-blue-950 border-4 aspect-square object-cover" alt={`${i.name} profile picture`} src={`/${i.image}`} />
        <h3 className="font-semibold text-xl">{i.name}</h3>
    </Link>
}


export function CategoryItem({ i }: { i: { name: string, image: string } }) {
    return <Link
        href={`/blog/categories/${i.name.toLowerCase().replaceAll(' ', '-')}`}
        className="flex flex-col border rounded items-center w-fit pb-4 hover:bg-blue-100 transition-all cursor-pointer"
    >
        <Image width={300} height={300} className="rounded-t aspect-video object-cover" alt={`${i.name} profile picture`} src={`/${i.image}`} />
        <h3 className="font-semibold text-xl">{i.name}</h3>
    </Link>
}