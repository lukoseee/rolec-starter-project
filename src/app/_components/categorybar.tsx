'use client'
import Link from "next/link";
import { useState } from "react";
import { productsArray } from "src/data/productDesc";




function CatergoryBar()
{   
   const [category, setCategory] = useState(productsArray);
    
    const handleBtns = (word: string) => {
        
        if (word === "All") {
            setCategory(productsArray);
        } else {
            const filtered = productsArray.filter(item => item.kind.includes(word));
            setCategory(filtered);
        }
    };

    type ProductProps = {
            children: React.ReactNode;
            id: number;
            className?: string;
            path?: string;
            link: string;
        };

    type ButtonProps = {
        children: React.ReactNode; //all react components are allowed to be of this type
        className?: string; //className can only be of string
        value:string;
        click: (value:string) => void;
    };

    const Button = ({children, className = "", click, value} : ButtonProps) => ( //children is a prop, className defaults to empty string if given nothing
        //appends given className at the end
        <div onClick = {() => click(value)} className = {`flex items-center rounded-4xl h-10 w-25 justify-center hover:bg-[#74AF28] ${className}`}> 
            <a className="font-bold">{children}</a>
        </div> 
    );

    const Product = ({children, className="" , path="" , id , link} : ProductProps) => (
            <div className=" grid justify-center text-center bg-white w-65 h-75 rounded-lg">
                <Link href={link} >
                    <div className=" inset-0 transition-transform duration-300 hover:scale-110">
                        <img src = {path} className="block w-full h-auto"></img>
                    </div>
                </Link>
                <h1 className="font-extrabold font-xl">{children}</h1>
            </div>
        )

    return(
        <div >
            <div className="pl-55 pr-45 flex gap-5 my-10">
                {["All", "Home", "Commercial","AC" , "DC", "Accessories", "Back Office"].map((item) => (
                    <Button value = {item} key={item} click={handleBtns}> {item}</Button>
                ))} 
            </div>
            <div className="flex flex-wrap ml-45 mr-45 justify-center gap-4">
                { category.map( (product) => (<Product link={`/products/${product.id}`} key={product.id} id={product.id} path={product.image}>{product.name} </Product>) )}
            </div>
        </div>
        
    );
}

export default CatergoryBar
