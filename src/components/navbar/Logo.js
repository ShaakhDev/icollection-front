import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {

    return (
        <Link to="/">
            <div className='text-dark transition duration-200 dark:text-white'>
                iCollection
            </div>
        </Link>
    )
}

export default Logo