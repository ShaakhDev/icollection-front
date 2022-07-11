import Logo from 'components/navbar/Logo'
import React from 'react'

function Footer() {
    return (
        <footer className='w-full min-h-[10vh] px-16 py-8  text-white bg-dark-lighter flex justify-around items-center align-baseline'>
            <Logo textColor="text-white" />
            Copyright &copy; {new Date().getFullYear()}
        </footer>
    )
}

export default Footer