import { Button } from 'components/button/Button'
import React from 'react'

function Header() {
    return (
        <div className='flex   px-16 justify-between h-screen items-center'>
            <div className='flex-column  h-100  flex-1'>
                <h1 className='transition duration-200 font-bold text-6xl text-dark dark:text-white'>Create your own collection and manage them.</h1>
                <p className='transition duration-200 text-dark dark:text-white text-lg py-4'>Your collections - your <span className='text-accent-color-1'>Wealth!</span></p>
                <Button text="Create" additional="p-2 px-10" />
            </div>
            <div className='flex-1  transition duration-200 bg-accent-color-2/70 rounded-full backdrop-filter backdrop-blur-md '>
                <img className='w-10/12 m-auto   ' src="/header.png" alt="header" />
            </div>
        </div>
    )
}

export default Header