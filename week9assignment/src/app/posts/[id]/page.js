import { db } from "@/app/utilities/dbconnection";
import { currentUser } from "@clerk/nextjs/dist/types/server";
export default async function UserPosts({ params }) {
  const userPostsParams = await params;
  console.log(userPostsParams);
  const userposts = await db.query("SELECT * from posts WHERE clerkI");
  return (
    <>
      <h1>Posts by {currentUser} </h1>
    </>
  );
}
