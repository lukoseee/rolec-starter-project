'use client'
import {  Button, InputBox } from "@Rolec-Services/rolec-ui";
import { useState, type FormEvent } from "react";
import { api } from "src/trpc/react";

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


export default function Bannerf({children, classname="", path = "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS48M1hlEfQAWYrwIZKDFfNvyLm4xCnSVzR7OTs", height = 100, header1= "Arrange Training", header2 = "At your premises", text1 = "", text2 = "", button="button", transparency=0 , formfield=false }: BannerProps) 
{
    const [inputValue , setInput] = useState('');
    const[errorMsg , setMsg]  = useState("");
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const createEmail = api.post.create.useMutation();

    const handleSubmit =  (e: FormEvent<HTMLFormElement>) => { e.preventDefault()
        if(regex.test(inputValue)){
            createEmail.mutate({text: inputValue});
            setInput("");
            setMsg("Sucess: Added email!")
            }
        else{
            setMsg("Error: Provide valid email format")
        } 
    }

    return (
        <div className = {`relative h-${height} relative p-9 lg:p-15  ${classname} w-full `}>
            <div style={{ backgroundImage: `url(${path})` }} className = {`absolute inset-0 rounded-3xl ${classname} `}></div>
            <div className = {`absolute inset-0 bg-black/${transparency} rounded-3xl`}> </div>
            <div className = "relative text-[#B0B0B0] space-y-5">
                <div className={`${children}`}>
                    <h1 className = "font-normal text-xl lg:text-6xl">{header1} </h1>
                    <h1 className= "font-normal text-xl lg:text-6xl ">{header2}</h1>
                </div>
                <div>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
                <div >
                    <form className="flex gap-2 " onSubmit={handleSubmit}>
                        <div>
                            {formfield && <InputBox value = {inputValue} onChange = { (e) => setInput(e.target.value)} className= {""} guidance={{children: ''}} label={{children: ''}} placeholder="Email address" toolTip={{ children: '', trigger: ''}}/>}
                            <p>{ `${errorMsg}`}</p>
                        </div>
                        <Button className="bg-[#74AF28] rounded-xl p-2 hover:opacity-90" size="lg" variant="primary" type="submit" >{button}</Button> 
                    </form>                     
                </div>
            </div>
        </div>
    );
}