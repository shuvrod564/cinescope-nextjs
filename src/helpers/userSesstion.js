export function userSession() {
  if (typeof window === "undefined") return null; // prevent SSR errors

  const session = localStorage.getItem("tmdb_session");
  return session ? session : null;
}
