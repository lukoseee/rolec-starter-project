'use client'

import { useEffect, useState } from "react";
import ReactPlayer from "react-player"

export default function VideoPlayer()
{
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {setIsHydrated(true);}, []);

    if (!isHydrated) return null;

    return (
        <><div className="text-4xl font-black ">
            <h1>Watch and Learn</h1>
        </div><div className="h-200">
                <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%' />
            </div></>
    )
}