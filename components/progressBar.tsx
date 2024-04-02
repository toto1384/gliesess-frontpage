import { useEffect, useState } from "react";


export const ProgressBar = () => {
    //Width State
    const [width, setWidth] = useState(0);
    // scroll function
    const scrollHeight = () => {
        var el = document.documentElement,
            ScrollTop = el.scrollTop || document.body.scrollTop,
            ScrollHeight = el.scrollHeight || document.body.scrollHeight;
        var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        // store percentage in state
        setWidth(percent);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () => window.removeEventListener("scroll", scrollHeight);
    });

    return <div className={"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2"} style={{ width: `${width}%` }}></div>
}