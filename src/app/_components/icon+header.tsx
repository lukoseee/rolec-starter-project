
type IconHeaderType = {children: React.ReactNode;
                       path: string;
                       w?: number;
                       h?: number; 
                       lines?: string[];
                       headerfont?: string;
                       font?: string;

 }

export default function IconHeader( {children, path, h, w, lines = [], font, headerfont} : IconHeaderType)
{
    return (
        <div className="flex gap-2">
            <div className="pt-0.5 md:pt-1.5 m-0 ">
                <img src={path} className="object-fit" ></img>
            </div>
            <div className="p-0 m-0 ">   
                <h1 className={headerfont}>{children}</h1>
                {lines.map( (line,index) => <p className = {font} key={index}>{line}</p>)}
            </div>
        </div>
    )
}