import { useState } from "react";
import { Navbar } from "../components/navbar";
import emailjs from '@emailjs/browser';
import Link from "next/link";


export default function ContactPage() {
    return <div className="flex flex-col items-center min-h-[100vh]">
        <Navbar />

        <h1 className="text-4xl font-bold w-full container">Contact Us</h1>
        <div className="flex flex-col md:flex-row border rounded container justify-around my-5 relative">
            <img alt='Background image' src="/wave.svg" className='blur-3xl opacity-30 -z-10 h-[80vh] w-[100vw] top-5 absolute object-cover' />
            <ContactForm className="md:w-[45%] p-2 mt-2 z-10" />
            <div className="md:w-[45%] p-2 mt-7 z-10">
                <h2 className="text-2xl mt-3 font-semibold"><Link href={'/about-us'} className="a">Who are we</Link></h2>
                We specialize in elevating the online presence of furniture shops through battle-tested SEO strategies and bespoke web development solutions. If you have any inquiries, suggestions, or if you're ready to take your furniture business to new heights, we'd love to hear from you!
                <h2 className="text-2xl mt-3 font-semibold">Get in Touch</h2>

                Have a question about our <Link className="a" href={'/services'}>SEO services</Link> tailored for furniture shops? Curious about how we can enhance your online presence through customized web development? Interested in a personalized consultation to discuss your unique needs? Our team is here to help!
                <p className="mt-4">Phone: <a href="tel:+15642122412" className="a hover:text-secondary">+1 (864) 715 9376</a></p>
                <p className="mt-4 mb-2">Email: <a href="mailto:info@gliesses.com" className="a hover:text-secondary">contact@gliesses.com</a></p>
            </div>
        </div>



    </div>
}


const ContactForm = ({ className }: { className?: string }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState<string | undefined>();
    const sendEmail = (e: any) => {
        e.persist();
        e.preventDefault()
        console.log('got here')
        setIsSubmitting(true);
        emailjs.sendForm(process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID as string, process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID as string, e.target, process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY).then((result: any) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(undefined);
            }, 5000); // hide message after 5 seconds
        }, (error: any) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(undefined);
            }, 5000); // hide message after 5 seconds
        });

        // Clears the form after sending the email
        e.target.reset();
    };
    return (
        <form className={`flex flex-col items-center ${className}`} onSubmit={sendEmail}>
            <label htmlFor="user_name" className="w-full">Name</label>
            <input type="text" id="user_name" name="user_name" className="border rounded my-2 p-2 w-full" />

            <label htmlFor="email" className="w-full">Email</label>
            <input id="email" type="email" name="user_email" className="border rounded my-2 p-2 w-full" />

            <label htmlFor="message" className="w-full">Message</label>
            <textarea id="message" name="message" className="border rounded my-2 p-2 w-full" />
            <button type="submit" className="btn-primary w-fit" disabled={isSubmitting} >Send</button>
            {stateMessage && <p className="">{stateMessage}</p>}
        </form>
    );
};