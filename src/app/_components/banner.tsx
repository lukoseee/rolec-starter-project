import {  Button, InputBox } from "@Rolec-Services/rolec-ui";


type BannerProps = {
    children: React.ReactNode;
    classname?: string;
    path?: string;
    height?: number;
    width?: number;
    header1?: string;
    header2?: string;
    text1?: string;
    text2?: string;
    button?: string;
    transparency?: number;
    formfield?: boolean;
    
};


const Banner = ({children, width, classname="", path = "/assets/banner2.png", height = 100, header1= "Arrange Training", header2 = "At your premises", text1 = "", text2 = "", button="button", transparency=0 , formfield=false }: BannerProps) => (
    <div className = {`relative h-${height} relative p-9 md:p-15  ${classname} w-full `}>
        <div style={{ backgroundImage: `url(${path})` }} className = {`absolute inset-0 rounded-3xl ${classname} `}></div>
        <div className = {`absolute inset-0 bg-black/${transparency} rounded-3xl`}> </div>
        <div className = "relative text-[#B0B0B0] space-y-5">
            <div className={`${children}`}>
                <h1 className = "font-normal text-xl md:text-6xl">{header1} </h1>
                <h1 className= "font-normal text-xl md:text-6xl ">{header2}</h1>
            </div>
            <div>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <div className="flex gap-2">
                {formfield && <InputBox guidance={{children: ''}} label={{children: ''}} placeholder="Email address" toolTip={{ children: '', trigger: ''}}/>}
                <Button className="bg-[#74AF28] rounded-xl p-2 hover:opacity-90" size="lg" variant="primary">{button}</Button>                      
            </div>
            
        </div>
    </div>
)


export default Banner