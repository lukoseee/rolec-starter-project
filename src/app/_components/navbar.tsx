'use client'
import Button from "@mui/material/Button"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


function NavBar(){
    
    const path = usePathname();
    const [clicked, setClicked] = useState("Example");

    useEffect( () => {
        if(path.includes("/products")){
            setClicked("Knowledge Base")
        }else{
            setClicked("Example");
        }
    },[path]);



    return (
        <nav className = "flex justify-between sm:justify-start items-center bg-white text-black sm:gap-20">
            <Button href="../">
                <img src = {"/assets/logo/logo.png"} width={150} height={20} className=""/>
            </Button>
            <div className="navbar-center">
                <div className="flex list-none m-0 p-5 sm:p-0 gap-2 sm:gap-15 text-xs sm:text-xl">
                    <a href="/products" className= {`hover:font-extrabold ${clicked === "Knowledge Base" ? 'font-extrabold' : ''}`} onClick={()=>setClicked("Knowledge Base")}> Knowledge Base </a>
                    <a href="/" className={`hover:font-extrabold ${clicked === "Example" ? 'font-extrabold' : ''}`} onClick={()=>setClicked("Example")}> Example </a>
                </div>
            </div>
        </nav>
    )
}


export default NavBar

