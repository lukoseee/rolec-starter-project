

import { use, type RefObject } from 'react';
import { productsArray } from "src/data/productDesc";
import { notFound } from "next/navigation";
import NavItem from "src/app/_components/navitem";
import IconHeader from "src/app/_components/icon+header";
import ReactPlayer from 'react-player';
import Question from "src/app/_components/question";
import VideoPlayer from 'src/app/_components/videoplayer';

import FAQ from 'src/app/_components/faq';
import React from 'react';
import SecondNav from 'src/app/_components/secondnav';
import { scale } from 'framer-motion';
//import { useRef } from "react";



export default function ProductDetails({ params }: { params: Promise<{ productID: string}> }) //productID corresponds with folder name
{   
    const products = use(params);
    const id = products.productID;

    const product = productsArray.find( p => Number(p.id) === Number(id));

    if (!product) {
        notFound();
    }

    return ( 
        <div className="scroll-smooth overflow-auto" >
            <div className="relative h-50 md:h-125 overflow-hidden rounded-b-3xl mx-2 md:mx-25 mt-5">
                <div className=" absolute inset-0 bg-[url(/assets/ProductPageBanner.jpg)] bg-cover bg-[position:50%_39%] flex items-end md:p-30 text-white font-black rounded-b-3xl transition-transform duration-500 hover:scale-110 active:scale-110">
                    <div className = "flex items-center md:items-end absolute inset-0 bg-black/50 rounded-b-3xl opacity-0 hover:opacity-100 active:opacity-100 p-5 md:p-30"> 
                        <h1 className = "font-extrabold text-3xl text-white">{product.name}</h1>
                    </div>    
                </div>
            </div>
            <SecondNav></SecondNav>
            <div id= "technical" className="grid md:flex mx-2 md:mx-40 justify-evenly">
                <div className="  flex flex-col items-center md:justify-evenly">
                    <div>
                        <img src= {product.image} className="scale-[150%]"></img>
                    </div>
                    <div className=" flex flex-col items-left gap-6">
                        <div className=''>
                            <h1 className="text-xl md:text-4xl font-black ">Downloads</h1>
                        </div>
                        <div className="flex flex-col gap-3 text-xl">
                            <IconHeader path="/assets/icons/table-list.png" headerfont='text-xs md:text-xl'>Data Sheet</IconHeader>
                            <IconHeader path="/assets/icons/tool.png" w={25} h={30} headerfont='text-xs md:text-xl'>Installation and Operation Manual</IconHeader>
                            <IconHeader path="/assets/icons/Shield.png" w={25} h={30} headerfont='text-xs md:text-xl'>Statement Of Compliance</IconHeader>
                            <IconHeader path="/assets/icons/FileText.png" w={25} h={30} headerfont='text-xs md:text-xl'>UKCA & CE Declaration of Conformity</IconHeader>
                            <IconHeader path="/assets/icons/3D.png" w={25} h={30} headerfont='text-xs md:text-xl'>NBS BIM & CAD Packages</IconHeader>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-left gap-6 pt-10 items-left ">
                    
                    <div className="  flex flex-col items-center md:justify-evenly">
                        <div className=" flex flex-col items-left gap-6">
                            <div className=''>
                                <h1 className="text-xl md:text-4xl font-black ">Specification</h1>
                            </div>
                            <div className="flex flex-col gap-3 text-xl">
                                <IconHeader path="/assets/icons/hexagon.png" w={20} h={4} lines={product.materials} headerfont="font-medium md:font-semibold" font="text-xs md:text-xl" >Materials</IconHeader>
                                <IconHeader path="/assets/icons/move.png" w={20} h={30} lines={product.enclosure_dimensions} headerfont="font-medium md:font-semibold" font="text-xs md:text-xl">Enclosure Dimensions</IconHeader>
                                <IconHeader path="/assets/icons/git-commit.png" w={20} h={30} lines={product.charge_protocol} headerfont="font-medium md:font-semibold" font="text-xs md:text-xl">Charge Protocol</IconHeader>
                                <IconHeader path="/assets/icons/zap.png" w={20} h={30} lines={product.input_voltage} headerfont="font-medium md:font-semibold" font="text-xs md:text-xl">Input Voltage</IconHeader>
                                <IconHeader path="/assets/icons/shield2.png" w={20} h={30} lines={product.protection} headerfont="font-medium md:font-semibold" font="text-xs md:text-xl">Protection</IconHeader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='faq' className=" mx-2 md:mx-40 mt-10 md:mt-25 py-5 md:py-20 bg-[#FFFFFF] rounded-3xl">
                <div className="flex flex-col md:items-left pl-8 md:pl-60 text-lg md:text-4xl font-black mb-5">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className=" mx-2 md:mx-65 bg-[#FFFFFF] ">
                    <FAQ></FAQ>
                </div>
            </div>

            <div id='videos' className="mx-2 mt-10 md:mt-25 md:mx-40 flex flex-col gap-5 md:gap-10 ">
                <VideoPlayer></VideoPlayer>
            </div>
            <div id='articles' className="mt-3 md:mt-15 md:mx-25 flex flex-col gap-3 md:gap-6">
                <div className="text-2xl flex justify-center md:justify-start md:text-4xl md:mx-40 font-black">
                    <h1>Related Articles</h1>
                </div>
                <div className="mx-2 md:mx-30 grid grid-cols-3 gap-3">
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