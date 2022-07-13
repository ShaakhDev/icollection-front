import React from 'react'

function CollectionItems() {
    return (
        <div className='dark:bg-dark-lighter mx-16 my-8 rounded-xl min-h-[30vh]'>
            <ItemsTable />
        </div>
    )
}



function ItemsTable() {
    return (
        <table id='itemsTable' className=''>
            <thead >
                <tr>
                    <th>ID</th>
                    <th >Name</th>
                    <th>Author</th>
                    <th>Created</th>
                    <th>Tags</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>q0cnov2</td>
                    <td>Item 1</td>
                    <td>Shakhzod</td>
                    <td>13.07.2022</td>
                    <td>
                        <span className='cursor-pointer hover:bg-accent-color-2/70 rounded-full border border-accent-color-2 mr-1 px-2 text-white/60'>stamp</span>
                        <span className='cursor-pointer hover:bg-accent-color-2/70 rounded-full border border-accent-color-2 mr-1 px-2 text-white/60'>hobby</span>
                        <span className='cursor-pointer hover:bg-accent-color-2/70 rounded-full border border-accent-color-2 mr-1 px-2 text-white/60'>amazing</span>
                    </td>
                    <td>
                        <button className='mr-1  px-1 bg-red/70 text-gray-200 rounded-full'>delete</button>
                        <button className='mr-1  px-1 bg-green/50 text-gray-200 rounded-full'>edit</button>
                    </td>
                </tr>
                <tr>
                    <td>mkdq894</td>
                    <td>Item 2</td>
                    <td>Shakhzod</td>
                    <td>13.07.2022</td>
                    <td>
                        <span className='cursor-pointer rounded-full border hover:bg-accent-color-2/70  border-accent-color-2 mr-1 px-2 text-white/60'>stamp</span>
                        <span className='cursor-pointer rounded-full border hover:bg-accent-color-2/70  border-accent-color-2 mr-1 px-2 text-white/60'>hobby</span>
                        <span className='cursor-pointer rounded-full border hover:bg-accent-color-2/70  border-accent-color-2 mr-1 px-2 text-white/60'>amazing</span>
                        <span className='cursor-pointer rounded-full border hover:bg-accent-color-2/70  border-accent-color-2 mr-1 px-2 text-white/60'>collection</span>
                    </td>
                    <td>
                        <button className='mr-1  px-1 bg-red/70 text-gray-200 rounded-full'>delete</button>
                        <button className='mr-1  px-1 bg-green/50 text-gray-200 rounded-full'>edit</button>
                    </td>
                </tr>
                <tr>

                </tr>
            </tbody>
        </table>
    )
}
export default CollectionItems