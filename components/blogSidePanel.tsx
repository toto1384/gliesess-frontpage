import React from "react";
import { useEffect, useRef, useState } from "react";
import { ShareButton } from "./shareButton";
import { domain } from "../utils/mainUtils";
import { NewsletterForm } from "./footer";
import { useRouter } from "next/router";

export const similarArticlesId = 'similarArticles'
export const publishedById = 'publishedBy'
export const contentsId = 'contents'

export const widthClassName: string = `md:min-h-fit md:min-w-[30rem] md:w-fit md:mb-10 max-w-4xl transition mx-auto`

export function RightPanel({ articleLink }: { articleLink: string }) {
    return <>
        <div className='bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-xl mt-10 pt-10 px-2'>
            <div className='mx-2'>
                <h2 id={contentsId} className='text-xl font-semibold mb-1.5'>Improve your customer acquisition systems</h2>
                <p>One email at a time</p>
                <p>(no spam, we promise)</p>
            </div>
            <NewsletterForm />
        </div>
        <div className='px-4 bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-xl mt-6 py-7'>
            <h2 id={contentsId} className='text-xl font-semibold mb-1.5'>Share this post on the internet!</h2>
            <ShareButton link={articleLink} />
        </div>
    </>
}

function useHeadings() {
    const [headings, setHeadings] = React.useState<Element[]>([]);

    const router = useRouter()

    React.useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3, h4"));
        setHeadings(elements);
    }, [router.pathname]);
    return headings.slice(0, headings.findIndex(el => similarArticlesId === el.id)).filter(i => ![publishedById, contentsId].includes(i.id));
}

// Now, the function that renders it all
export function TableOfContent({ className }: { className?: string }) {
    const headings = useHeadings();

    const { activeId } = useHeadsObserver(headings)

    return <div className={`bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-xl py-5 ${className}`}>
        <h2 className='text-xl font-semibold ml-5 mb-2' id={contentsId}>Contents</h2>
        {/* {activeId} */}
        <ul className=''>
            {headings.map(heading => (
                <li
                    className={`w-fit cursor-pointer border-l-2 ${activeId === heading.id && 'border-l-blue-800'} hover:border-l-blue-500`}
                    // onClick={() => heading.scrollIntoView()}
                    style={{
                        marginLeft: Number(heading.tagName[1]) * 10
                    }}
                    key={heading.textContent}
                >
                    <a href={`#${heading.id}`} className='p-2'>
                        {heading.textContent}
                    </a>
                </li>
            ))}
        </ul>
    </div>
}

export function useHeadsObserver(toObserveElements: Element[]) {
    const observer = useRef<any>()
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const handleObsever = (entries: any[]) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        observer.current = new IntersectionObserver(handleObsever, {
            rootMargin: "-20% 0% -35% 0px"
        }
        )

        toObserveElements.map((elem) => observer.current.observe(elem))

        return () => observer.current?.disconnect()
    }, [toObserveElements])

    return { activeId }
}