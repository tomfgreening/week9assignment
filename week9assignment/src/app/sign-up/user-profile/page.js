import {auth} from "@clerk/nextjs";
export default async function UserProfilePage() {
    const {userId} = await auth ();
    
}