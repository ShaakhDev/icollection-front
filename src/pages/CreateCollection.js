import { useState, useEffect } from 'react'
import PageLayout from 'layout/PageLayout'
import { useCreateCollectionMutation } from 'redux'


function CreateCollection() {
    const [createCollection, { data, isSuccess, isError, error, isLoading }] = useCreateCollectionMutation()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [topic, setTopic] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const handleTopic = (e) => {
        setTopic(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = new FormData()
        obj.append('name', name)
        obj.append('description', description)
        obj.append('image', image)
        obj.append('topic', topic)
        obj.append('user_id', localStorage.getItem('uId'))
        console.log(obj)
        createCollection(obj)
        // console.log(data)
    }

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            console.log(error)
        }
    }, [isError])

    return (
        <PageLayout>
            <h1 className='transition duration-200 text-dark dark:text-white text-4xl font-bold  py-12 px-16'>Collection details</h1>

            <div className='transition duration-200 min-h-[60vh] h-auto grid grid-cols-2 px-16 w-12/10 mx-16 mb-12 py-8 rounded-xl border border-solid border-gray-400/50 dark:bg-dark-lighter/50 bg-gray-200'>
                <div className='px-10'>
                    <label className='transition duration-200 block  text-dark dark:text-white' htmlFor="create">CREATE COLLECTION </label>
                    <input className='border border-solid border-gray-400/70 w-full rounded-md p-2 mt-2' onChange={handleName} type="text" id='create' placeholder='Collection name' />
                </div>
                <div className='px-10'>
                    <label className='transition duration-200 block text-dark dark:text-white' htmlFor="description">DESCRIPTION</label>
                    <textarea className='border border-solid border-gray-400/70 w-full rounded-md p-2 mt-2' onChange={handleDescription} type="text" id='description' placeholder='Describe your collection' />
                </div>
                <div className='px-10'>
                    <label className='transition duration-200 block text-dark dark:text-white' htmlFor="image">COLLECTION IMAGE</label>
                    <input className='border border-solid border-gray-400/70 bg-white text-dark dark:text-white rounded-md mt-2' onChange={handleImage} type="file" id='image' />
                </div>
                <div className='px-10'>
                    <label className='transition duration-200 block text-dark dark:text-white' htmlFor="topics">TOPICS</label>
                    <select className='border border-solid border-gray-400/70 bg-white transition duration-200 w-full rounded-md mt-2' onChange={handleTopic} defaultValue="books" name="topic" id="topics">
                        <option value="books">Books</option>
                        <option value="stamps">Stamps</option>
                        <option value="portraits">Portraits</option>
                        <option value="coins ">Coins</option>
                        <option value="watches">Watches</option>
                        <option value="paintings">Paintings</option>
                    </select>
                </div>
                <button className='col-span-2 rounded-full max-h-[3rem] font-bold text-xl text-white bg-gradient-to-t active:opacity-80 transition duration-200 from-accent-color-1 to-accent-color-2 ' onClick={handleSubmit}>Create</button>
            </div>
        </PageLayout>
    )
}

export default CreateCollection