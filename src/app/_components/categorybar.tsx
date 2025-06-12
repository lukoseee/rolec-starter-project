
function CatergoryBar()
{   
    type ButtonProps = {
        children: React.ReactNode; //all react components are allowed to be of this type
        className?: string; //className can only be of string
    };

    const Button = ({children, className = ""} : ButtonProps) => ( //children is a prop, className defaults to empty string if given nothing
        //appends given className at the end
        <div className = {`flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28] ${className}`}> 
            <a className="font-bold">{children}</a>
        </div> 
    );


    return(
        <div className="flex gap-5">
            {["All", "Home", "AC" , "DC", "Accessories", "Back Office"].map((item) => (
                <Button key={item}> {item} </Button>
            ))} 
        </div>

        // <div className="flex gap-5">
        //     <div className=" flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28]">
        //         <a>All</a>
        //     </div>
        //     <div className=" flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28]">
        //         <a>Home</a>
        //     </div>
        //     <div className=" flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28]">
        //         <a>AC</a>
        //     </div>
        //     <div className=" flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28]">
        //         <a>DC</a>
        //     </div>
        //     <div className=" flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28]">
        //         <a>Accessories</a>
        //     </div>
        //     <div className=" flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28]">
        //         <a>Back Office</a>
        //     </div>
        // </div>
    );
}
export default CatergoryBar
