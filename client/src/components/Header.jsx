import { Link } from "react-router-dom"

export default function Header() {
    return(
        <div className='bg-sky-300'>
            <div className='flex justify-between max-w-6xl mx-auto items-center p-4'>
            <Link to='/'>

<h1>Auth App</h1>
</Link>
            <ul className='flex gap-4'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/profile'><li>Profile</li></Link>

                <Link to='/sign-up'><li>SignUp</li></Link>

            </ul>
            </div>
           
        </div>
    )
}