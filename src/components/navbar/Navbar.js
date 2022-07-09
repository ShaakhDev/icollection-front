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
            <nav className='dark:text-white flex justify-between items-center w-100 max-w-full px-8 py-8'>
                <Logo />
                <Searchbar />
                <Wrapper>
                    <ToggleTheme />
                    <LanguageSwitcher />
                    <AuthButtons />
                </Wrapper>
            </nav>
        </>
    )
}

const AuthButtons = () => {
    return (
        <>
            {
                isLoggedIn() ? null : (
                    <>
                        <LoginBtn />
                        <SignupBtn />
                    </>
                )
            }
        </>
    )
}


const Wrapper = ({ children }) => {
    return (
        <div className='flex items-center justify-between '>
            {children}
        </div>
    )
}

export default Navbar