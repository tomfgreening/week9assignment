import { revalidatePath } from "next/cache";
import { db } from "../utilities/dbconnection";
import { redirect } from "next/dist/server/api-utils";
export default function CreateUserProfilePage() {
    "use server";
    async function handleSubmit (formValues) {
        const bio = formValues.get ("bio");
        const date_of_birth = formValues.get ("date_of_birth");
        const fav_number = formValues.get ("fav_number");
        db.query(
            'INSERT INTO users (bio, date_of_birth, fav_number) VALUES ($1, $2, $3)',
            [bio, date_of_birth, fav_number]
        );
        revalidatePath("/user-profile");
        redirect("/user-profile");
    }

  return (
    <>
      <h1>Update your Pingr profile</h1>
      <form action={handleSubmit}>
        <label htmlFor="bio">Write a short bio:</label>
        <input type="text" name="bio" id="bio" />
        <label htmlFor="date_of_birth">Enter your birthday:</label>
        <input type="date" name="date_of_birth" id="date_of_birth" />
        <label htmlFor="fav_number">What is your favourite number?</label>
        <input type="number" name="fav_number" id="fav_number" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
