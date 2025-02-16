import { SignUp } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default function SignUpPage() {
  return (
    <>
      <h1>Welcome to Pingr</h1>
      <h2>Sign up here and join the party!</h2>
      <SignUp />
    </>
  );
}
