

export async function GET() {
    const res = await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
    );

    const data = await res.json();
    console.log('get token:', data);
    
    return Response.json(data);
}