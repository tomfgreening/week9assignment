import { auth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/dist/types/server";
export default async function UserProfilePage() {
  const { userId } = await auth();
  return (
    <>
      <h1>Pingr profile </h1>
      <p>{userId}</p>
      <currentUser
      </currentUser>
    </>
  );
}
