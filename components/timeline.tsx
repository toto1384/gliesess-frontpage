import { useSize } from "../utils/useSize"



export function TimelineView({ data, widthLimit }: { data: { title: string, description: string }[], widthLimit?: string }) {
    const size = useSize(true)
    return <>
        {size.size === 'xs' ? <div className="flex flex-row w-full px-5">
            <div className="h-[180vh] w-1.5 lg:w-full my-auto lg:h-1.5 bg-indigo-500 rounded"></div>
            <div className="flex flex-col w-fit space-y-4">
                {data.map((i, index) => <div className="flex flex-row h-full justify-center items-center">
                    <div className="-mr-[2px] inline-block overflow-hidden -rotate-90">
                        <div className="h-3 w-4 origin-bottom-left rotate-45 transform border-3 bg-indigo-500"></div>
                    </div>
                    <div className="border-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-1 mr-2 h-full w-fit">
                        <div className="alternateBgWhite h-full w-full p-2 rounded">
                            <h3 className="text-xl font-medium">{index + 1}. {i.title}</h3>
                            <p>{i.description}</p>

                        </div>
                    </div>
                </div>)}
            </div>
        </div> :
            <div className="flex flex-row lg:flex-col mx-2 w-full">
                <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] grid-cols-1 gap-3">
                    {data.filter((v, i) => i % 2 == 0).map((i, index) => <div className={`flex ${widthLimit ?? "max-w-sm"} flex-row items-center lg:flex-col h-full`}>
                        <div className="border-3 bg-gradient-to-l lg:bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-md p-1 h-full w-fit">
                            <div className="alternateBgWhite p-2 rounded w-full h-full">
                                <h3 className="text-xl font-medium bg-gradient-to-l lg:bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">{(index + 1) * 2 - 1}. {i.title}</h3>
                                <p>{i.description}</p>
                            </div>
                        </div>
                        <div className={`mx-auto ${size.llg && '-ml-[2px]'} lg:-mt-[2px] inline-block overflow-hidden rotate-90 lg:rotate-180`}>
                            <div className="h-3 w-4 origin-bottom-left rotate-45 transform border-3 bg-indigo-500"></div>
                        </div>
                    </div>)}
                </div>

                <div className="h-[90vh] w-1.5 lg:w-full my-auto lg:h-1.5 bg-indigo-500 rounded"></div>

                <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] grid-cols-1 gap-3">
                    {data.filter((v, i) => i % 2 !== 0).map((i, index) => <div className={`flex ${widthLimit ?? "max-w-sm"} h-full flex-row items-center lg:flex-col ${index === 0 ? 'lg:ml-10 xl:ml-16' : 'lg:ml-3 xl:ml-4'}`}>
                        <div className={`mx-auto ${size.llg && '-mr-[2px]'} lg:-mb-[2px] inline-block overflow-hidden -rotate-90 lg:rotate-0`}>
                            <div className="h-3 w-4 origin-bottom-left rotate-45 transform border-3 bg-indigo-500"></div>
                        </div>
                        <div className="border-3 bg-gradient-to-r lg:bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-full rounded-md p-1 w-fit">
                            <div className="rounded alternateBgWhite p-2 w-full h-full">
                                <h3 className="text-xl font-medium bg-gradient-to-r lg:bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">{(index + 1) * 2}. {i.title}</h3>
                                <p>{i.description}</p>

                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        }
    </>
}