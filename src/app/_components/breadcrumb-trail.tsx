'use client'
import * as React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function CustomSeparator() {
    const location = usePathname();
    const segments = location.split("/").filter(segment => segment !== '');
  
    return (

    <nav className="flex items-center text-gray-400 capitalize text-[13px] lg:text-lg">
      <Link href="/dashboard" className="hover:underline">Dashboard</Link>


      {segments.slice(1).map((segment, index)=> {
        const og = index+1;
        const href = `/${segments.slice(0, og+1).join('/')}`;
        const isLast = og === segments.length - 1;

        return (
          <span key={og} className="flex items-center ">
            <span className="mx-2">&gt;</span>
            {!isLast ? (
              <Link href={href} className="hover:underline ">{segment}</Link>) : (<span > {segment}</span>
            )}
          </span>
        );
      })}
    </nav>
    
  );
}
