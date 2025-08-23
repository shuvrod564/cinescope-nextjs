import { formatDate } from '@/helpers/formatDate';
import { Star } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { movieRating } from '@/helpers/movieRating';

const MovieItemCard = ({ movie }) => {
    return (
        <>
            <div className="movie__card bg-white p-1.5 rounded-lg w-full">
                <Link href={`/movies/${movie.id}`} className='rounded-lg overflow-hidden'>
                    <Image
                        src={
                            movie.poster_path
                                ? `${process.env.NEXT_PUBLIC_SMALL_IMAGE_URL}${movie.poster_path}`
                                : '/images/no-image-available.webp'
                        }
                        // src={`${process.env.NEXT_PUBLIC_SMALL_IMAGE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        width={200}
                        height={300}
                        className='w-full h-auto rounded-lg'
                    />
                </Link>
                <div className="pb-3 px-2 pt-4">
                    <p className='text-gray-500 text-xs mb-1.5'>{formatDate(movie.release_date)}</p>
                    <h3 className="text-base font-medium leading-[1.1] mb-1.5 min-h-8">
                        <Tooltip>
                            <TooltipTrigger className='w-full text-left'>
                                <Link href={`/movies/${movie.id}`} className='line-clamp-2 text-ellipsis overflow-hidden'>{movie.title}</Link> 
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{movie.title}</p>
                            </TooltipContent>
                        </Tooltip> 
                    </h3>

                    <div className="inline-flex items-center gap-1">
                        <Star className='w-4 h-4 text-amber-600' />
                        <span className='text-sm text-gray-500'>{movieRating(movie.vote_average)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieItemCard