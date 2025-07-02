'use client'
import Button from "@mui/material/Button"
import { usePathname } from "next/navigation";


function NavBar(){
    
    const path = usePathname();
   
    if (!path) return null;

    const isProductsPage = path.includes("/products");

    return (
        <nav className = "flex justify-between lg:justify-start items-center bg-white text-black lg:gap-20">
            <Button href="/dashboard">
                <img src = {"/assets/logo/Logo.svg"} width={150} height={20} className=""/>
            </Button>
            <div className="navbar-center">
                <div className=" flex list-none m-0 px-5 lg:px-0 gap-2 lg:gap-15 text-xs lg:text-xl">
                    <a href="/dashboard" className={` py-1 lg:py-4 hover:border-b-2 border-[#98D348] ${!isProductsPage ? 'border-b-2 border-[#98D348]' : ''}`} > Example </a>
                    <a href="/dashboard/products" className= {`py-1 lg:py-4 hover:border-b-2 border-[#98D348] ${isProductsPage ? 'border-b-2 border-[#98D348]' : ''}`}> Knowledge Base </a>
                </div>
            </div>
            <div className="pr-1 pl-0 lg:pl-220">
                <Button href= "/account">
                    <img src="/assets/icons/profileimg.png" className="w-7 h-7 lg:w-10 lg:h-10 rounded-4xl"></img>
                </Button>
            </div>
        </nav>
    )
}


export default NavBar

