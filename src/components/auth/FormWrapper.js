import React from 'react'

function FormWrapper({ children, handleSubmit }) {
    return (
        <div className=' dark:bg-dark-lighter bg-white border border-solid border-gray-300 shadow-md dark:border-none p-8 py-15  rounded-lg '>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    )
}

export default FormWrapper