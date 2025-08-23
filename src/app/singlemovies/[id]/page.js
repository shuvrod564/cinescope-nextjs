'use client'

import { usePathname } from "next/navigation"
import { getMovieDetails } from "./action"
import { useActionState, useFormStatus } from "react-dom" // ✅ updated
import { useEffect } from "react"
import Image from "next/image"



export default function Page() {
  const movie_id = usePathname().split("/").pop();
  const [state, formAction] = useActionState(getMovieDetails, { results: {} });
  const { pending } = useFormStatus(); // for loading state

  // Call server action with movie_id
  useEffect(() => {
    if (!movie_id) return;
    const formData = new FormData();
    formData.set("movie_id", movie_id);
    formAction(formData);
  }, [movie_id]);

  if (pending) return <p>Loading movie details...</p>;

  const movie = state.results;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{movie["#TITLE"]}</h1>
      <p>{movie["#YEAR"] ? `Year: ${movie["#YEAR"]}` : ""}</p>
      <Image
        src={movie["#IMG_POSTER"]}
        alt={movie["#TITLE"]}
        width={200}
        height={300}
      />
      <p>{movie["#DESCRIPTION"]}</p>
    </div>
  );
}
