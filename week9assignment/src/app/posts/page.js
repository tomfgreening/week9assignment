import { db } from "@/app/utilities/dbconnection";

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
    </>
  );
}

// Create a new component for making a new post and import it to the bottom of this page. Use your week 8 assigment form as a base.
