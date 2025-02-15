"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <>
      <h2>We are sorry! An unexpected error occured.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}> Try again </button>
      <Link href={"/"}>Return to homepage</Link>
    </>
  );
}
