import { Button } from 'components/button/Button'
import React from 'react'
import { isLoggedIn } from 'private/isloggedIn'
import { useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()
    const handleCreateButton = () => {
        isLoggedIn() ? navigate('/create-collection') : navigate('/login')
    }
    return (
        <div className='flex   px-16 justify-between h-screen items-center'>
            <div className='flex-column  h-100  flex-3'>
                <h1 className='transition duration-200 font-bold text-6xl text-dark dark:text-white'>Create your own collection and manage them.</h1>
                <p className='transition duration-200 text-dark dark:text-white text-lg py-4'>Your collections - your <span className='text-accent-color-1'>Wealth!</span></p>
                <Button onClick={handleCreateButton} text="CREATE NOW" additional="p-2 px-10" />
            </div>
            <div className='flex-4  transition duration-200 bg-accent-color-2/70 rounded-full backdrop-filter backdrop-blur-md '>
                <img className='w-10/12 m-auto   ' src="/header.png" alt="header" />
            </div>
        </div>
    )
}

export default Header