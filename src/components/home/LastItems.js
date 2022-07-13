import React from 'react'

function LastItems() {
    return (
        <div className='px-16 pb-8'>
            <h1 className='font-bold mb-8 text-4xl text-dark dark:text-white'>Last added Items</h1>
            <Table />
        </div>
    )
}


function Table() {
    return (
        <table id='homeTable' className=' dark:text-white/6
        0 dark:bg-dark-lighter text-xl my-8'>
            <thead >
                <tr>
                    <th >Name</th>
                    <th>Collection</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Item 1</td>
                    <td>Collection 1</td>
                    <td>Author 1</td>
                </tr>
                <tr>
                    <td>Item 2</td>
                    <td>Collection 2</td>
                    <td>Author 2</td>
                </tr>
                <tr>
                    <td>Item 3</td>
                    <td>Collection 3</td>
                    <td>Author 3</td>
                </tr>
                <tr className='bg-dark'></tr>
            </tbody>
        </table>
    )
}

export default LastItems