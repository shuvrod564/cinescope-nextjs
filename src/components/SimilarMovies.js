import { apiOptions } from '@/helpers/apiOptions';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MovieItemCard from './MovieItemCard';

export default async function SimilarMovies({ id }) {
  // console.log(id, 'id');
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/similar`;
  const res = await fetch(url, apiOptions);
  const data = await res.json();
  // console.log(data);


  return (
    <div className='py-12'>
      <div className="container">
        <h2 className='text-xl md:text-2xl font-semibold mb-4'>Similar Movies</h2>
        <Carousel>
          <CarouselContent className={"-ml-4 scroll-smooth  "}>
            {
              data.results?.map((movie, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 pl-4 snap-start">
                  <div className="flex">
                    <MovieItemCard movie={movie} />
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <div className="inline-flex gap-2 absolute -top-8 right-0"> 
            <CarouselPrevious className={"static cursor-pointer"} />
            <CarouselNext className={"static cursor-pointer"} />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
