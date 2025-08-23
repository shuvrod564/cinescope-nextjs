import Image from 'next/image'
import React from 'react'

const CastItemCard = ({ data }) => {
  return (
    <div className='text-center '>
      <Image
        src={
          data.profile_path
            ? `${process.env.NEXT_PUBLIC_SMALL_IMAGE_URL}${data.profile_path}`
            : '/images/placeholder-profile.webp' 
        } 
        width={140}
        height={140}
        alt={data.name}
        className='aspect-square rounded-lg shadow object-cover mx-auto'
      />
      <div className="flex-grow pt-3 text-xs md:text-sm text-gray-400">
        <h3 className="text-sm md:text-base font-semibold text-black leading-[1.1] mb-1 overflow-hidden text-ellipsis whitespace-nowrap" title={data.name}>{data.name}</h3>
        <p className=' overflow-hidden whitespace-nowrap text-ellipsis'>{data.character}</p>
      </div>
    </div>
  )
}
export default CastItemCard