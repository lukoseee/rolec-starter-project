'use client'
import Button from "@mui/material/Button"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


function NavBar(){
    
    const path = usePathname();
   
    if (!path) return null;

    const isProductsPage = path.includes("/products");

    return (
        <nav className = "flex justify-between sm:justify-start items-center bg-white text-black sm:gap-20">
            <Button href="/">
                <img src = {"/assets/logo/Logo.svg"} width={150} height={20} className=""/>
            </Button>
            <div className="navbar-center">
                <div className=" flex list-none m-0 px-5 sm:px-0 gap-2 sm:gap-15 text-xs sm:text-xl">
                    <a href="/" className={` py-1 sm:py-4 hover:border-b-2 border-[#98D348] ${!isProductsPage ? 'border-b-2 border-[#98D348]' : ''}`} > Example </a>
                    <a href="/products" className= {`py-1 sm:py-4 hover:border-b-2 border-[#98D348] ${isProductsPage ? 'border-b-2 border-[#98D348]' : ''}`}> Knowledge Base </a>
                </div>
            </div>
        </nav>
    )
}


export default NavBar

