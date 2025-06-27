'use client'
import Link from "next/link";
import { useEffect, useState} from "react";
import {AnimatePresence, motion} from 'framer-motion';
import { products } from "src/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";


import { api } from "src/trpc/react";

function CatergoryBar()
{  
        type pp = InferSelectModel<typeof products>;

        const [category, setCategory] = useState<pp[]>();
        const [active, setActive] = useState("All");
        const {data: productsarray, isLoading, isFetched} = api.post.getAll.useQuery();
        
        //async fetch and initial rendering of all products and rerender when products arrays
        useEffect( () =>{ 
                if (productsarray) {
                setCategory(productsarray!);
                }
        },[productsarray] );

        //giving time to fetch data from db (takes 400ms)
        if(isLoading){
                return<div>Loading...</div>
        }
        const handleBtns = (word: string) => {
                setActive(word);
                if (word === "All") {
                        setCategory(productsarray);
                } else {
                        const filtered = productsarray!.filter(item => item.kind.includes(word));
                        setCategory(filtered);
                }
        };

        type ProductProps = {
                children: React.ReactNode;
                id: number;
                path?: string;
                link: string;
                };

        type ButtonProps = {
                children: React.ReactNode; //all react components are allowed to be of this type
                value:string;
                click: (e: string) => void;
                isActive?: boolean;
        };

        const Button = ({children, click, value, isActive} : ButtonProps) => ( //children is a prop, className defaults to empty string if given nothing
                //appends given className at the end
                <button onClick = {()=>click(value)} className = {`flex items-center rounded-4xl h-full p-1 lg:p-3 justify-center hover:bg-[#74AF28] ${isActive && 'bg-[#74AF28]'} `}> 
                <a className=" text-lg font-thin lg:text-lg lg:font-bold ">{children}</a>
                </button> 
        );

        const Product = ({children,  path="" , link} : ProductProps) => (
                <div className="  grid justify-center text-center bg-white w-29 h-40 lg:w-65 lg:h-75 rounded-lg">
                        <Link href={link} >
                        <div className=" inset-0 transition-transform duration-300 hover:scale-110">
                                <img src = {path} className="block w-full h-auto"></img>
                        </div>
                        </Link>
                        <h1 className="text-xs lg:font-extrabold lg:text-lg ">{children}</h1>
                </div>
                )

        return(
                <div className="">
                <div className=" mx-0 lg:pl-55 lg:pr-45 flex gap-1 lg:gap-7 my-3 lg:my-10 flex-wrap justify-center lg:justify-start">
                        {["All", "Home", "Commercial","AC" , "DC", "Accessories", "Back Office"].map((item) => (
                        <Button value = {item} key={item} click={handleBtns} isActive= {active == item}> {item}</Button>
                        ))} 
                </div>
                
                <AnimatePresence mode="wait">
                        <motion.div key={JSON.stringify(category)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} >
                        <div className="flex flex-wrap mx-1 lg:mx-45 justify-center gap-2 lg:gap-5 ">
                                { category && category!.map( (product) => (<Product link={`/products/${product.id}`} key={product.id} id={product.id} path={product.image}> {product.product_name} </Product>) )}
                        </div>
                        </motion.div>
                </AnimatePresence>
                </div>
                
        );
}

export default CatergoryBar
