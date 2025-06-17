import bg from "public/assets/banner.png";

function BannerSection(){

    return (
        <div className = "relative h-70  overflow-hidden rounded-b-3xl">
            <div className = "absolute inset-0 bg-[url(/assets/banner.png)] bg-cover bg-[position:30%_39%] rounded-b-3xl transition-transform duration-500 hover:scale-110">
                <div className = " flex justify-center items-center absolute inset-0 bg-black/50 rounded-b-3xl opacity-0 hover:opacity-100"> 
                    <h1 className = "font-extrabold text-6xl text-white">Knowledge Base</h1>
                </div>
            </div>
        </div>
    );
}

export default BannerSection

{/* <div className = "absolute inset-0 bg-black/50 rounded-b-3xl"> </div>
<div className = "relative">
<h1 className = "font-extrabold text-6xl text-white">Knowledge Base</h1>
</div> */}