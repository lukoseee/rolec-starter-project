import Image from "next/image";
import Link from "next/link";

type ProductProps = {
        children: React.ReactNode;
        id: number;
        path?: string;
        link: string;
        };

const Product = ({children,  path="" , link} : ProductProps) => (
        <div className="  grid justify-center text-center bg-white w-29 h-40 lg:w-65 lg:h-75 rounded-lg">
                <Link href={link} >
                <div className=" inset-0 transition-transform duration-300 hover:scale-110">
                        <Image src = {path} width={200} height={250} alt="" className="block w-full h-auto"></Image>
                </div>
                </Link>
                <h1 className="text-xs lg:font-extrabold lg:text-lg ">{children}</h1>
        </div>
    )

export default Product