"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="mt-4 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-md transition duration-300"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}