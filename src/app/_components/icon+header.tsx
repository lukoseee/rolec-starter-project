
type IconHeaderType = {children: React.ReactNode;
                       path: string;
                       w?: number;
                       h?: number; 
                       lines?: string[];
                       headerfont?: string;
                       font?: string;
                       override?: string;

 }

export default function IconHeader( {children, path, h, w, lines = [], font, headerfont , override} : IconHeaderType)
{   
    
    return (
        <div className="flex gap-0 md:gap-1">
            <div className="pt-0.5 md:pt-1 m-0 ">
                <img src={path} className= {`object-fit ${override}`}  ></img>
            </div>
            <div className="p-0 m-0 ">   
                <h1 className={headerfont}>{children}</h1>
                {lines.map( (line,index) => <p className = {font} key={index}>{line}</p>)}
            </div>
        </div>
    )
}