import { Button, InputBox } from "@Rolec-Services/rolec-ui";
import LoginHeader from "src/app/_components/loginheader";

export default function SignIn()
{
    return (
        <div className="">
                <div className=" bg-white p-10 border-b-2 rounded-3xl flex flex-col gap-8 text-black">
                    <LoginHeader label="Welcome Back! Please sign in to continue" header="Sign in to connect"></LoginHeader>
                    <div className="flex flex-col items-center gap-8 ">
                        <InputBox className="w-full" error guidance={{children: ''}} label={{children: 'Email address'}} placeholder="Enter your email address" toolTip={{ children: 'This is a tooltip', trigger: ''}}/>
                        <Button className="w-full" size="lg" variant="ev-green-primary">Continue</Button>
                    </div>
                </div>
        </div>
    );
}