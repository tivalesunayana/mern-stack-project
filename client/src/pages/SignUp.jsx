import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUp(){
    return(
        <div className='p-5 max-w-lg mx-auto'>
            <h1 className='text-xl font-semibold text-center my-6'>Sign Up</h1>
        <form className='flex flex-col gap-4'>
            <input type='text' placeholder='username' id='username' className='bg-red-300 rounded p-3 text-black '/>
            <input type='email' placeholder='email' id='email'  className='bg-red-300 rounded p-3' />

            <input type='password' placeholder='password' id='password'  className='bg-red-300 rounded p-3 text-black '/>
<button className='p-3 bg-green-400 rounded hover:opacity-95 disabled:opacity-80'>Sign Up</button>
        </form>
        <div className='flex gap-4 mt-5'>
            <p>Have an account ? </p>
            <Link to="/sign-in"><span className='text-blue-500'>Sign In</span></Link>
        </div>
        </div>
    )
}

