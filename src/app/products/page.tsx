
import Link from "next/link";
import { productsArray } from "src/data/productDesc";
import CatergoryBar from "../_components/categorybar";

export default function ProductList()
{

    type ProductProps = {
            children: React.ReactNode;
            id: number;
            className?: string;
            path?: string;
            link: string;
        };
    
    const Product = ({children, className="" , path="" , id , link} : ProductProps) => (
        <div className=" grid justify-center text-center bg-white w-65 h-75 rounded-b-lg">
            <Link href={link} passHref >
                <div className=" inset-0 transition-transform duration-300 hover:scale-110">
                    <img src = {path} className="block w-full h-auto"></img>
                </div>
            </Link>
            <h1 className="font-extrabold font-xl">{children}</h1>
        </div>
    )

    return(
        <div className="flex flex-wrap ml-45 mr-45 justify-center gap-4">
            <CatergoryBar></CatergoryBar>
        </div>
    );

}
