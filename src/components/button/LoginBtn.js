import React from 'react'
import { Link } from 'react-router-dom'

function LoginBtn() {

    return (
        <Link to='/login' >
            <button className='bg-gradient-to-r from-accent-color-2 to-accent-color-1 text-white hover:bg-accent-color-2 p-2 px-5 mx-3 rounded-full'>
                Login
            </button>
        </Link>
    )
}

export default LoginBtn