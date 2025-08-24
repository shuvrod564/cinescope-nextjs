// app/auth/callback/page.jsx
"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation"; 
import { useEffect, useState } from "react"; 

export default function CallbackPage() {
  const params = useSearchParams();
  const token = params.get("token");
  const [session, setSession] = useState(null);
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) return;

    const createSession = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ request_token: token }),
        }
      );
      const data = await res.json();
      if (!data.success) throw new Error("Failed to create session");
      setSession(data.session_id);
      login(data.session_id);
      router.push("/");
       
    };

    createSession();
  }, [token]);

  return (
    <div>
      {session ? (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-lg w-full p-5 lg:p-8 text-center bg-white shadow rounded-lg">
                    <Image
                        src={"/images/login-success.svg"}
                        width={256} height={256}
                        alt="Success"
                        className="mx-auto"
                    />
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">Login successful</h1>
                </div>
            </div> 
        </>
      ) : (
        <p>Logging in...</p>
      )}
    </div>
  );
}
