import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-10'>
        <div className="container">
            <div className="text-center">
                <Link href={'/'} className='inline-block mb-4'>
                    <Image
                        src={'/images/cinescope.webp'}
                        width={256} height={48}
                        alt='Logo' 
                        className='w-auto h-8'
                    />
                </Link>
            </div>
            <p className='text-center text-gray-500'>Copyright &copy; 2023 Cinescope. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer