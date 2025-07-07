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
import { HoverBanner } from "src/app/_components/bannerDiv";
import Image from "next/image";


export default async function ProductDetails({ params }: { params: { productID: string} }) //productID corresponds with folder name
{       
    const id = Number( params.productID);
    const [product] = await db.select().from(products).where(eq(products.id , id))
    
    if (!product) {
        notFound();
    }
    return ( 
        <div className="grid grid-cols-1 bg-[#F6F6F6]" >
            <div className="px-2 lg:px-40">
                <HoverBanner height= "h-30 lg:h-100" positioning="items-center lg:items-end p-5 lg:p-30" image="https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4E9aYdDOsNVcqJw6uWH5UQskDALPYxZa2zRo0" >{product.product_name}</HoverBanner>
            </div>
            <SecondNav></SecondNav>
            <div id= "technical" className="grid lg:flex mx-2 lg:mx-40 justify-evenly">
                <div className="  flex flex-col items-center lg:justify-evenly">
                    <div>
                        <Image alt="ProductImage" width={200} height = {250} src= {product.image} className="scale-[150%]"></Image>
                    </div>
                    <div className=" flex flex-col items-left gap-6">
                        <div className=''>
                            <h1 className="text-xl lg:text-4xl font-black ">Downloads</h1>
                        </div>
                        <div className="flex flex-col gap-3 text-xl">
                            <IconHeader path="/assets/icons/table-list.svg" headerfont='text-lg lg:text-xl'>Data Sheet</IconHeader>
                            <IconHeader path="/assets/icons/tool.svg" headerfont='text-lg lg:text-xl'>Installation and Operation Manual</IconHeader>
                            <IconHeader path="/assets/icons/Shield.svg" headerfont='text-lg lg:text-xl'>Statement Of Compliance</IconHeader>
                            <IconHeader path="/assets/icons/FileText.svg" headerfont='text-lg lg:text-xl'>UKCA & CE Declaration of Conformity</IconHeader>
                            <IconHeader path="/assets/icons/3D.svg" headerfont='text-lg lg:text-xl'>NBS BIM & CAD Packages</IconHeader>
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
                                <IconHeader path="/assets/icons/hexagon.svg" lines={product.materials.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl" >Materials</IconHeader>
                                <IconHeader path="/assets/icons/move.svg" lines={product.enclosure_dimensions.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Enclosure Dimensions</IconHeader>
                                <IconHeader path="/assets/icons/git-commit.svg" lines={product.charge_protocol.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Charge Protocol</IconHeader>
                                <IconHeader path="/assets/icons/zap.svg" lines={product.input_voltage.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Input Voltage</IconHeader>
                                <IconHeader path="/assets/icons/shield2.svg" lines={product.protection.split(',')} headerfont="font-medium lg:font-semibold" font="text-xs lg:text-xl">Protection</IconHeader>
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