import Image from "next/image";
import { BasicNextSeo, Navbar, OrganizationStructuredData, TawkWidget } from "../components/navbar";
import Link from "next/link";
import { useSize } from "../utils/useSize";
import { domain } from "../utils/mainUtils";
import { authors } from "../utils/blog";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { CenteredCardPage } from "../components/centeredCardPage";
import Head from "next/head";


const emiSchema = `
{
"@context": "https://schema.org",
"@type": "Person",
"name": "Emil Sandu",
"image": "https://www.gliesess.com/emil-sandu-profile-picture.jpeg",
"sameAs": [
    "https://www.facebook.com/emi.sandu.3"
],
"jobTitle": "Marketing Manager",
"worksFor": {
    "@type": "Organization",
    "name": "Gliesess"
},
"alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "College of Telecommunication"
},
"birthDate": "2003-04-13",
"nationality": "Romanian",
"gender": "Male",
"knowsAbout": ["SEO", "Marketing", "Web Development"],
"address": {
    "@type": "PostalAddress",
    "addressLocality": "Constanta",
    "addressRegion": "CO",
    "postalCode": "900272",
    "streetAddress": "Str Baragan nr 21"
},
"email": "mailto:emil@gliesess.com",
}`

export default function AboutUs({ }: {}) {

    const size = useSize(true)
    const imageSize = size.gmd ? 250 : 150

    const title = "About Gliesess - An SEO agency for Local businesses"
    const description = "Gliesess is an SEO agency that generates customers for local businesses. Schedule a call for a free website analysis report."
    const url = `${domain}/about-us`

    const alexTotolici = authors.find(i => i.name === 'Alexandru Totolici')!

    return <div className="flex flex-col items-center">

        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: alexTotolici.jsonSchema(),
                }}
            />

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: emiSchema
            }}>
            </script>
        </Head>

        <TawkWidget />

        <OrganizationStructuredData />

        <BasicNextSeo title={title} description={description} url={url} />
        <img alt='Background image' src="/wave.svg" className='blur-3xl opacity-60 h-[80vh] -z-10 w-[100vw] top-16 absolute object-cover' />

        <CenteredCardPage appBar={<Navbar />}>
            <h1 className="text-4xl md:text-5xl font-bold mx-5">About us</h1>


            <div className="flex flex-col-reverse md:flex-row items-center mt-10">
                <div className="flex flex-col md:mx-5">
                    <h2 className="text-3xl font-semibold">{alexTotolici.name}</h2>
                    <p className="text-lg my-5">{alexTotolici.shortDescription}</p>
                    <p className="">{alexTotolici.longDescription}</p>

                </div>
                <div className="flex flex-col items-center my-5">
                    <div className="mx-10" style={{ width: `${imageSize}px`, height: `${imageSize}px` }}>
                        <Image
                            src={alexTotolici.image} alt="Alex Totolici Photo"
                            className="rounded-full border-blue-950 border-8 aspect-square object-cover"
                            width={imageSize} height={imageSize}
                        />

                    </div>
                    <div className="flex flex-row justify-between mt-2">
                        <a href="https://www.linkedin.com/in/alex-totolici-2a4709186/" className="hover:text-secondary mx-4" aria-label="Alex Totolici Linkedin account">
                            <FaLinkedin className='w-7 h-7' />
                        </a>
                        <a href="https://www.alex-totolici.com" className="hover:text-secondary mx-4" aria-label="Alex Totolici website">
                            <MdPublic className='w-7 h-7' />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="my-5" />

            <div className="flex flex-col-reverse md:flex-row-reverse items-center mt-10">
                <div className="flex flex-col md:mx-5">
                    <h2 className="text-3xl font-semibold">Emil Sandu</h2>
                    <p className="text-lg my-5">Emil is the marketing manager at <Link className="a" href={'/'}>Gliesess</Link>. He worked with a lot of companies for cold calling, and B2C sales.</p>
                    <p className="">Driven by improvement, Emil does everything in his power to get his job done. From copywriting, to design, to CRO, Emil has become a Swiss Army knife in his field.</p>

                </div>
                <div className="flex flex-col items-center my-5">
                    <div className="mx-10" style={{ width: `${imageSize}px`, height: `${imageSize}px` }}>
                        <Image
                            src={'/emil-sandu-profile-picture.jpeg'} alt="Alex Totolici Photo"
                            className="rounded-full border-blue-950 border-8 aspect-square object-cover object-top"
                            width={imageSize} height={imageSize}
                        />
                    </div>
                    <div className="flex flex-row justify-between mt-2">
                        <a href="https://www.facebook.com/emi.sandu.3" className="hover:text-secondary mx-4" aria-label="Alex Totolici Linkedin account">
                            <FaFacebook className='w-7 h-7' />
                        </a>

                    </div>
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

        </CenteredCardPage>




    </div>
}