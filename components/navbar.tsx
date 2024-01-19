import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";



export const Navbar = ({ alwaysWhite }: { alwaysWhite?: boolean }) => {

    const [isScrolled, setIsScrolled] = useState(false);

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
        <Link href="/blog" ><p className={`px-4 ${isScrolled ? 'hover:bg-gray-300' : 'hover:bg-white'} mr-2 cursor-pointer rounded transition-all py-3`}>Blog</p></Link>
        <Link href="#testimonials"><p className={`px-4 ${isScrolled ? 'hover:bg-gray-300' : 'hover:bg-white'} mr-2 cursor-pointer rounded transition-all py-3`}>Testimonials</p></Link>
    </div>

    return (
        <StickyBox className={`z-50  ${(isScrolled || alwaysWhite) && 'bg-white shadow-lg'}`} >
            <nav className="flex justify-between space-x-5 w-screen items-center px-2 md:py-4 z-10">
                <Link href="/" className=''>
                    <Image
                        src="/logo.png"
                        alt="Gliesses"
                        width={200}
                        height={100}
                    />
                </Link>
                <ul className="flex items-center">
                    <div className='hidden md:flex'>{children}</div>
                    <li className="mx-3 w-max">
                        <CTA />
                    </li>
                </ul>
            </nav>
            <div className='flex md:hidden w-full -mt-5'>{children}</div>
        </StickyBox>
    );
};

export const CTA = ({ className }: { className?: string }) => {
    return (
        <button onClick={() => {
            // @ts-ignore: Unreachable code error
            MeetFox.initStaticButton({ url: 'https://meetfox.com/en/e/gliesess/borderless' }); return false;
        }} className={`bg-primary rounded-full line-clamp-1 text-white px-6 py-3 ${className}`}>Book a call</button>
    );
};
