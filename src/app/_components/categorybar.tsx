'use client'

import { useState} from "react";
import {AnimatePresence, motion} from 'framer-motion';
import Product from "./product";
import Button from "./filterButton";
import { api } from "src/trpc/react";
import type { Category } from "./filterButton";
import { categories } from "./filterButton";

function CategoryBar() {  

	//Gets all products via api query   
	const [active, setActive] = useState<Category>("All");
	const {data: Products, isLoading} = api.post.getAll.useQuery();

	const handleBtns = (word: Category) => {
		setActive(word);
	};

	//Filter out products based on if the word is in 'kind' column
	const filteredProducts = active === "All" 
    		? Products 
    		:  Products?.filter(item => item.kind.includes(active));

	
	//Giving time to fetch data from db (takes 400ms)
	if(isLoading){
		return<div>Loading...</div>
	}

	return(
		<div className="">
			<div className="mx-0 lg:pl-55 lg:pr-45 flex gap-1 lg:gap-7 my-3 lg:my-10 flex-wrap justify-center lg:justify-start">
				{categories.map((item) => (
				<Button value = {item} key={item} click={ () => handleBtns(item)} isActive= {active === item}> {item}</Button>
				))} 
			</div>
			
			{/* Fade in animation */}
			
			<AnimatePresence mode="wait">
				<motion.div key= {JSON.stringify(filteredProducts)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} >
				<div className="flex flex-wrap mx-1 lg:mx-45 justify-center gap-2 lg:gap-5 ">
						{ filteredProducts?.map( (product) => (<Product link={`dashboard/products/${product.id}`} key={product.id} id={product.id} path={product.image}> {product.product_name} </Product>) )}
				</div>
				</motion.div>
			</AnimatePresence>

		</div>
	);
}

export default CategoryBar
