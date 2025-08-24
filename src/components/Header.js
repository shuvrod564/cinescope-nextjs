import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LoginWithTMBD from './LoginWithTMBD'
import { userSession } from '@/helpers/userSesstion'

const Header = () => {
   
  return (
    <>
        <nav className='py-3 lg:py-4 bg-white'>
            <div className="container flex flex-row items-center justify-between">
                <Link href={'/'} className='inline-block'>
                    <Image
                        src={'/images/cinescope.webp'}
                        width={256} height={48}
                        alt='Logo' 
                        className='w-auto h-8'
                    />
                </Link>
                <ul className='flex flex-row items-center gap-4'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="">Genres</Link>
                    </li>
                    <li>
                        <Link href="/movies">Movies</Link>
                    </li>
                </ul> 
                <LoginWithTMBD />
            </div>
        </nav>
    
    </>
  )
}

export default Header