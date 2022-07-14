import { GetDate } from 'lib/getDate';
import { useState, useEffect } from 'react'
import { useCreateItemMutation } from 'redux'


function CollectionItems({ collectionId, items }) {
    const [itemName, setItemName] = useState('')
    const [author, setAuthor] = useState('')
    const [tags, setTags] = useState([])

    const [createItem, { data, isSuccess }] = useCreateItemMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        createItem({
            name: itemName,
            author: author,
            tags: tags,
            collection_id: collectionId,
        })
    }


    const handleItemName = (e) => {
        setItemName(e.target.value)
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleTags = (e) => {
        const tags = e.target.value.split(' ')
        setTags(tags)
    }

    useEffect(() => {
        if (isSuccess) {
            setItemName('')
            setAuthor('')
            setTags('')
        }

    }, [data, isSuccess])




    return (
        <div className='dark:bg-dark-lighter mx-16 my-8 rounded-xl min-h-[30vh]'>
            <ItemsTable items={items} />
            <div className='grid grid-cols-2 px-12'>
                <div>
                    <label className='dark:text-white/70 mx-2' htmlFor="name">Item name</label>
                    <input onChange={handleItemName} className='mx-1 place-self-start rounded-md p-1 my-2 dark:text-dark block' placeholder='Item name' name="name" type="text" />
                </div>

                <div>
                    <label className='dark:text-white/70 mx-2' htmlFor="author">Author</label>
                    <input onChange={handleAuthor} className='mx-1 place-self-start rounded-md p-1 my-2 dark:text-dark block' placeholder='Author' name="author" type="text" />

                </div>

                <div>
                    <label className='dark:text-white/70 mx-2' htmlFor="tags">Tags</label>
                    <input onChange={handleTags} className='mx-1 place-self-start rounded-md p-1 my-2 dark:text-dark block' placeholder='Tags' name="tags" type="text" />

                </div>
                <button onClick={handleSubmit} className=' place-self-start border border-accent-color-2 rounded-full dark:text-white px-8 p-2 m-4'>Add item</button>
            </div>
        </div>
    )
}



function ItemsTable({ items }) {
    return (
        <table id='itemsTable' className='text-dark '>
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
            <tbody className='text-dark dark:text-white/70'>
                {
                    items?.map(item => {
                        return (
                            <tr className='hover:bg-dark-lighter/70 hover:text-white transition duration-200 cursor-pointer' key={item.item_id}>
                                <td>{item.item_id}</td>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>{GetDate(item.date)}</td>
                                <td>
                                    {item.tags?.map((tag, index) => {
                                        return (
                                            <span key={index} className='cursor-pointer hover:bg-accent-color-2/70 rounded-full border border-accent-color-2 mr-1 px-2  dark:text-white/60'>{tag}</span>
                                        )
                                    })}

                                </td>
                                <td>
                                    <button className='mr-1  px-1 bg-red/70 text-gray-200 rounded-full'>delete</button>
                                    <button className='mr-1  px-1 bg-green/50 text-gray-200 rounded-full'>edit</button>
                                </td>
                            </tr>
                        )
                    })
                }

                <tr>

                </tr>
            </tbody>
        </table>
    )
}
export default CollectionItems