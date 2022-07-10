import React from 'react'
import Navbar from 'components/navbar/Navbar'

function PageLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default PageLayout