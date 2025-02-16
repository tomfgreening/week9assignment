import { auth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
export default async function UserProfilePage() {
  const { userId } = await auth();
  const user = await currentUser()
  return (
    <>
      <h1>Pingr profile </h1>
      <p>{userId}</p>
      <h2> Welcome back, {user.firstName} {user.lastName} </h2>
    </>
  );
}
