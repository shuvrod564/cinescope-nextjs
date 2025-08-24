'use client';

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
            <div className="w-full max-w-lg bg-white rounded-lg border p-5 text-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <p className="mb-4">Please log in to continue.</p>
                <Link
                    href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.NEXT_PUBLIC_APP_URL}/callback?token=${token}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                    Log in
                </Link>

            </div>
        </div>
    )
}