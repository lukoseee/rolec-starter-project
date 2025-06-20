type QuestionProps = {children: React.ReactNode; label?:string;}

export default function Question({children, label="OCPP"}: QuestionProps)
{
    return(
        <div className="px-4 py-6 bg-[#FFFFFF] rounded-b-4xl">
            <p className="text-xs md:text-xs font-black text-[#47701B]">{label}</p>
            <h1 className="font-black text-xl md:text-xl">{children}</h1>
        </div>
    )
}