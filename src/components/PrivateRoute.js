import React from 'react'

function PrivateWrapper({ children }) {
    const token = window.localStorage.getItem('_token');
    return (
        <>
            {token ? children : null}
        </>
    )
}

export default PrivateWrapper