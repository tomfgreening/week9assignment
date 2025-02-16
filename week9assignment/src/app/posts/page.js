import {db} from "@/app/utilities/dbconnection";

export default async function PostsPage() {
    const posts = await db.query ('SELECT * FROM posts');
    const wrangledPosts = posts.rows;
    return (
        <>
        <h1> Pingr Posts Page </h1>
        {wrangledPosts.map}
        </>
    );
}
