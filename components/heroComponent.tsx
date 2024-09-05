import Image from "next/image";
import { useSize } from "../utils/useSize";
import { ReactNode } from "react";

export const HeroComponent = (
    { belowH1, cta, h1, imageAlt, imagePath, customRitghtElement }:
        { imageAlt: string, imagePath: string, h1: ReactNode, belowH1: ReactNode, cta: ReactNode, customRitghtElement?: ReactNode }) => {
    const size = useSize(true)

    return (
        <div className='flex mx-2 flex-col-reverse md:pt-10 relative md:mt-0 md:flex-row md:space-x-16 items-center container'>
            <section className="flex items-center justify-center md:h-[60vh]">
                <div className="text-center flex flex-col items-center md:items-start md:text-left z-40 mx-3 md:mx-10">
                    <h1 className="text-3xl md:text-5xl font-bold md:mb-6 mt-10 md:mt-0"> {h1} </h1>
                    {belowH1}
                    {cta}
                </div>
            </section>
            <div className='relative w-full max-w-[664px] md:h-[564px] h-[250px]'>
                {customRitghtElement ? customRitghtElement : <Image
                    alt={imageAlt}
                    layout='fill' priority
                    src={imagePath}
                    className='object-cover object-top rounded-lg'
                />}
            </div>
        </div>
    );
};