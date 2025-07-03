'use client'
import { Montserrat } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { TRPCReactProvider } from "src/trpc/react";

const mainFont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function Root({
  children,
}: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname();

	useEffect(() => {
		// Track previous and current route groups
		const currentRouteGroup = pathname?.startsWith('/account') ? 'account' : 'dashboard';
		const previousRouteGroup = sessionStorage.getItem('currentRouteGroup');

		if (previousRouteGroup && previousRouteGroup !== currentRouteGroup) {
		// Force reload if switching between account/dashboard groups
		window.location.reload();
		}

		// Store current route group
		sessionStorage.setItem('currentRouteGroup', currentRouteGroup);
	}, [pathname]);


    return(
        <html  lang="en" className={`${mainFont.className } `} >
            <meta name="viewport"/>
            <body className="bg-[#F6F6F6] m-0 p-0">
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}

