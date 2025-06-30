
type LoginHeaderProps = {header: string, label:string}

export default function LoginHeader( {header , label}: LoginHeaderProps){
    return(
        <div className="flex flex-col items-center gap-6 px-10 ">
            <img src="/assets/logo/single r logo.avif" className="w-15 h-15"></img>
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-xl font-semibold">{header}</h1>
                <p className="text-sm">{label}</p>
            </div>
        </div>)
}