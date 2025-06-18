
import NavItem from "./navitem";

export default function SecondNav()
{   
    
    return(
        <div className="text-xl flex justify-center mr-25 ml-25 h-15 items-center gap-10">
            <NavItem handleClick='#technical'>Technical Documentation</NavItem>
            <NavItem handleClick='#faq'>FAQ</NavItem>
            <NavItem handleClick='#videos'>Videos</NavItem>
            <NavItem handleClick='#articles'>Articles</NavItem>
        </div>
    );
}