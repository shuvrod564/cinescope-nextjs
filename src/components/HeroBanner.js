import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroBanner = ({ data }) => {
  return (
    <>
        <div className="container ">
            <div className="rounded-2xl overflow-hidden relative"> 
                <Image
                    src={`${process.env.NEXT_PUBLIC_ORIGINAL_IMAGE_URL}${data.backdrop_path}`}
                    width={1920}
                    height={1080}
                    alt={data.title}
                    className='w-full object-cover rounded-2xl h-[400px] md:h-[300px] lg:h-[460px]'
                />
                <div className="absolute top-0 left-0 w-full h-full p-10 xl:p-12 bg-gradient-to-r from-black/70 from-5% to-white/0 text-white">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4'>{data.title}</h1>
                    <p className='text-sm md:text-base max-w-2xl mb-4'>{data.overview}</p>
                    <div className="flex items-center gap-2">
                        <span>
                            {data.origin_country[0] === 'US' ? (
                                <span className="flex">
                                    <Image src={'/images/flags/usa-flag.webp'} width={20} height={20} alt="United States" className='w-auto h-5' />
                                </span>
                            ) : data.origin_country}
                        </span>
                        <span>
                            {data.original_language === 'en' ? 'English' : data.original_language}
                        </span>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button className='px-5 py-2.5 bg-amber-600 text-white rounded-full font-semibold inline-flex items-center gap-2 cursor-pointer'>
                            <Play />
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroBanner