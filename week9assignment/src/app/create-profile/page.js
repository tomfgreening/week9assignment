export default function CreateUserProfilePage() {
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
