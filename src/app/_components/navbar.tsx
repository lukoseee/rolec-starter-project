'use client'
import Button from "@mui/material/Button"


function NavBar(){
    return (
        <nav className = "flex justify-start items-center bg-white text-black gap-20">
            <Button href="../">
                <img src = {"/assets/logo/logo.png"} className="object-contain md:object-cover"/>
            </Button>
            <div className="navbar-center">
                <div className="flex list-none m-0 p-0 gap-15 text-xl">
                    <a className='hover:font-extrabold'> Example </a>
                    <a className='hover:font-extrabold'> Knowledge Base </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar