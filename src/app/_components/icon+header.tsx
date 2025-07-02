
type IconHeaderType = {children: React.ReactNode;
                       path: string;
                       lines?: string[];
                       headerfont?: string;
                       font?: string;
                       override?: string;

 }

export default function IconHeader( {children, path, lines = [], font, headerfont , override} : IconHeaderType)
{   
    
    return (
    <div className="flex items-start gap-1"> {/* Changed to items-start */}
      <img src={path} className={`py-2 self-baseline ${override}`}  alt="Icon" />
      <div className="flex flex-col">
        <div className="flex items-baseline"> 
          <h1 className={headerfont}>{children}</h1>
        </div>
        {lines.map((line, index) => (<p className={font} key={index}>{line}</p>))}
      </div>
    </div>
  );
}

