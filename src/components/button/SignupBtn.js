import React from 'react'
import { Link } from 'react-router-dom'

function SignupBtn() {

    return (
        <Link to="/signup">
            <button className='transition duration-200 border border-accent-color-2  border-solid p-2 px-4 rounded-full'>
                Sign Up
            </button>
        </Link>
    )
}

export default SignupBtn