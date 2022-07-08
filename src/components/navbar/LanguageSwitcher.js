import React from 'react'

function LanguageSwitcher() {
    return (
        <div >
            <select className='outline-none text-dark transition duration-200 dark:text-white bg-white dark:bg-dark' name="language" id="language">
                <option value="en">English</option>
                <option value="uz">O'zbek</option>
            </select>
        </div>
    )
}

export default LanguageSwitcher