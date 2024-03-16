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
            <WhatsappShareButton url={link}><WhatsappIcon className="mr-2 my-2" borderRadius={100} size={35} /></WhatsappShareButton>
            <FacebookShareButton url={link}><FacebookIcon className="mr-2 my-2" borderRadius={100} size={35} /></FacebookShareButton>
            <LinkedinShareButton url={link}><LinkedinIcon className="mr-2 my-2" borderRadius={100} size={35} /></LinkedinShareButton>
            <TwitterShareButton url={link}><TwitterIcon className="mr-2 my-2" borderRadius={100} size={35} /></TwitterShareButton>



        </div>
    </>
}