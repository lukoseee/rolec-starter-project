'use client'
import dynamic from 'next/dynamic'; 

// Dynamically load ReactPlayer with SSR disabled
const ReactPlayer = dynamic(
  () => import('react-player'),
  { ssr: false } //Disable server-side rendering
);

export default function VideoPlayer()
{
    return (
        <div>
            <div className="text-2xl flex justify-center lg:justify-start lg:text-4xl font-black ">
                <h1>Watch and Learn</h1>
            </div>
            <div className="h-50 lg:h-200">
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%' />
            </div>
        </div>
    )
}