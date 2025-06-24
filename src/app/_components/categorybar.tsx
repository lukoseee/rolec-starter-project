'use client'
import Link from "next/link";
import { useState, type ReactEventHandler } from "react";
import { productsArray } from "src/data/productDesc";
import {AnimatePresence, motion} from 'framer-motion';
import { json } from "stream/consumers";
import { db } from "src/server/db";
import { products } from "src/server/db/schema";
import { LatestPost } from "src/app/_components/post";

import { api } from "src/trpc/react";

function CatergoryBar()
{   
   const helloQuery = api.post.hello.useQuery({text:"world"});

    console.log("Query status:", {
    data: helloQuery.data,
    error: helloQuery.error,
    status: helloQuery.status
    });

   const {data: productsarray} = api.post.getAll.useQuery();
    

   const [category, setCategory] = useState(productsarray!);
   const [active, setActive] = useState("All");
    
    const handleBtns = (word: string) => {
        setActive(word);
        if (word === "All") {
            setCategory(productsarray!);
        } else {
            const filtered = productsarray!.filter(item => item.kind!.includes(word));
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
        click: (e: string) => void;
        isActive?: boolean;
    };

    const Button = ({children, className = "", click, value, isActive} : ButtonProps) => ( //children is a prop, className defaults to empty string if given nothing
        //appends given className at the end
        <button onClick = {()=>click(value)} className = {`flex items-center rounded-4xl h-full p-1 md:p-3 justify-center hover:bg-[#74AF28] ${isActive && 'bg-[#74AF28]'} `}> 
            <a className=" text-sm md:text-lg font-bold ">{children}</a>
        </button> 
    );

    const Product = ({children, className="" , path="" , id , link} : ProductProps) => (
            <div className=" grid justify-center text-center bg-white md:w-65 md:h-75 rounded-lg">
                <Link href={link} >
                    <div className=" inset-0 transition-transform duration-300 hover:scale-110">
                        <img src = {path} className="block w-full h-auto"></img>
                    </div>
                </Link>
                <h1 className="font-extrabold ">{children}</h1>
            </div>
        )

    return(
        <div>
            <div className="mx-1 md:pl-55 md:pr-45 flex gap-1 md:gap-7 my-10 flex-wrap justify-center md:justify-start">
                {["All", "Home", "Commercial","AC" , "DC", "Accessories", "Back Office"].map((item) => (
                    <Button value = {item} key={item} click={handleBtns} isActive= {active == item}> {item}</Button>
                ))} 
            </div>
            
            <AnimatePresence mode="wait">
                <motion.div key={JSON.stringify(category)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} >
                    <div className="flex flex-wrap mx-0 sm:mx-45 justify-center gap-2">
                         { category.map( (product) => (<Product link={`/products/${product.id}`} key={product.id} id={product.id} path={product.image!}>{product.product_name} </Product>) )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
        
    );
}

export default CatergoryBar
