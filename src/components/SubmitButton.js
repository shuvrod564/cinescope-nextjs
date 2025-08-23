'use client'
import React from 'react'  
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
const SubmitButton = ({ pending } ) => {
    // const { pending } = useFormStatus();

  return (
    <>
        <button 
            type='submit' 
            disabled={pending}
            className='px-4 py-3 bg-amber-600 text-white rounded-lg font-semibold'
        >
            {pending ? "Searching..." : "Search"}
        </button>
    </>
  )
}

export default SubmitButton


