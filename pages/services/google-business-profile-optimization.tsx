import Image from "next/image";
import { HeroComponent } from "../../components/heroComponent";
import { AlternativeCTA, BasicNextSeo, CTA, Navbar, TawkWidget } from "../../components/navbar";
import { domain } from "../../utils/mainUtils";


export default function Applied() {


    const title = ""
    const description = ""
    const url = `${domain}/services/google-business-profile-optimization`
    return <>
        <Navbar />

        <BasicNextSeo title={title} description={description} url={url} />
        <TawkWidget />
        <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
        <HeroComponent
            h1={<>
                Google My Business Optimization for Furniture Stores
            </>}
            belowH1={<>
                <p>Get more customers and traffic in your store by fixing ranking your business on both Google Maps and Google itself</p>
            </>}
            cta={<> <CTA /> <AlternativeCTA /> </>}
            imageAlt="Google Business Profile Optimization Services" imagePath='/google-business-profile-services.webp'
        />


        <div className="py-20 my-10 alternateBg">
            <div className="mx-auto container flex flex-row">
                <div className="flex flex-col w-full">
                    <h2>Why prioritize Google My Business (GMB) optimization?</h2>

                </div>
                <div className='relative aspect-square w-full max-w-[564px] h-[320px]'>
                    <Image
                        src={"/optimized-google-business-profile.png"}
                        alt={""}
                        layout='fill' priority
                        className='object-cover object-top rounded-lg'
                    />
                </div>

            </div>
        </div>
    </>
}