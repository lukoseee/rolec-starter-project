
import Link from "next/link";

import { LatestPost } from "src/app/_components/post";
import { api, HydrateClient } from "src/trpc/server";
import NavBar from "src/app/_components/navbar" ; 
import BannerSection from "./_components/bannerDiv";
import CatergoryBar from "src/app/_components/categorybar";
//import ProductList from "src/app/_components/productlist";
import Banner from "src/app/_components/banner";
import Footer from "src/app/_components/footer";
import ProductList from "./products/page";

export default async function Home() {
  //const hello = await api.post.hello({ text: "from tRPC" });

  //void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className= "grid grid-cols-1 bg-[#F6F6F6]">
        
        <div className="px-2 sm:px-25">
          <BannerSection/>
        </div>

         <CatergoryBar />
        <div>
          <div className="mx-2 md:mx-68 mt-5">
            <Banner classname = "bg-cover bg-[position:50%_39%] h-60 md:h-100 text-xs"  text1=" Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet lorem ut nisi faucibus" button="Lets have a chat!">Topone</Banner>
          </div>
        </div>
        <div className="mx-2 md:mx-68 mt-5 gap-5 grid md:flex ">
            <Banner path="https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4pxZPEGXaCE7yT9hrGKXmYVZbJvcOW1kQgI5x" classname="bg-[length:130%] bg-position-[3]" transparency={50} formfield={true} header1="Rolectrified" header2="Newsletter" text1="Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet ex" button="Sign up">lol</Banner>
            <Banner width={170} path="https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4YWDWgxvMwd9fFlRJku46VnP8qXOp2mHTW0jr" classname="bg-[length:90%] bg-top" transparency={50} header1="Rolectrified" header2="Newsletter" text1="Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet ex" button="Listen to the podcast now!">lol</Banner>
        </div> 
          
        
      </main>
    </HydrateClient>
  );
}
