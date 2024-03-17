import Image from "next/image";
import { Navbar } from "../components/navbar";
import Link from "next/link";
import { useSize } from "../utils/useSize";



export default function AboutUs({ }: {}) {

    const size = useSize(true)
    const imageSize = size.gmd ? 250 : 150

    return <div className="flex flex-col items-center">
        <Navbar />

        <div className="container">

            <h1 className="text-4xl md:text-5xl font-bold mx-5">About us</h1>

            <img alt='Background image' src="/wave.svg" className='blur-3xl opacity-60 h-[80vh] -z-10 w-[100vw] top-16 absolute object-cover' />
            <div className="flex flex-col-reverse md:flex-row w-full justify-around items-center mt-10">
                <div className="flex flex-col md:w-[50%] items-center md:items-start mx-5">
                    <h2 className="text-3xl font-bold">Alex Totolici</h2>
                    <h3 className="text-xl font-medium">Founder</h3>
                    <blockquote className="text-center md:text-start">Welcome to <Link className="a" href={'/'}>Gliesess</Link>, where we bring your business to the forefront of digital success. As a seasoned full-stack developer specializing in SEO and web design, I'm committed to optimizing your online presence and propelling your site to the first page of Google.</blockquote>
                </div>
                <div className="md:w-[50%] flex flex-row justify-end">
                    <Image
                        src={'/alex-totolici-profile-photo.jpg'} alt="Alex Totolici Photo"
                        className="rounded-full mx-10 border-blue-950 border-8 aspect-square object-cover"
                        width={imageSize} height={imageSize}
                    />
                </div>
            </div>

            <div className="mx-5">
                <hr className="mt-5" />
                <h2 className="text-3xl font-semibold w-full mt-10"> Our Purpose </h2>

                <p>
                    At <Link className="a" href={'/'}>Gliesess</Link>, our purpose goes beyond crafting visually stunning websites. We are on a mission to empower businesses with a robust online presence, leveraging cutting-edge technologies and SEO strategies. Our goal is to not just meet expectations but to exceed them, making a lasting impact on your digital success.
                </p>

                <h2 className="text-3xl font-semibold w-full mt-10"> Our Methodology </h2>
                <p>
                    We believe in a holistic approach to web design and SEO. Our methodology revolves around understanding your unique business goals, conducting thorough market research, and implementing tailor-made <Link className="a" href={'/services'}>solutions</Link>. From user-centric design principles to advanced SEO tactics, every step is meticulously planned to ensure your online presence aligns seamlessly with your business objectives.
                </p>

                <h2 className="text-3xl font-semibold w-full mt-10"> Technological Expertise </h2>

                <p>
                    With a foundation built on 7 years of experience, we bring the technological expertise to the table. From the latest web development frameworks to SEO best practices, we stay at the forefront of technology trends. Our commitment to continuous learning ensures that your digital <Link className="a" href={'/services'}>solutions</Link> are not only current but future-proof.
                </p>

                <h2 className="text-3xl font-semibold w-full mt-10"> Get in Touch </h2>

                <p className="mb-10">
                    Ready to embark on a digital journey with us? <Link className="a" href={'/contact'}>Contact us</Link> today to discuss how we can transform your online presence and elevate your brand in the ever-evolving digital landscape. We look forward to being your trusted partner in success.
                </p>

            </div>
        </div>

    </div>
}