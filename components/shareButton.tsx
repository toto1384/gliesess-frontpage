import { useState, useContext } from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,

    TwitterShareButton,
    WhatsappShareButton,

    EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon,
} from "react-share";

import {
    FacebookShareCount,
} from "react-share";


export function ShareButton({ link }: { link: string }) {
    return <>
        <div className='flex flex-wrap w-full items-center mb-2'>
            {/* <FacebookShareCount url={link} /> */}
            <WhatsappShareButton aria-label="Share post on WhatsApp" url={link}><WhatsappIcon className="mr-2 my-2" borderRadius={100} size={35} /></WhatsappShareButton>
            <FacebookShareButton aria-label="Share post on Facebook" url={link}><FacebookIcon className="mr-2 my-2" borderRadius={100} size={35} /></FacebookShareButton>
            <LinkedinShareButton aria-label="Share post on LinkedIn" url={link}><LinkedinIcon className="mr-2 my-2" borderRadius={100} size={35} /></LinkedinShareButton>
            <TwitterShareButton aria-label="Share post on Twitter" url={link}><TwitterIcon className="mr-2 my-2" borderRadius={100} size={35} /></TwitterShareButton>



        </div>
    </>
}