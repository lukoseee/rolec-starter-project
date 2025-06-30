import { HydrateClient } from "src/trpc/server";
import BannerSection from "src/app/_components/bannerDiv";
import CatergoryBar from "src/app/_components/categorybar";
import Bannerf from "src/app/_components/banner";

export default async function Home() {

  return (
    <HydrateClient>
      <main className= "grid grid-cols-1 bg-[#F6F6F6]">
        <div className="px-2 lg:px-42 ">
          <BannerSection/>
        </div>
         <CatergoryBar /> 
        <div>
          <div className="mx-2 lg:mx-68 mt-5">
            <Bannerf classname = "bg-cover bg-[position:50%_39%] h-60 lg:h-100 text-xs lg:text-lg"  text1=" Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet lorem ut nisi faucibus" button="Lets have a chat!">Topone</Bannerf>
          </div>
        </div>
        <div className="mx-2 lg:mx-68 mt-5 gap-5 grid lg:flex ">
            <Bannerf path="https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4pxZPEGXaCE7yT9hrGKXmYVZbJvcOW1kQgI5x" classname="bg-[length:130%] bg-position-[3]" transparency={50} formfield={true} header1="Rolectrified" header2="Newsletter" text1="Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet ex" button="Sign up">lol</Bannerf>
            <Bannerf width={170} path="https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4YWDWgxvMwd9fFlRJku46VnP8qXOp2mHTW0jr" classname="bg-[length:90%] bg-top" transparency={50} header1="Rolectrified" header2="Newsletter" text1="Morbi rutrum velit sed mollis ornare. Donec viverra" text2="eleifend mi, vel laoreet ex" button="Listen to the podcast now!">lol</Bannerf>
        </div> 
      </main>
    </HydrateClient>
  );
}
