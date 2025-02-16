export default async function UserPosts ({ params }){
const clerkIdParams = await params;
console.log(clerkIdParams);
return (
    <>
    <h1>Posts by {} </h1>
    </>
)
}