
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
            <div>
                <img src={path} width={w} height={h}></img>
            </div>
            <div>   
                <h1 className={headerfont}>{children}</h1>
                {lines.map( (line,index) => <p className = {font} key={index}>{line}</p>)}
            </div>
        </div>
    )
}