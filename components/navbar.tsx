import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { useSize } from "../utils/useSize";
import { BrandJsonLd, LogoJsonLd, NextSeo, NextSeoProps, OrganizationJsonLd } from "next-seo";
import Head from "next/head";
import { slogan } from "../utils/mainUtils";


export const OrganizationStructuredData = () => {
    return <>
        <OrganizationJsonLd
            type="Corporation"
            id="https://www.gliesess.com/"
            logo="https://www.gliesess.com/logo.png"
            // legalName="Totolici Ionut-Alexandru Persoana Fizica Autorizata"
            name="Gliesess"
            address={{
                streetAddress: '520 Aspen Dr',
                addressLocality: 'Herndon',
                addressRegion: 'VA',
                postalCode: '20170',
                addressCountry: 'US',
            }}
            contactPoint={[
                {
                    telephone: '+1-864-715-9376',
                    contactType: 'Contact',
                    email: 'contact@gliesess.com',
                    areaServed: 'US',
                    availableLanguage: ['English',],
                }
            ]}
            sameAs={['https://www.gliesess.com']}
            url="https://www.gliesess.com/"
        />
        <BrandJsonLd
            slogan={slogan}
            id="https://www.gliesess.com/"
            logo="https://www.gliesess.com/logo.jpg"
        />
    </>
}

export const BasicNextSeo = ({ description, title, url, additionalProps }: { title: string | undefined, description: string | undefined, url: string, additionalProps?: NextSeoProps }) => {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            {/* <meta name='keywords' content='locuri de munca, loc de munca, angajari, anunturi angajari, oferte locuri de munca, joburi in strainatate, joburi, oferte de munca, anunturi gratuite, angajari romania, angajari bucuresti, angajari constanta, locuri de munca in tara, angajari in strainatate' /> */}
        </Head>
        <NextSeo
            canonical={url}
            openGraph={{ title, description, siteName: 'Gliesess', url, }}
            {...additionalProps}
        />
        <LogoJsonLd
            logo="https://www.gliesess.com/logo.jpg"
            url="https://www.gliesess.com"
        />
    </>
}

export const Navbar = ({ alwaysWhite, }: { alwaysWhite?: boolean, }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const size = useSize(true)

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page has been scrolled
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup - remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const children = <div className='flex flex-row justify-between'>
        {/* <Link href="/blog" ><p className={`px-4 ${isScrolled ? 'hover:bg-gray-300' : 'hover:bg-white'} mr-2 cursor-pointer rounded transition-all py-3`}>Blog</p></Link> */}
        <Link className="font-semibold" href="/services"><p className={`px-4 ${isScrolled ? 'hover:bg-gray-300' : 'hover:bg-white'} mr-2 cursor-pointer rounded transition-all py-3`}>Services</p></Link>

        <Link className="font-semibold" href="/blog"><p className={`px-4 ${isScrolled ? 'hover:bg-gray-300' : 'hover:bg-white'} mr-2 cursor-pointer rounded transition-all py-3`}>Blog</p></Link>
    </div>

    return (
        <StickyBox className={`z-50  ${(isScrolled || alwaysWhite) && 'bg-white shadow-lg'}`} >
            <nav className="flex justify-between md:space-x-5 w-screen items-center px-2 py-2 md:py-0 z-10">
                <Link href="/" className=''>
                    <Image
                        src={size.gmd ? "/logo.png" : '/logo-square.png'}
                        alt="Gliesses"
                        width={size.gmd ? 200 : 60}
                        height={100}
                    />
                </Link>
                <div className="flex items-center justify-between md:justify-end w-full">
                    <div className='flex'>{children}</div>
                    <div className="mx-1 md:mx-3 w-max">
                        <CTA />
                    </div>
                </div>
            </nav>
        </StickyBox>
    );
};

export const CTA = ({ className }: { className?: string }) => {
    return (
        <button onClick={() => {
            // @ts-ignore: Unreachable code error
            MeetFox.initStaticButton({ url: 'https://meetfox.com/en/e/gliesess/borderless' }); return false;
        }} className={`btn-primary ${className}`}>Book a call</button>
    );
};

