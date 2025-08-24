export const getSessionId = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("tmdb_session") || null;
};
