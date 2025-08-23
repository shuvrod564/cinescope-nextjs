
import MovieItemCard from '@/components/MovieItemCard';
import MovieSearch from '@/components/MovieSearch';
import { apiOptions } from '@/helpers/apiOptions';
import React from 'react'

export async function getSearchResult(query) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/search/movie?query=${query}`;
    const res = await fetch(url, apiOptions);
    const data = await res.json();
    return data;
}

export default async function page({ searchParams  }) {
    const query = searchParams.search || '';
    // console.log(query, 'search');
    const searchRes = await getSearchResult(query);
    console.log(searchRes);

    return (
        <>
        <MovieSearch />
            <div className="py-10 md:py-12">
                <div className="container">
                    <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold mb-5'>{query}</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {
                            searchRes.results?.map((movie, index) => (
                                <div className="flex" key={index}>
                                    <MovieItemCard
                                        movie={movie}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* END CONTAINER */}
            </div>
        </>
    )
}

