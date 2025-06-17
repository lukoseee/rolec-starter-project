
import { productsArray } from "src/data/productDesc";
import type { ProductType } from "src/data/productDesc";
import Product from "src/app/_components/productlist";
import Banner from "src/app/_components/banner";
import { notFound } from "next/navigation";


export default function ProductDetails({ params }: { params: { productID: string} }) //productID corresponds with folder name
{   
    const ID = Number(params.productID);

    const product = productsArray.find( p => p.id === ID);

    if (!product) {
        notFound();
    }
    return ( 
        <div>
            <div className="relative h-125 overflow-hidden rounded-b-3xl mr-25 ml-25">
                <div className=" absolute inset-0 bg-[url(/assets/ProductPageBanner.jpg)] bg-[length:100%] bg-position-[0]  flex items-end p-30 text-7xl text-white font-black rounded-b-3xl transition-transform duration-500 hover:scale-110 ">
                    <div className = "flex items-end absolute inset-0 bg-black/50 rounded-b-3xl opacity-0 hover:opacity-100 p-30"> 
                        <h1 className = "font-extrabold text-6xl text-white">{product.name}</h1>
                    </div>    
                </div>
            </div>
            <nav className="flex justify-center mr-25 ml-25 h-15 border border-black items-center">
                <div className="flex flex-col p-2 hover:border-b-2">
                    <p>start</p>
                </div>
                <div className="border-b-2 border-blue-900 flex flex-col p-2">
                    <p>dadawd</p>
                </div>
                <div className="border-b-2 border-blue-900 flex flex-col p-2">
                    <p>start</p>
                </div>
                <div className="border-b-2 border-blue-900 flex flex-col p-2">
                    <p>dadawd</p>
                </div>
            </nav>

            <img src= {product.image}></img>
        </div>
    );
}