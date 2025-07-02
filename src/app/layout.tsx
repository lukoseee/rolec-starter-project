import { Montserrat } from "next/font/google";
import { TRPCReactProvider } from "src/trpc/react";

const mainFont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});


export default function Root({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    return(
        <html lang="en" className={`${mainFont.className } `} >
            <meta name="viewport"/>
            <body className="bg-[#F6F6F6] m-0 p-0">
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}

