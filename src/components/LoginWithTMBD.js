'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';

const LoginWithTMBD = () => {
    const [session_id, setSession_id] = useState(null);
    console.log('session_id', session_id);
     
    useEffect(() => {
        const stored_id = localStorage.getItem("tmdb_session") || null;
        setSession_id(stored_id);
    }, []);

    return (
        <>
        {
            session_id ? (
                <button
                    type='button'
                    onClick={() => localStorage.removeItem("tmdb_session")}
                    className='px-4 py-2 inline-flex items-center gap-2 text-white bg-amber-600 rounded-full font-semibold hover:bg-amber-500'
                >
                    <span>Logout</span>
                </button>
            ) : ( 
                <Link
                    href={`/login`}
                    className='px-4 py-2 inline-flex items-center gap-2 text-white bg-amber-600 rounded-full font-semibold hover:bg-amber-500'
                >
                    <span>Login with TMBD</span>
                </Link>
            )
        }
        </>
    )
}

export default LoginWithTMBD