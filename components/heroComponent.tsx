import Image from "next/image";
import { useSize } from "../utils/useSize";
import { ReactNode } from "react";

export const HeroComponent = (
    { belowH1, cta, h1, imageAlt, imagePath, customRitghtElement, imgClassName }:
        { imageAlt: string, imagePath: string, h1: ReactNode, belowH1: ReactNode, cta?: ReactNode, customRitghtElement?: ReactNode, imgClassName?: string }) => {
    const size = useSize(true)

    return (
        <div className='flex flex-col-reverse md:pt-10 relative md:mt-0 md:flex-row lg:space-x-16 items-center justify-center w-full px-3 lg:px-10'>
            <section className="flex items-center justify-center md:h-[60vh]">
                <div className="text-center flex flex-col items-center md:items-start md:text-left z-40">
                    <h1 className="text-3xl md:text-5xl font-bold md:mb-6 mt-10 md:mt-0"> {h1} </h1>
                    {belowH1}
                    {cta && cta}
                </div>
            </section>
            <div className='relative w-full max-w-[100vw] md:max-w-[50%] lg:max-w-[664px] md:h-[564px] h-[250px]'>
                {customRitghtElement ? customRitghtElement : <Image
                    alt={imageAlt}
                    layout='fill' priority
                    src={imagePath}
                    className={`object-cover object-top rounded-lg ${imgClassName}`}
                />}
            </div>
        </div>
    );
};