import React from 'react'

function Button({ additional, text }) {
    return (
        <button className={`text-white dark:text-white bg-gradient-to-r from-accent-color-2 to-accent-color-1 hover:from-accent-color-2 hover:to-accent-color-2 transition duration-1000 rounded-full ${additional}`}>{text}</button>
    )
}

function OutlineButton({ additional, text }) {
    return (
        <button className={`text-dark dark:text-white bg-transparent border border-accent-color-2 transition duration-200 border-solid p-2 px-4 rounded-full ${additional}`}>{text}</button>
    )
}
export { Button, OutlineButton }