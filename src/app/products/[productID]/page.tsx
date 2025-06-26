import { notFound } from "next/navigation";
import IconHeader from "src/app/_components/icon+header";
import Question from "src/app/_components/question";
import VideoPlayer from 'src/app/_components/videoplayer';
import FAQ from 'src/app/_components/faq';
import React from 'react';
import SecondNav from 'src/app/_components/secondnav';
import { products } from 'src/server/db/schema';
import { db } from 'src/server/db';
import { eq } from 'drizzle-orm';

export default async function ProductDetails({ params }: { params: { productID: string} }) //productID corresponds with folder name
{       
    const id = Number( params.productID);
    const [product] = await db.select().from(products).where(eq(products.id , id))
    
    if (!product) {
        notFound();
    }
    return ( 
        <div className="overflow-invisble lg:overflow-auto" >
            <div className="relative h-30 lg:h-125 overflow-hidden rounded-b-3xl mx-2 lg:mx-40 mt-0">
                <div className=" absolute inset-0 bg-[url(https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4E9aYdDOsNVcqJw6uWH5UQskDALPYxZa2zRo0)] bg-cover bg-[position:50%_39%] flex items-end lg:p-30 text-white font-black rounded-b-3xl transition-transform duration-500 hover:scale-110 active:scale-110">
                    <div className = "flex items-center lg:items-end absolute inset-0 bg-black/50 rounded-b-3xl opacity-0 hover:opacity-100 active:opacity-100 p-5 lg:p-30"> 
                        <h1 className = "font-extrabold text-3xl text-white">{product.product_name}</h1>
                    </div>    
                </div>
            </div>
            <SecondNav></SecondNav>
            <div id= "technical" className="grid lg:flex mx-2 lg:mx-40 justify-evenly">
                <div className="  flex flex-col items-center lg:justify-evenly">
                    <div>
                        <img src= {product.image} className="scale-[150%]"></img>
                    </div>
                    <div className=" flex flex-col items-left gap-6">
                        <div className=''>
                            <h1 className="text-xl lg:text-4xl font-black ">Downloads</h1>
                        </div>
                        <div className="flex flex-col gap-3 text-xl">
                            <IconHeader path="/assets/icons/table-list.svg" headerfont='text-xs lg:text-xl'>Data Sheet</IconHeader>
                            <IconHeader path="/assets/icons/tool.svg" w={25} h={30} headerfont='text-xs lg:text-xl'>Installation and Operation Manual</IconHeader>
                            <IconHeader path="/assets/icons/Shield.svg" w={25} h={30} headerfont='text-xs lg:text-xl'>Statement Of Compliance</IconHeader>
                            <IconHeader path="/assets/icons/FileText.svg" w={25} h={30} headerfont='text-xs lg:text-xl'>UKCA & CE Declaration of Conformity</IconHeader>
                            <IconHeader path="/assets/icons/3D.svg" w={25} h={30} headerfont='text-xs lg:text-xl'>NBS BIM & CAD Packages</IconHeader>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-left gap-6 pt-10 items-left ">
                    
                    <div className="  flex flex-col items-center lg:justify-evenly">
                        <div className=" flex flex-col items-left gap-6">
                            <div className=''>
                                <h1 className="text-xl lg:text-4xl font-black ">Specification</h1>
                            </div>
                            <div className="flex flex-col gap-3 text-xl">
                                <IconHeader path="/assets/icons/hexagon.svg" w={20} h={4} lines={product.materials.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl" >Materials</IconHeader>
                                <IconHeader path="/assets/icons/move.svg" w={20} h={30} lines={product.enclosure_dimensions.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Enclosure Dimensions</IconHeader>
                                <IconHeader path="/assets/icons/git-commit.svg" w={20} h={30} lines={product.charge_protocol.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Charge Protocol</IconHeader>
                                <IconHeader path="/assets/icons/zap.svg" w={20} h={30} lines={product.input_voltage.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Input Voltage</IconHeader>
                                <IconHeader path="/assets/icons/shield2.svg" w={20} h={30} lines={product.protection.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Protection</IconHeader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='faq' className=" mx-2 lg:mx-40 mt-10 lg:mt-25 py-5 lg:py-20 bg-[#FFFFFF] rounded-3xl">
                <div className="flex flex-col lg:items-left pl-8 lg:pl-60 text-lg lg:text-4xl font-black mb-5">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className=" mx-2 lg:mx-65 bg-[#FFFFFF] ">
                    <FAQ></FAQ>
                </div>
            </div>

            <div id='videos' className="mx-2 mt-10 lg:mt-25 lg:mx-40 flex flex-col gap-5 lg:gap-10 ">
                <VideoPlayer></VideoPlayer>
            </div>
            <div id='articles' className="mt-3 lg:mt-15 lg:mx-25 flex flex-col gap-3 lg:gap-6">
                <div className="text-2xl flex justify-center lg:justify-start lg:text-4xl lg:mx-40 font-black">
                    <h1>Related Articles</h1>
                </div>  
                <div className="mx-4 lg:mx-30 grid lg:grid-cols-3 gap-3 ">
                    <Question>Why does my charger not connect the OCPP platform?</Question>
                    <Question>Why does my charger not connect the OCPP platform?</Question>
                    <Question>Why does my charger not connect the OCPP platform?</Question>
                    <Question>Why does my charger not connect the OCPP platform?</Question>
                    <Question>Why does my charger not connect the OCPP platform?</Question>
                    <Question>Why does my charger not connect the OCPP platform?</Question>
                </div>
            </div>

        </div>
    );
}