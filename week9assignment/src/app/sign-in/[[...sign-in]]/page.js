import {SignIn} from "@clerk/nextjs";
export default function SignInPage() {
    return (
        <>
        <h1> Pingr - Welcome back</h1>
        <h2>Please sign in to your Pingr account</h2>
        <SignIn />
        </>
    );
}