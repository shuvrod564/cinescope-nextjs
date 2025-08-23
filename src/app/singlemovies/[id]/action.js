"use server";

export async function getMovieDetails({ prevState, movie_id }) {
    // GET MOVIE DETAILS BY MOVIE ID
    if(!movie_id) return { results: {} };

    const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie?id=${encodeURIComponent(movie_id)}&v=1`, {  cache: "no-store" });
    const data = await res.json();

    return { results: data || {} };
}