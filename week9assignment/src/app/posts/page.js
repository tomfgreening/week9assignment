import { db } from "@/app/utilities/dbconnection";
import NewPingForm from "../components/NewPingForm";

export default async function PostsPage() {
  const posts = await db.query("SELECT * FROM posts");
  const wrangledPosts = posts.rows;
  return (
    <>
      <h1> Pingr Posts Page </h1>
      {wrangledPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.post_title}</h2>
          <h4>{post.post_date}</h4>
          <h3>{post.post_body}</h3>
        </div>
      ))}
      <NewPingForm />
    </>
  );
}