import React from 'react'
import { isLoggedIn } from './isloggedIn'


function PrivateSection({ children }) {

    return (
        <>
            {
                isLoggedIn() ? children : (null)
            }
        </>
    )
}

export default PrivateSection