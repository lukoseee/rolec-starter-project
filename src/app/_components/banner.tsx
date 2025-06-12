import { Banner, Button } from "@Rolec-Services/rolec-ui";


function SecondBanner()
{
    
    type BannerProps = {
        children: React.ReactNode;
        className?: string;
        path?: string;
    };

    const Banner = ({children, className="", path=""}: BannerProps) => (
        <div className="relative h-70 flex justify-center items-center ">

        </div>
    )


    return(
        <div className = "relative h-70 flex justify-left items-center p-20 ml-68 mr-68">
            <div className = "absolute inset-0 bg-[url(/assets/banner2.png)] bg-stretch bg-position-[10] rounded-b-3xl"></div>
            <div className = "relative">
                <h1 className = "font-extrabold text-6xl text-[#B0B0B0] text-wrap">Arrange Training At Your Premises</h1>
            </div>
        </div>

    );
}

export default SecondBanner