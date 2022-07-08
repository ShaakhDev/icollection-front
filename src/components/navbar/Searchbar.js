import React from 'react'

function Searchbar() {
    return (
        <div>
            <label className='text-dark dark:text-white flex justify-between border  rounded-full p-2' htmlFor="searchbar">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input className='dark:bg-dark ' type="text" id='searchbar' />
            </label>
        </div>
    )
}

export default Searchbar