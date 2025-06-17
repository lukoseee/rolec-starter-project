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
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className= "grid grid-cols-1 bg-[#F6F6F6]">
        
        <div className = "flex items-center h-15">
          <div className="flex justify-between w-full pl-25 pr-25 ">
            <p > Home         &gt;       Knowledge Base </p>
            <p > Home         &gt;       Knowledge Base </p>
          </div>
        </div>

        <div className=" pl-25 pr-25">
          <BannerSection/>
        </div>

        <div className="flex items-center h-25 ">
          <div className="pl-55 pr-45">
            <CatergoryBar />
          </div>  
        </div>

        <div>
          <ProductList/>
        </div>

        <div>
          <div className="ml-68 mr-68 mt-5">
            <Banner classname = "bg-[length:105%] bg-position-[3]" text1=" Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet lorem ut nisi faucibus" button="Lets have a chat!">Topone</Banner>
          </div>
        </div>

        <div className="flex ml-68 mr-68 mt-5 gap-5 ">
            <Banner path="/assets/smallbanner2.jpg" classname="bg-[length:130%] bg-position-[3]" transparency={50} formfield={true} header1="Rolectrified" header2="Newsletter" text1="Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet ex" button="Sign up">lol</Banner>
            <Banner width={170} path="/assets/smallbanner1.jpg" classname="bg-[length:90%] bg-top" transparency={50} header1="Rolectrified" header2="Newsletter" text1="Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet ex" button="Listen to the podcast now!">lol</Banner>
        </div>

        
      </main>
    </HydrateClient>
  );
}
