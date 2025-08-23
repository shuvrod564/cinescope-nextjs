"use client";

import { useFormState, useFormStatus } from "react-dom";
import { searchMovie } from "./actions"; 
import Image from "next/image";
import Link from "next/link";

export default function Page() {
     
    // form state: first arg = server action, second arg = initial state
    const [state, formAction] = useFormState(searchMovie, { results: [] });
    // console.log(state.results.description);


    return (
        <div className="font-sans">
            <div className="flex justify-center container mx-auto pt-7"> 
                <div className="max-w-xl bg-white border border-slate-200 shadow rounded-lg w-full p-8">
                    <h1 className="text-lg font-bold">Search your favorite movie here</h1>

                    {/* Form */}
                    <form action={formAction} className="flex gap-4 mt-8">
                        <input
                            type="text"
                            name="search"
                            placeholder="Type movie name..."
                            className="w-full h-12 border border-slate-200 rounded-lg px-4"
                        />
                        <SubmitButton />
                    </form>

                </div>
            </div>
            {/* Results */}
            <div className="container py-12 mx-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {state.results.description?.map((movie, index) => (
                        <li key={index} className="">
                            <div className="bg-white rounded-lg shadow-sm relative overflow-hidden text-white group"> 
                                <Image
                                    src={movie["#IMG_POSTER"]}
                                    alt={movie["#TITLE"]}
                                    width={200}
                                    height={300}
                                    className="rounded-lg w-full object-contain duration-300 group-hover:scale-y-125  group-hover:scale-x-135"
                                />
                               
                               <div className="p-3 absolute bottom-0 start-0 duration-300 bg-white/5 backdrop-blur-xl w-full group-hover:bg-white/10 group-hover:backdrop-blur-xs">
                                    <div className="flex gap-x-4 text-xs font-light">
                                        <span>{movie["#YEAR"]}</span>
                                        <span>{movie["#RANK"]}</span>
                                    </div>
                                    <h3 className="text-sm sm:text-base md:text-lg font-medium leading-[1.2] min-h-10">
                                        {movie["#TITLE"]}
                                    </h3>
                                    <p className="text-xs">Rank: {movie["#RANK"]}</p>
                                    <Link href={`/movies/${movie["#IMDB_ID"]}`} className="px-4 py-3 bg-amber-600 text-white rounded-lg font-semibold">Details</Link>
                               </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}


// 🟡 Separate submit button (shows loading state)
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-3 bg-amber-600 text-white rounded-lg font-semibold"
    >
      {pending ? "Searching..." : "Search"}
    </button>
  );
}