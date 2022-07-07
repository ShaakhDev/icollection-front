import React from 'react'

function FormWrapper({ children, handleSubmit }) {
    return (
        <div className='border border-gray-200 border-solid p-8 py-15 shadow-lg shadow-gray-200 rounded-lg '>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    )
}

export default FormWrapper