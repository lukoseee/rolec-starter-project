
'use client';
import { use, type RefObject } from 'react';
import { productsArray } from "src/data/productDesc";
import type { ProductType } from "src/data/productDesc";
import Product from "src/app/_components/productlist";
import Banner from "src/app/_components/banner";
import { notFound } from "next/navigation";
import NavItem from "src/app/_components/navitem";
import IconHeader from "src/app/_components/icon+header";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { type AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  type AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import Question from "src/app/_components/question";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useRef } from "react";


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />))(({ theme }) => ({ typography: {fontFamily:'-apple-system'}, fontSize: '50', border: 'none', 
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&::before': {display: 'none',},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon/>} {...props}/>))
  (({ theme }) => ({ typography: {fontFamily:'-apple-system'}, fontSize: '40',
   backgrondColor: 'rgba(0, 0, 0, .03)',
   flexDirection: 'row', [`& .${accordionSummaryClasses.content}` ]:{ typography: {fontFamily:'-apple-system'}, fontSize: '40', marginLeft: theme.spacing(1),}, [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: { transform: 'rotate(180deg)',},
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({ typography: {fontFamily:'-apple-system'}, fontSize: '40',
  padding:theme.spacing(2),
  borderTop: '1px solid rgba(255, 255, 255, 0.13)',
}));

export default function ProductDetails({ params }: { params: Promise<{ productID: string}> }) //productID corresponds with folder name
{   
    const products = use(params);
    const id = products.productID;

    const product = productsArray.find( p => Number(p.id) === Number(id));

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
    
    const technical = useRef(null);
    const faq = useRef(null);
    const videos = useRef(null);
    const articles = useRef(null);

    const scrolltoSection = (elementref: RefObject<HTMLElement>) => {
        if(elementref.current)
        {
            window.scrollTo({top: elementref.current.offsetTop, behavior: 'smooth'})
        }
    };

  

    if (!product) {
        notFound();
    }
    return ( 
        <div>
            <div className="relative h-125 overflow-hidden rounded-b-3xl mr-25 ml-25 mt-15">
                <div className=" absolute inset-0 bg-[url(/assets/ProductPageBanner.jpg)] bg-[length:100%] bg-position-[0]  flex items-end p-30 text-7xl text-white font-black rounded-b-3xl transition-transform duration-500 hover:scale-110 ">
                    <div className = "flex items-end absolute inset-0 bg-black/50 rounded-b-3xl opacity-0 hover:opacity-100 p-30"> 
                        <h1 className = "font-extrabold text-6xl text-white">{product.name}</h1>
                    </div>    
                </div>
            </div>
            <div className="text-xl flex justify-center mr-25 ml-25 h-15 items-center gap-10">
                <NavItem handleClick={ () => scrolltoSection(technical)}>Technical Documentation</NavItem>
                <NavItem handleClick={ () => scrolltoSection(faq)}>FAQ</NavItem>
                <NavItem handleClick={ () => scrolltoSection(videos)}>Videos</NavItem>
                <NavItem handleClick={ () => scrolltoSection(articles)}>Articles</NavItem>
            </div>

            <div ref= {technical} className="flex mr-40 ml-40 justify-evenly">
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

            <div ref= {faq} className="mr-40 ml-40 mt-25 pb-20 pt-20 bg-[#FFFFFF]">
                <div className="pl-60 text-4xl font-black mb-5">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="mr-65 ml-65 bg-[#FFFFFF]">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography fontFamily={'inherit'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Donec congue enim vitae ex pharetra rhoncus? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography fontFamily={'inherit'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Ut sollicitudin velit metus, at feugiat ex convallis non?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography fontFamily={'inherit'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Praesent sed sollicitudin eros. Nam ornare consequat lacus, non sollicitudin leo? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography fontFamily={'inherit'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Curabitur neque turpis, ornare nec ligula sed, maximus euismod libero?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography fontFamily={'inherit'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <Typography component="span" fontFamily={'inherit'} fontWeight={'bold'}>Cras vitae consectetur tellus, at dignissim augue? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography fontFamily={'inherit'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>

            <div ref={videos} className="mt-25 mr-40 ml-40 flex flex-col gap-10 ">
                <div className="text-4xl font-black ">
                    <h1>Watch and Learn</h1>
                </div>
                <div className="h-200">
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width='100%' height='100%' />
                </div>
            </div>
            <div ref={articles} className=" mt-25  mb-25 flex flex-col gap-6">
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