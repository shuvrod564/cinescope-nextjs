 
import Link from "next/link"; 
import { TvMinimalPlay } from 'lucide-react'
import { apiOptions } from "@/helpers/apiOptions";
import TrendingMovies from "@/components/TrendingMovies";
import HeroBanner from "@/components/HeroBanner";
import MovieSearch from "@/components/MovieSearch";

async function getBannerList() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movie/102382`;
  const res = await fetch(url, apiOptions);
  const data = await res.json();
  return data;
}

export async function getAlGenres() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list`; 

  try {
    const res = await fetch(url, apiOptions);
   if (!res.ok) throw new Error("Failed to fetch movies");
    
    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error, "error");
    return []; 
  } 
}

export async function getTrendingMovies() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/week?page=10`;
  try {
    const res = await fetch(url, apiOptions);
   if (!res.ok) throw new Error("Failed to fetch movies");
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error, "error");
    return []; 
  }
}

export const metadata = {
  'title': 'Cine Scope | All Movies',
  'description': 'All Movies'
}

export default async function Home() {

  // GET BANNER IMAGE
  const bannerSlider = await getBannerList(); 
  

  // GET ALL GENRES
  const genres = await getAlGenres(); 

  // GET ALL TRENDING MOVIES
  const trendingMovies = await getTrendingMovies();
  // console.log(trendingMovies.results);
  

  return (
    <> 
      <MovieSearch />

     {/* HERO BANNER SECTION */}
     {/* <HeroBanner data={bannerSlider} /> */}


     {/* MOVIES CAROUSEL */}
      <TrendingMovies data={trendingMovies.results} />

      {/* SET ALL GENRES LIST HERE */}
      <div className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4">List of official genres for movies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {
               
              genres.genres?.map((genre, index) => (
                <div className="flex" key={index}>
                  <div className="border border-gray-200 rounded-lg w-full bg-white text-center p-4">
                    <Link href={`/genre/${genre.id}`}>
                      {genre.name}
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* END CONTAINER */}
      </div>


      


    </>
  );
}
