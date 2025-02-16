import { db } from "@/app/utilities/dbconnection";
export default function NewPingForm() {
    "use server";
    async function handleSubmit (formValues) {
        const post_title = formValues.get ("post_title");
        const post_date = formValues.get ("post_date");
        const post_body = formValues.get ("post_body");
        db.query(
            'INSERT INTO users (post_title, post_date, post_body) VALUES ($1, $2, $3)',
            [post_title, post_date, post_body]
        );
    }
}
