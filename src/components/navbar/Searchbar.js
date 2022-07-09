import React from 'react'

function Searchbar() {
    return (
        <div  >
            <label className='transition duration-200 focus-within:outline focus-within:outline-accent-color-2 text-dark dark:text-white flex justify-between border border-secondary-color rounded-full p-2' htmlFor="searchbar">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input placeholder='Search by item or collection' className='dark:bg-dark outline-none transition duration-200' type="text" id='searchbar' />
            </label>
        </div>
    )
}

export default Searchbar