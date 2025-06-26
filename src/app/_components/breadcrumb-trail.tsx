'use client'
import * as React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function CustomSeparator() {
    const location = usePathname();
    const segments = location.split("/").filter(segment => segment !== '');
  
    return (

    <nav className="flex items-center text-gray-400 capitalize text-[13px] lg:text-lg">
      <Link href="/" className="hover:underline">Home</Link>

      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;

        return (
          <span key={index} className="flex items-center ">
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
