
type LoginFooterProps = {label:string , link:string};

export default function LoginFooter({label, link} : LoginFooterProps){
    return(
        <div className=" flex justify-center gap-2 p-5">
            <p>{label}</p>
            <a className="font-semibold">
                <h3 className="text-[#74AF28]">{link}</h3>
            </a>
        </div>);
}