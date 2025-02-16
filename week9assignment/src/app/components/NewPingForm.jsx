import { db } from "@/app/utilities/dbconnection";
export default function NewPingForm() {
  "use server";
  async function handleSubmit(formValues) {
    const post_title = formValues.get("post_title");
    const post_date = formValues.get("post_date");
    const post_body = formValues.get("post_body");
    db.query(
      "INSERT INTO users (post_title, post_date, post_body) VALUES ($1, $2, $3)",
      [post_title, post_date, post_body]
    );
  }

  return (
    <>
      <h1>Ping something!</h1>
      <form action={handleSubmit}>
        <label htmlFor="post_title">Ping title</label>
        <input type="text" name="post_title" id="post_title" />
        <label htmlFor="post_date">Date</label>
        <input type="date" name="post_date" id="post_date" />
        <label htmlFor="post_body"></label>
        <input type="text" name="post_body" id="post_body" />
        <button type="submit"> Do your Ping!</button>
      </form>
    </>
  );
}
