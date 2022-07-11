import React from 'react'
import { isLoggedIn } from './isloggedIn'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {

    return (
        <>
            {isLoggedIn() ? children : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoute