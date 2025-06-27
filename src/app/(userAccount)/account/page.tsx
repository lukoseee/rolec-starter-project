import "@Rolec-Services/rolec-ui/dist/style.css";

export default function SignIn()
{
    return (
    <html lang="en" >
        <body>
            <div className="h-40  ">
                <div className= "">
                    <div className="border  ">
                        <div className="flex flex-col items-center gap-6">
                            <img src="/assets/logo/single r logo.avif" className="w-10 h-10"></img>
                            <div className="flex flex-col items-center">
                                <h1>Sign in to connect</h1>
                                <p>Welcome back! Please sign in to continue</p>
                            </div>
                        </div>
                        <div>INPUT + BUTTON</div>
                    </div>
                </div>
                <div>
                    <p>Dont have an account Sign Up</p>
                </div>
            </div>
        </body>
    </html>
    );
}