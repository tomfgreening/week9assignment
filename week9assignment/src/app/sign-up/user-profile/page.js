import { auth } from "@clerk/nextjs";
export default async function UserProfilePage() {
  const { userId } = await auth();
  return (
    <>
      <h1>Pingr profile </h1>
      <p>{userId}</p>
    </>
  );
}
