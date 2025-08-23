// 🟢 Server Action
export async function searchMovie(prevState, formData) {
//   "use server";

  const query = formData.get("search");
  if (!query) return { results: [] };

  const res = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(query)}&v=1`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return { results: data || [] };
}