

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
            <div className="relative h-125 overflow-hidden rounded-b-3xl mr-25 ml-25 mt-5">
                <div className=" absolute inset-0 bg-[url(/assets/ProductPageBanner.jpg)] bg-[length:100%] bg-position-[0]  flex items-end p-30 text-7xl text-white font-black rounded-b-3xl transition-transform duration-500 hover:scale-110 ">
                    <div className = "flex items-end absolute inset-0 bg-black/50 rounded-b-3xl opacity-0 hover:opacity-100 p-30"> 
                        <h1 className = "font-extrabold text-6xl text-white">{product.name}</h1>
                    </div>    
                </div>
            </div>
            <SecondNav></SecondNav>
            <div id= "technical" className="flex mr-40 ml-40 justify-evenly">
                <div className="flex flex-col justify-evenly">
                    <div>
                        <img src= {product.image} className="scale-[150%]"></img>
                    </div>
                    <div className="flex flex-col items-left gap-6">
                        <div>
                            <h1 className="text-4xl font-black ">Downloads</h1>
                        </div>
                        <div className="flex flex-col gap-3 text-xl">
                            <IconHeader path="/assets/icons/table-list.png" w={25} h={10} >Data Sheet</IconHeader>
                            <IconHeader path="/assets/icons/tool.png" w={25} h={30} >Installation and Operation Manual</IconHeader>
                            <IconHeader path="/assets/icons/Shield.png" w={25} h={30} >Statement Of Compliance</IconHeader>
                            <IconHeader path="/assets/icons/FileText.png" w={25} h={30} >UKCA & CE Declaration of Conformity</IconHeader>
                            <IconHeader path="/assets/icons/3D.png" w={25} h={30} >NBS BIM & CAD Packages</IconHeader>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 pt-10">
                    <div>
                        <h1 className="text-4xl font-black">Specification</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className= "text-xl flex flex-col gap-5">
                            <IconHeader path="/assets/icons/hexagon.png" w={20} h={4} lines={product.materials} headerfont="font-extrabold">Materials</IconHeader>
                            <IconHeader path="/assets/icons/move.png" w={20} h={30} lines={product.enclosure_dimensions} headerfont="font-extrabold">Enclosure Dimensions</IconHeader>
                            <IconHeader path="/assets/icons/git-commit.png" w={20} h={30} lines={product.charge_protocol} headerfont="font-extrabold">Charge Protocol</IconHeader>
                            <IconHeader path="/assets/icons/zap.png" w={20} h={30} lines={product.input_voltage} headerfont="font-extrabold">Input Voltage</IconHeader>
                            <IconHeader path="/assets/icons/shield2.png" w={20} h={30} lines={product.protection} headerfont="font-extrabold">Protection</IconHeader>
                        </div>
                    </div>
                </div>
            </div>

            <div id='faq' className="mr-40 ml-40 mt-25 pb-20 pt-20 bg-[#FFFFFF] rounded-3xl">
                <div className="pl-60 text-4xl font-black mb-5">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="mr-65 ml-65 bg-[#FFFFFF] ">
                    <FAQ></FAQ>
                </div>
            </div>

            <div id='videos' className="mt-25 mr-40 ml-40 flex flex-col gap-10 ">
                <VideoPlayer></VideoPlayer>
            </div>
            <div id='articles' className=" mt-25  mb-25 flex flex-col gap-6">
                <div className="text-4xl mr-40 ml-40 font-black">
                    <h1>Related Articles</h1>
                </div>
                <div className=" mr-30 ml-30 grid grid-cols-3 gap-3">
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