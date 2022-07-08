import { useState } from 'react'
import useDarkSide from 'hook/useDarkSide'
import { DarkModeSwitch } from 'react-toggle-dark-mode'


function ToggleTheme() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    }
    return (
        <div className=''>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={28}
            />
        </div>
    )
}

export default ToggleTheme