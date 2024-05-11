import Image from "next/image";
import { Navbar } from "../components/navbar";
import Link from "next/link";
import { BlogItem } from "../components/blogItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { dbConnect, getBlogModel } from "../utils/db";




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
                    <li className="my-1.5">Read our <Link href={`/seo-case-studies`} className="a">case studies</Link>?</li>
                </ol>
                <h2 className="text-3xl font-medium mt-7">Or read our latest <Link className="a" href={'/blog'}>posts</Link> - our latest <Link className="a" href={'/seo-case-studies/10x-internal-linking'}>case study</Link> and <Link className="a" href={'/small-company-marketing/effective-strategies'}>effective marketing strategies</Link></h2>

            </div>
        </div>
    </div>
}

