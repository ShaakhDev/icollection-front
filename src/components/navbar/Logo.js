import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {

    return (
        <Link to="/">
            <div className='text-dark text-3xl font-bold transition duration-200 dark:text-white'>
                <span className='bg-gradient-to-r from-accent-color-2 to-accent-color-1 text-white p-1 pl-7 pr-3 mr-1 rounded-full'>i</span>
                Collection
            </div>
        </Link>
    )
}

export default Logo