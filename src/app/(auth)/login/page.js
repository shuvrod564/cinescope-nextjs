'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Login() {
    const [token, setToken] = useState(null);
    // console.log(token, 'setToken');
     
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await fetch('/api/auth/token');
                const data = await res.json();
                setToken(data.request_token);
                // console.log('token', data.request_token);
            } catch (error) {
                console.log('token error', error);
            }
        };

        fetchToken();
              
    }, []);


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-lg bg-white rounded-lg border p-5 md:py-12 text-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <p className="mb-4 text-gray-400">Please log in to continue.</p>
                <Link
                    href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.NEXT_PUBLIC_APP_URL}/callback?token=${token}`}
                className="bg-slate-50 hover:bg-slate-100 text-black font-semibold py-4 px-4 gap-4 rounded-lg inline-flex items-center flex-col">
                    Log in with 
                    <Image 
                        src="/images/tmdb-logo.svg"
                        width={100}
                        height={100}
                        alt="TMDB Logo"
                        className="w-auto h-8"
                    />
                </Link>

            </div>
        </div>
    )
}