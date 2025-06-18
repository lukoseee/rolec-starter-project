

type NavItemProps = {children: React.ReactNode; handleClick?: string; }

export default function NavItem({children, handleClick}:NavItemProps)
{
    return (
        <a className="hover:font-semibold" href={handleClick}>
            <div className="flex flex-col p-2 hover:border-b-2 border-[#98D348]">
                <p>{children}</p>
            </div>
        </a>
        
    )
}