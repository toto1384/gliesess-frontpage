import { MdChevronRight } from "react-icons/md";
import { tags, } from "../../../utils/blog";
import { tagsTitle, domain, innerLeave } from "../../../utils/mainUtils";
import { CenteredCardPage } from "../../../components/centeredCardPage";
import { BasicNextSeo, Navbar } from "../../../components/navbar";
import Link from "next/link";
import { TagItem } from "../../../components/blogItem";


export default function Authors() {

    const description = `Blog tags - Explore tags such as ${tags.slice(0, 3).map(i => `${i}, `)}`
    const url = `${domain}/blog/tags`
    return <>
        <BasicNextSeo title={tagsTitle} description={description} url={url} />
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <CenteredCardPage appBar={<Navbar />} className='mt-32'>
            <nav aria-label='breadcrumb' className='rounded mb-5 text-sm bg-gray-0 flex items-center flex-wrap'>
                {innerLeave([
                    <Link key={1} className='breadcrumb' href={'/blog'}>Blog</Link>,
                    <Link key={2} className='breadcrumb' href={`/blog/tags`}>Tags</Link>,
                ], (index: any) => <MdChevronRight className='mx-1 my-2' key={`chevron-${index}`} />)}
            </nav>
            <h1 className="text-3xl">Tags • Gliesess Blog</h1>
            <div className="flex flex-wrap items-center mt-5">
                {tags.map(i => <TagItem i={i} />)}
            </div>
        </CenteredCardPage>
    </>
}
