import CastItemCard from '@/components/CastItemCard';
import { apiOptions } from '@/helpers/apiOptions';
import { formatDate } from '@/helpers/formatDate';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import dynamic from 'next/dynamic';

const SilimarMoviesSection = dynamic(
  () => import('@/components/SimilarMovies'),
  {
    loading: () => <p>Loading...</p>,
  }
)

export default async function page({ params }) {
  const { id } = await params;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}`;
  const res = await fetch(url, apiOptions);
  const data = await res.json();


  // GET MOVIE CREDITS
  const credits = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/credits`, apiOptions);
  const creditsData = await credits.json();
  // console.table(creditsData.cast);



  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={`relative pb-12`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_ORIGINAL_IMAGE_URL}${data.backdrop_path}`}
          width={1920}
          height={1080}
          alt={data.title}
          className=' w-full h-[500px] lg:h-[600px] object-cover z-0'
        />
        <div className="absolute top-0 start-0 w-full h-[500px] lg:h-[600px] bg-gradient-to-b to-black/80 from-white/0 z-10"></div>
        <div className="container relative z-20 -mt-44 lg:-mt-64 2xl:-mt-64">
          <div className="grid grid-cols-7 gap-5">
            <div className="col-span-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_ORIGINAL_IMAGE_URL}${data.poster_path}`}
                width={500}
                height={700}
                alt={data.title}
                className='w-full object-contain'
              />
            </div>

            <div className="col-span-5">
              <div className="max-w-[calc(100%-300px)] lg:pr-10 lg:pt-10">
                <div className="mb-3 text-white">
                  <span className="font-light">Genre - </span>
                  {
                    data.genres?.map((genre, index) => (
                      <span key={index} className="font-light px-2 relative border-white last:after:content-none after:w-0.5 after:h-3.5 after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2">{genre.name}</span>
                    ))
                  }
                </div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-5'>{data.title}</h1>
                <p className="text-white font-light text-sm mb-3">Released: <span className='font-normal text-base'>{formatDate(data.release_date)}</span></p>
                <p className="text-white font-light text-sm flex items-center gap-2 mb-3">Language:
                  <span className='inline-flex items-center gap-1'>
                    {data.origin_country[0] === 'US' ? (
                      <span className="flex">
                        <Image src={'/images/flags/usa-flag.webp'} width={20} height={20} alt="United States" className='w-auto h-5' />
                      </span>
                    ) : data.origin_country}
                    <span className='text-base font-normal'>
                      {data.original_language === 'en' ? 'English' : data.original_language}
                    </span>
                  </span>
                </p>
                <div className="text-white text-sm mb-3">
                  Production Companies:
                  <div className='font-normal text-base flex flex-wrap gap-2 mt-1'>
                    {
                      data.production_companies?.map((company, index) => (
                        <div key={index} className='text-center'>
                          <Image
                            src={
                              company.logo_path
                                ? `${process.env.NEXT_PUBLIC_SMALL_IMAGE_URL}${company.logo_path}`
                                : '/images/placeholder-logo.webp' // path to your default image in /public
                            }
                            width={100}
                            height={50}
                            alt={company.name || 'logo'}
                            className="bg-[#f1f1f1] p-2 aspect-video object-contain rounded-sm shadow-sm"
                          />
                          {/* <span className="block text-sm text-black">{company.name}</span> */}

                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>


              <p className=" mt-6 lg:mt-12 opacity-70 leading-[1.6]">{data.overview}</p>

              <div className="bg-gradient-to-r from-[rgba(255,185,105,0.73)] to-orange-0 rounded-lg p-4 lg:absolute max-w-[300px] w-full top-0 right-0">
                <div className="flex">
                  <div className="inline-flex items-center gap-2">
                    <span className='text-2xl lg:text-4xl xl:text-5xl font-semibold leading-[1.12] text-[#e36912]'>{data.vote_average}</span>
                    <div className="flex flex-col leading-[1.2]">
                      <span>/10</span>
                      <span>{data.vote_count}</span>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* end col */}

          </div>

          <h2 className="text-xl md:text-2xl mt-10 md:mt-12 font-semibold mb-4">Movie Cast</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {
              creditsData.cast?.slice(0, 14).map((cast, index) => (
                <div key={index}>
                  <CastItemCard
                    data={cast}
                  />
                </div>
              ))
            }
          </div>

        </div>
        {/* END CONTAINER */}
      </div>

      <SilimarMoviesSection id={id} />
    </>
  )
}


