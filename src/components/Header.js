'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react' 
import { useAuth } from '@/context/AuthContext'
import { LogIn, LogOut } from 'lucide-react';

const Header = () => {
    const {session, logout} = useAuth();
    console.log('stroed session id: ', session);
    
   
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
                {
                    session ? (
                        <button
                            type='button'
                            onClick={logout}
                            className='px-4 py-2 inline-flex items-center gap-1 text-white bg-amber-600 rounded-full font-medium hover:bg-amber-500'
                        >
                            <LogOut className='size-4.5' />
                            <span>Logout</span>
                        </button>
                    ) : (
                        <Link
                            href={`/login`}
                            className='px-4 py-2 inline-flex items-center gap-2 text-white bg-amber-600 rounded-full font-semibold hover:bg-amber-500'
                        >
                            <LogIn className='size-4.5' />
                            <span>Login</span>
                        </Link>
                    )
                } 
            </div>
        </nav>
    
    </>
  )
}

export default Header