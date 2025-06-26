import bg from "public/assets/banner.png";

function BannerSection(){

    return (
        <div className = "relative h-25 lg:h-70 overflow-hidden rounded-b-3xl">
            <div className = "absolute inset-0 bg-[url(https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4kzAojPgO3hRV9H8goyiFtc6z2sIl1juaqweG)] bg-cover bg-[position:30%_39%] rounded-b-3xl transition-transform duration-500 hover:scale-110 active:scale-110">
                <div className = " flex justify-center items-center absolute inset-0 bg-black/50 rounded-b-3xl opacity-0 hover:opacity-100 active:opacity-100 "> 
                    <h1 className = "font-extrabold text-3xl lg:text-6xl text-white">Knowledge Base</h1>
                </div>
            </div>
        </div>
    );
}
export default BannerSection
