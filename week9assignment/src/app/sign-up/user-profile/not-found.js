import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Oops! We could not find the post you requested.</h2>
      <Link href="/"> Ping back to the homepage</Link>
    </div>
  );
}
