import React from 'react'
import Form from 'next/form'

const MovieSearch = () => {
  return (
    <div className='relative py-10 md:py-20 lg:py-24 bg-yellow-100 bg-[url(/images/Polar-new-banner.webp)] bg-no-repeat bg-center bg-cover'>
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-800 opacity-50 mix-blend-multiply z-10"></div>
        <div className="container relative z-20">
            <h1 className='text-white font-bold text-2xl md:text-3xl mb-4'>
                <span className="block text-2xl md:text-4xl">Welcome.</span>
                Millions of movies, TV shows and people to discover. Explore now.
            </h1>
            <Form action='/search' className='flex gap-4 bg-white rounded-full p-1 overflow-hidden'>
                <input 
                    type="text" 
                    name='search'
                    placeholder='Search for a movie or tv show...' 
                    className='w-full h-10 border-0 rounded-lg px-4 focus:outline-none' 
                />
                <button className='px-4 py-2 font-semibold rounded-full bg-red-400'>search</button>
            </Form>
        </div>
    </div>
  )
}

export default MovieSearch