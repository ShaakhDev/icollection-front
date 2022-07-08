import React from 'react'
import PrivateSection from 'private/PrivateSection'
import LoginBtn from '../button/LoginBtn'
import SignupBtn from '../button/SignupBtn'
import { isLoggedIn } from 'private/isloggedIn'
import Logo from 'components/navbar/Logo'
import Searchbar from 'components/navbar/Searchbar'
import ToggleTheme from './ToggleTheme'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
    return (
        <>
            <nav className='dark:text-white flex justify-between w-100 px-8 py-8'>
                <Logo />
                <Searchbar />
                <div className='flex'>
                    <ToggleTheme />
                    <LanguageSwitcher />
                    <AuthButtons />
                </div>
            </nav>
        </>
    )
}

const AuthButtons = () => {
    return (
        <>
            {
                isLoggedIn() ? (
                    <>
                        <LoginBtn />
                        <SignupBtn />
                    </>
                ) : null
            }
        </>
    )
}

export default Navbar