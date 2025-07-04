'use client'
import { Button, InputBox } from "@Rolec-Services/rolec-ui";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import { cosineDistance } from "drizzle-orm";
import { easeIn } from "framer-motion";
import { redirect } from "next/navigation";
import { useState, type FormEvent } from "react";
import LoginFooter from "src/app/_components/loginfooter";
import LoginHeader from "src/app/_components/loginheader";
import { api } from "src/trpc/react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  errorMsg: string;
}


export default function SignIn()
{   
    const [formData, setFormData] = useState<FormState>({
  	firstName: '',
  	lastName: '',
  	email: '',
  	errorMsg: ''
	});


    const createUser = api.product.createUser.useMutation({});

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { e.preventDefault()
        
        try{

            await createUser.mutateAsync({email:formData.email, firstName:formData.firstName , lastName:formData.lastName}, {onSuccess:  () => {
			setFormData({...formData, errorMsg: ""})
		} } ) ;

        } catch(error) {

            if(error instanceof TRPCClientError ){
			
			//catch db error
			if(error.message.includes("SQLite error")){
				setFormData({...formData, errorMsg: "Email already in use"})
			//zod errors
			}else {
				const errorData = JSON.parse(error.message);

				//display first zod error
				const firstErrorMessage = errorData[0].message;
				setFormData({...formData, errorMsg: firstErrorMessage })
			}
				
		}
        }   
}

    return(
        <div className="border rounded-3xl w-lg grid bg-[#F6F6F6] mt-5">
            <div className=" bg-white p-10 border-b-2 rounded-3xl flex flex-col gap-8 text-black">
                <LoginHeader label="Welcome! Please fill in the details to get started" header="Create your account"></LoginHeader>
                <form className="flex flex-col  gap-8 " onSubmit={handleSubmit}>
                    <div className="flex gap-8 ">
                        <InputBox error = {!formData.firstName }className="w-full"  value = {formData.firstName} onChange = { (e) => setFormData({...formData, firstName: e.target.value}) } guidance={{children: ''}} label={{children: 'First name'}} placeholder="Enter your first name" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>
                        <InputBox error = {!formData.lastName} className="w-full"  value = {formData.lastName} onChange = { (e) => setFormData({...formData, lastName: e.target.value}) } guidance={{children: ''}} label={{children: 'Last name'}} placeholder="Enter your last name" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>                    
                    </div>
                    <div className="flex flex-col gap-1">
                        <InputBox error = {!formData.email} className="w-full" value = {formData.email} onChange = { (e) => setFormData({...formData, email: e.target.value}) }  guidance={{children:  "" }} label={{children: 'Email address'}} placeholder="Enter your email address" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>
                        <p className="text-sm text-gray-400">{formData.errorMsg}</p>
                    </div>
                    <Button className="w-full" size="lg" variant="ev-green-primary" type="submit">Continue</Button>
                </form>
            </div>
            <LoginFooter label="Already have an account?" link="Log in" ref="/account/log-in"></LoginFooter>
        </div>
    );
}