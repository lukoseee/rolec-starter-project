
import NavItem from "./navitem";

export default function SecondNav()
{   
    return(
        <div className="text-base lg:text-xl flex flex-wrap justify-center lg:mx-25 h-15 items-center gap-0 lg:gap-10">
            <NavItem handleClick='#technical'>Technical Documentation</NavItem>
            <NavItem handleClick='#faq'>FAQ</NavItem>
            <NavItem handleClick='#videos'>Videos</NavItem>
            <NavItem handleClick='#articles'>Articles</NavItem>
        </div>
    );
}