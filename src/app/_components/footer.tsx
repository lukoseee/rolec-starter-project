
import Image from "next/image"
import Link from "next/link";

type FooterProps = {children: React.ReactNode;};

const Footer =( ({children}: FooterProps)=> (
    <div className="flex justify-between mr-25 ml-25 h-80 pt-15 pb-15 text-white">
        <div className=" justify-between flex flex-col">
            <div className=" flex flex-col space-y-7">
                <div className="">
                    <Image src="/assets/logo/whitelogo.png" alt="logo" width={96} height={16}></Image> 
                </div>
                <div className="flex gap-7 ">
                    <Link href="https://www.linkedin.com/company/rolec-services/posts/?feedView=all">
                        < Image src="/assets/social media/linkedin.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain" width={14} height={14} />
                    </Link>
                    <Link href="https://x.com/rolecev?lang=en">
                        < Image src="/assets/social media/X.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain" width={15} height={14}/>
                    </Link>
                    <Link href="https://www.facebook.com/RolecServ/">
                        < Image src="/assets/social media/facebook.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain" width={10} height={14}/>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCR7rnlFCLH1L1x1vcOOqfnA">
                        < Image src="/assets/social media/youtube.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain" width={18} height={14}/>
                    </Link>
                    <Link href="https://www.instagram.com/rolecserv/">
                        < Image src="/assets/social media/insta.png" alt="Description" className="hover:opacity-90 transition-opacity object-contain" width={15} height={14}/>
                    </Link>
                </div>
            </div>
            <div className=" text-[#888888]">
                <p>© Rolec 2024 | Ralphs Lane, </p>
                <p>Boston, Lincolnshire PE20 1QU</p>
            </div>
        </div>
        <div className=" flex gap-10">
            <div className=" flex flex-col gap-3">
                <h1 className="font-black text-2xl text-[#5D5D5D]">RolecConnect Services</h1>
                <div className="flex flex-col gap-3 text-[#D1D1D1]">
                    <p>LeadConnect</p>
                    <p>SupportConnect</p>
                    <p>Knowledge Base</p>
                    <p>Training</p>
                    <p>Forum</p>
                </div>
            </div>
            <div className=" flex flex-col gap-3"> 
                <h1 className="font-black text-2xl text-[#5D5D5D]">Company & Compliance</h1>
                <div className="flex flex-col gap-3 text-[#D1D1D1]">
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