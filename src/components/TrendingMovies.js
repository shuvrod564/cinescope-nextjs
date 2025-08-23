import React from 'react'
import MovieItemCard from './MovieItemCard'
import Link from 'next/link'

const TrendingMovies = ({ data }) => {
    
    
  return (
    <div className='py-10 md:py-14'>
        <div className="container">
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Trending Movies</h2>
                <Link href="/movies" className='text-amber-600 font-semibold'>See all</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                    data?.slice(0, 10).map((movie, index) => (
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
  )
}

export default TrendingMovies