

type NavItemProps = {children: React.ReactNode; handleClick?: ()=>void; }

export default function NavItem({children, handleClick}:NavItemProps)
{
    return (
        <div className="hover:font-semibold" onClick={handleClick}>
            <div className="flex flex-col p-2 hover:border-b-2 border-[#98D348]">
                <p>{children}</p>
            </div>
        </div>
        
    )
}