import removeMarkdown from "markdown-to-text"
import Link from "next/link"
import { BlogItemType, } from "../utils/blog"
import Image from "next/image"
import { domain } from "../utils/mainUtils"


export function BlogItem({ i }: { i: BlogItemType }) {
    const href = `/blog/${i.slug}`
    return <div className="bg-gradient-to-r from-blue-100/60 to-purple-100/60 flex space-x-2 flex-col md:flex-row items-center rounded-xl m-2 border-blue-200 ">
        <Link href={href}>
            <div className="w-[122px] h-[122px]">
                <Image className="ml-1  rounded-lg" width="122" height="122" src={`${domain}/blog/${i.image}`} alt={`${i.image} blog image`}></Image>
            </div>
        </Link>
        <div className="flex flex-col w-fit p-2">
            <Link href={href} className="hover:text-blue-500 group p-1" >
                <h3 className="text-lg w-full">{i.h1}</h3>
            </Link>
            <h4 className="mb-1">{i.category.map(j => <Link href={`/blog/categories/${j.toLowerCase().replaceAll(' ', '-')}`} className="a p-1"><span className="hoverableChip mr-1">{j}</span></Link>)}</h4>
            <p className="w-fit text-sm">{i.description ?? removeMarkdown(i.mdText).slice(0, 200)}</p>
        </div>

    </div>
}


export function AuthorItem({ i }: { i: { name: string, image: string } }) {
    return <Link
        href={`/blog/authors/${i.name.toLowerCase().replaceAll(' ', '-')}`}
        className="flex flex-col rounded-xl bg-gradient-to-r from-blue-100/60 to-purple-100/60 group items-center w-fit px-6 py-4 transition-all cursor-pointer"
    >
        <Image width={100} height={100} className="rounded-full group-hover:scale-110 transition-all border-blue-950 border-4 aspect-square object-cover" alt={`${i.name} profile picture`} src={`${i.image}`} />
        <h3 className="font-semibold text-xl group-hover:underline">{i.name}</h3>
    </Link>
}

export function AuthorBox({ author }: { author: { name: string, image: string, shortDescription: string } }) {
    return <div className='border rounded-xl my-10 flex flex-row space-x-2 items-center px-4 py-2'>
        <div className='w-[100px] h-[100px] flex flex-row items-center'>
            <Image width={100} height={100} className="rounded-full group-hover:scale-110 transition-all border-blue-950 border-4 aspect-square object-cover" alt={`${author.name} profile picture`} src={`${author.image}`} />
        </div>

        <div className='w-fit'>
            <p>Author</p>
            <Link className='a text-xl' href={`/blog/authors/${author.name.toLowerCase().replaceAll(' ', '-')}`}>
                {author.name}
            </Link>
            <p className='mt-3'>
                {author.shortDescription}

            </p>
        </div>

    </div>
}


export function CategoryItem({ i }: { i: { name: string, image: string } }) {
    return <Link
        href={`/blog/categories/${i.name.toLowerCase().replaceAll(' ', '-')}`}
        className="flex flex-col rounded-xl items-center w-fit pb-4 bg-gradient-to-r from-blue-100/60 to-purple-100/60 transition-all cursor-pointer"
    >
        <Image width={300} height={300} className="rounded-t-xl aspect-video object-cover" alt={`${i.name} profile picture`} src={`/${i.image}`} />
        <h3 className="font-semibold text-xl">{i.name}</h3>
    </Link>
}

export function TagItem({ i }: { i: string }) {
    return <Link
        href={`/blog/tags/${i.toLowerCase().replaceAll(' ', '-')}`}
        className="flex flex-col rounded-xl items-center w-fit m-1.5 bg-gradient-to-r from-blue-100/60 to-purple-100/60 transition-all cursor-pointer"
    >
        {/* <Image width={300} height={300} className="rounded-t-xl aspect-video object-cover" alt={`${i.name} profile picture`} src={`/${i.image}`} /> */}
        <h3 className="font-medium text-lg hover:underline p-2">{i}</h3>
    </Link>
}