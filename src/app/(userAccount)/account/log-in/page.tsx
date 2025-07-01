'use client'

import { Button, InputBox } from "@Rolec-Services/rolec-ui";
import { redirect } from "next/navigation";
import LoginFooter from "src/app/_components/loginfooter";
import LoginHeader from "src/app/_components/loginheader";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';


export default function SignIn()
{
    return (
         <div className="border rounded-3xl w-lg grid bg-[#F6F6F6] mt-5 ">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <div className=" bg-white p-10 border-b-2 rounded-3xl flex flex-col gap-8 text-black">
                <LoginHeader label="Welcome Back! Please sign in to continue" header="Sign in to connect"></LoginHeader>
                <div className="flex flex-col items-center gap-8">
                    <InputBox className="w-full" error guidance={{children: ''}} label={{children: 'Email address'}} placeholder="Enter your email address" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>
                    <Button className="w-full" size="lg" variant="ev-green-primary" onClick={()=> redirect('/dashboard')}>Continue</Button>
                </div>
            </div>
                <LoginFooter label="Don't have an account?" link="Sign up" ref="/account/sign-in"></LoginFooter>
        </div>
    );
}