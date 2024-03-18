import Image from "next/image";
import { Navbar } from "../components/navbar";
import Link from "next/link";
import { BlogItem } from "../components/blogItem";
import { blogs } from "../utils/blog";




export default function NotFoundPage() {
    return <div>
        <Navbar />
        <div className="flex flex-col md:flex-row w-full items-center">
            <div className="relative w-full aspect-square md:w-[40%] md:h-[65vh]">
                <Image src={'/gliesess-not-found.webp'} alt="Gliesess not found" className="object-cover" fill />
            </div>
            <div className="flex flex-col mx-10">
                <h1 className="text-3xl md:text-5xl font-semibold mb-7 mt-5">The resource is not available</h1>
                <p className="font-semibold text-lg">Is there any chance you were looking to...</p>
                <ol className="list-decimal">
                    <li className="my-1.5">Read our stories and insights? <Link className="a" href={'/blog'}>Read our blog</Link></li>
                    <li className="my-1.5">See what we have to offer? See our <Link className="a" href={'/services'}>services</Link></li>
                    <li className="my-1.5">Read our <Link href={`/blog/categories/case-study`} className="a">case studies</Link>?</li>
                </ol>
                <h2 className="text-3xl font-medium mt-7">Or read our latest <Link className="a" href={'/blog'}>posts</Link></h2>
                {blogs.slice(0, 3).map(i => <BlogItem i={i} />)}

            </div>
        </div>
    </div>
}