'use client'
import { Button, InputBox } from "@Rolec-Services/rolec-ui";
import { redirect } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import LoginFooter from "src/app/_components/loginfooter";
import LoginHeader from "src/app/_components/loginheader";
import { api } from "src/trpc/react";

export default function SignIn()
{   
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const[email , setEmail] = useState('');
    const[errorMsg , setMsg] = useState('');
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


    const createUser = api.post.createUser.useMutation({
        onError: (error) => {
            console.log("Error:", error.message); // Handle error here
        },
    });
    

    // useEffect(() => {
    //     console.log("Current errorMsg:", errorMsg); // Check if it updates
    //     }, [errorMsg]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault()
        
        switch(true) {

            case !firstName:
                setMsg("First name is empty");
                break;

            case !lastName:
                setMsg("Last Name is empty");
                break;

            case !email:
                setMsg("Email is empty");
                break;

            case !regex.test(email):
                setMsg("Email invalid");
                break;

            default:
                createUser.mutate( {email:email ,first:firstName, last: lastName}, {
                    onError: (error) => setMsg("Email in use! Try Again")} )
                break;
        }       
    }

    return(
        <div className="border rounded-3xl w-lg grid bg-[#F6F6F6] mt-5">
            <div className=" bg-white p-10 border-b-2 rounded-3xl flex flex-col gap-8 text-black">
                <LoginHeader label="Welcome! Please fill in the details to get started" header="Create your account"></LoginHeader>
                <form className="flex flex-col  gap-8 " onSubmit={handleSubmit}>
                    <div className="flex gap-8 ">
                        <InputBox error = {!firstName }className="w-full"  value = {firstName} onChange = { (e) => setFirstName(e.target.value)} guidance={{children: ''}} label={{children: 'First name'}} placeholder="Enter your first name" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>
                        <InputBox error = {!lastName} className="w-full"  value = {lastName} onChange = { (e) => setLastName(e.target.value)} guidance={{children: ""}} label={{children: 'Last name'}} placeholder="Enter your last name" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>                    
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputBox error = {!email} className="w-full" value = {email} onChange = { (e) => setEmail(e.target.value)} guidance={{children:  "" }} label={{children: 'Email address'}} placeholder="Enter your email address" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>
                        <p className="text-sm text-gray-400">{errorMsg}</p>
                    </div>
                    <Button className="w-full" size="lg" variant="ev-green-primary" type="submit">Continue</Button>
                </form>
            </div>
            <LoginFooter label="Already have an account?" link="Log in" ref="/account/log-in"></LoginFooter>
        </div>
    );
}