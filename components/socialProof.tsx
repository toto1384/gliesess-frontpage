import Link from "next/link";
import { useSize } from "../utils/useSize";


export const SocialProof = () => {
    const size = useSize(true)


    return (
        <section className="w-full md:my-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">

            {size.lmd && <hr className='w-full mb-7' />}
            <div className="text-center md:pb-8">
                <h2 className="text-3xl font-bold md:mb-2">Success Stories and Case Studies</h2>
                <p className="text-gray-600">See how the people working with us achieve their objectives:</p>
            </div>
            <div className="grid justify-items-stretch grid-cols-1 md:grid-cols-3 gap-4 mx-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden px-4 py-5 sm:p-6">
                    <Link className="a text-lg font-medium text-gray-900 mb-4" href={'/seo-case-studies/10x-internal-linking'}>
                        How we 10x the number of Google organic pages in 2 months for one of our clients
                    </Link>
                    <p>
                        Read exactly how we 10x the organic pages indexed on Google for one of our clients. Towards the end you are going to see the strategies we used to do it!
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden px-4 py-5 sm:p-6">
                    <Link className="a text-lg font-medium text-gray-900 mb-4" href={'/seo-case-studies/10x-internal-linking'}>
                        How we got 4 hight-ticket deals(5-20k) in a month for one of our clients
                    </Link>
                    <p>
                        Read exactly how we 4 high-ticket deals for one of our clients. Towards the end you are going to see the strategies we used to do it!
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <blockquote>
                            <div className="text-lg font-medium text-gray-900 mb-4">
                                “(The founder's) ...expertise exceeded my expectations. He consulted and educated me on tech for my app to find the best, cheapest, and most efficient way.„
                            </div>
                            <div className="flex items-center">
                                <div className="">
                                    <div className="text-sm font-medium text-gray-900">David Lehnhardt</div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};