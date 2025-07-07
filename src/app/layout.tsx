'use client'

import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import { usePathname} from "next/navigation";
import { useEffect } from "react";
import { TRPCReactProvider } from "src/trpc/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const mainFont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function Root({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    return(
	<ClerkProvider>
        <html  lang="en" className={`${mainFont.className } `} >
            <meta name="viewport"/>
            <body className="bg-[#F6F6F6] m-0 p-0">
                <TRPCReactProvider>{children}</TRPCReactProvider>
		    <SpeedInsights />
            </body>
        </html>
	</ClerkProvider>
    );
}

