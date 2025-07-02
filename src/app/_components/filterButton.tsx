type ButtonProps = {
        children: React.ReactNode; 
        value: Category;  //label on the button 
        click: (e: Category) => void;  //onClick handler function
        isActive?: boolean;  //keep track of which category is selected
};

export const categories = ["All", "Home", "Commercial", "AC", "DC", "Accessories", "Back Office"];
export type Category = typeof categories[number];

//children is a prop, className defaults to empty string if given nothing
const Button = ({children, click, value, isActive} : ButtonProps) => ( 
        <button onClick = {()=>click(value)} className = {`flex items-center rounded-4xl h-full p-1 lg:p-3 justify-center hover:bg-[#74AF28] ${isActive && 'bg-[#74AF28]'} `}> 
        <a className=" text-lg font-thin lg:text-lg lg:font-bold ">{children}</a>
        </button> 
);

export default Button