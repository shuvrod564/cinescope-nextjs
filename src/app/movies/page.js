import MovieItemCard from '@/components/MovieItemCard';
import { apiOptions } from '@/helpers/apiOptions';
import React from 'react' 
import MoviesPagination from '@/components/MoviesPagination';
import MovieSearch from '@/components/MovieSearch';
 
export const metadata = {
    'title': 'All Movies'
}

export async function getTrendingMovies(page) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/week?page=${page}`;
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

export default async function page({ searchParams }) { 
    const page = await searchParams.page || 1;
    // GET ALL TRENDING MOVIES
    const trendingMovies = await getTrendingMovies(page);
    // console.log(trendingMovies);
 
    

    return (
        <>
            <MovieSearch />
            <div className="py-10 md:py-12">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">All Trending Movies</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {
                            trendingMovies.results?.map((movie, index) => (
                                <div className="flex" key={index}>
                                    <MovieItemCard
                                        movie={movie}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <MoviesPagination
                        totalPages={trendingMovies.total_pages}
                    />
                    

                </div>
                {/* END CONTAINER */}
            </div>


        </>
    )
}

