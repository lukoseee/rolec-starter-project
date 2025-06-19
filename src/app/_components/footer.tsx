
import Image from "next/image"
import Link from "next/link";

type FooterProps = {children: React.ReactNode;};

const Footer =( ({children}: FooterProps)=> (
    <div className="flex justify-between mx-4 sm:mx-25 h-30 sm:h-80 py-5 sm:py-15 text-white">
        <div className="justify-between flex flex-col ">
            <div className=" flex flex-col space-y-3 sm:space-y-7">
                <div className="">
                    <Image src="/assets/logo/Group.svg" className="w-10 h-5 sm:w-20 sm:h-10" alt="logo" width={0} height={0}></Image> 
                </div>
                <div className="flex gap-3 sm:gap-7 ">
                    <Link href="https://www.linkedin.com/company/rolec-services/posts/?feedView=all">
                        < Image src="/assets/social media/linkedin.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain w-2 h-2 sm:h-4 sm:w-4" width={0} height={0}  />
                    </Link>
                    <Link href="https://x.com/rolecev?lang=en">
                        < Image src="/assets/social media/X.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain w-2 h-2 sm:h-4 sm:w-4" width={0} height={0}/>
                    </Link>
                    <Link href="https://www.facebook.com/RolecServ/">
                        < Image src="/assets/social media/facebook.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain w-2 h-2 sm:h-4 sm:w-4" width={0} height={0}/>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCR7rnlFCLH1L1x1vcOOqfnA">
                        < Image src="/assets/social media/youtube.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain w-2 h-2 sm:h-4 sm:w-4" width={0} height={0}/>
                    </Link>
                    <Link href="https://www.instagram.com/rolecserv/">
                        < Image src="/assets/social media/insta.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain w-2 h-2 sm:h-4 sm:w-4" width={0} height={0}/>
                    </Link>
                </div>
            </div>
            <div className="text-[5px] sm:text-lg text-[#888888]">
                <p>© Rolec 2024 | Ralphs Lane, </p>
                <p>Boston, Lincolnshire PE20 1QU</p>
            </div>
        </div>
        <div className=" flex gap-2 sm:gap-10 text-[5px] sm:text-lg">
            <div className=" flex flex-col gap-1 sm:gap-3">
                <h1 className="font-black text-[5px] sm:text-2xl text-[#5D5D5D]">RolecConnect Services</h1>
                <div className="flex flex-col gap-1 sm:gap-3 text-[#D1D1D1]">
                    <p>LeadConnect</p>
                    <p>SupportConnect</p>
                    <p>Knowledge Base</p>
                    <p>Training</p>
                    <p>Forum</p>
                </div>
            </div>
            <div className=" flex flex-col gap-1 sm:gap-3"> 
                <h1 className="font-black text-[5px] sm:text-2xl text-[#5D5D5D]">Company & Compliance</h1>
                <div className="flex flex-col gap-1 sm:gap-3 text-[#D1D1D1]">
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Catalogues</p>
                    <p>Terms & Conditions</p>
                    <p>Other Policies</p>

                </div>
            </div>
        </div>
    </div>)
);


export default Footer