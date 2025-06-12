
import logo from 'public/assets/logo/logo.png';

function NavBar(){
    return (
        <nav className = "flex justify-start items-center bg-white text-black gap-20">
            <div className= "object-none">
                <img src = {"/assets/logo/logo.png"} className="object-contain md:object-cover"/>
            </div>
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