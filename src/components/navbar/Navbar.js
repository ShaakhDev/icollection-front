import React from 'react'
import PrivateSection from 'private/PrivateSection'
import LoginBtn from '../button/LoginBtn'
import SignupBtn from '../button/SignupBtn'
import { isLoggedIn } from 'private/isloggedIn'
import Logo from 'components/navbar/Logo'
import Searchbar from 'components/navbar/Searchbar'
import ToggleTheme from './ToggleTheme'
import LanguageSwitcher from './LanguageSwitcher'
import { Button, OutlineButton } from 'components/button/Button'
function Navbar() {
    return (
        <>
            <nav className='dark:text-white flex justify-between items-center w-100 max-w-full px-16 py-8'>
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
                isLoggedIn() ? (<Button text="My account" additional="p-2 px-4" />) : (
                    <>
                        <Button text="Login" additional="p-2 px-5 mx-2" />
                        < OutlineButton text="Sing Up" additional="p-2 px-5" />
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