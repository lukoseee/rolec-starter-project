'use client'
import { SignedIn, UserButton } from "@clerk/nextjs";
import Button from "@mui/material/Button"
import Image from "next/image";
import { usePathname } from "next/navigation";


function NavBar(){
    
    const path = usePathname();
   
    if (!path) return null;

    const isProductsPage = path.includes("/products");

    return (
        <nav className = "flex justify-between lg:justify-start items-center bg-white text-black lg:gap-20">
            <Button href="/dashboard">
                <Image src= "/assets/logo/Logo.svg" width={150} height={20} alt="logo"></Image>
            </Button>
            <div className="navbar-center">
                <div className=" flex list-none m-0 px-5 lg:px-0 gap-2 lg:gap-15 text-xs lg:text-xl">
                    <a href="/dashboard" className={` py-1 lg:py-4 hover:border-b-2 border-[#98D348] ${!isProductsPage ? 'border-b-2 border-[#98D348]' : ''}`} > Example </a>
                    <a href="/dashboard/products" className= {`py-1 lg:py-4 hover:border-b-2 border-[#98D348] ${isProductsPage ? 'border-b-2 border-[#98D348]' : ''}`}> Knowledge Base </a>
                </div>
            </div>
            <div className="pr-1 pl-0 lg:pl-220">
                <SignedIn>
                    <UserButton></UserButton>
                </SignedIn>
            </div>
        </nav>
    )
}


export default NavBar

