import Link from "next/link";

import { LatestPost } from "src/app/_components/post";
import { api, HydrateClient } from "src/trpc/server";
import NavBar from "src/app/_components/navbar" ; 
import BannerSection from "./_components/bannerDiv";
import CatergoryBar from "src/app/_components/categorybar";
import ProductList from "src/app/_components/productlist";
import SecondBanner from "src/app/_components/banner";


export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className= "grid grid-cols-1 bg-[#F6F6F6]">
        <header className="flex items-center h-20 bg-white ">
          <div className="pl-25 pr-25 ">
            <NavBar/>
          </div>
        </header>
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
          <SecondBanner/>
        </div>

      </main>
    </HydrateClient>
  );
}
