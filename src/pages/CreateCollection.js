import { useState, useEffect } from 'react'
import PageLayout from 'layout/PageLayout'
import { useCreateCollectionMutation } from 'redux'
import { useNavigate } from 'react-router-dom'
import Notification from 'components/Notification'

function CreateCollection() {

    const navigate = useNavigate()
    const uId = localStorage.getItem('uId')
    const [createCollection, { data, isSuccess, isError, error, isLoading }] = useCreateCollectionMutation()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [topic, setTopic] = useState('')
    const [notification, setNotification] = useState({
        isActive: false,
        message: null,
        type: ""

    })
    const [customFields, setCustomFields] = useState([])


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

    const handleCustomFieldChange = (e, index) => {
        const { name, value } = e.target
        const list = [...customFields];
        list[index][name] = value;
        setCustomFields(list)
    }

    const handleCustomFieldAdd = () => {
        setCustomFields([...customFields, { fieldType: "", fieldName: '' }])
    }

    const handleCustomFieldRemove = index => {
        const list = [...customFields]
        list.splice(index, 1)
        setCustomFields(list)
    }




    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', name)
        formData.append('description', description,)
        formData.append('topic', topic)
        formData.append('image', image, image?.name);
        formData.append('user_id', uId)
        formData.append('custom_fields', JSON.stringify(customFields))
        await createCollection(formData)

    }

    useEffect(() => {
        if (isSuccess) {
            navigate(`/collection/${data?.data.collection_id}`)
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            setNotification({
                isActive: true,
                message: error?.data.message,
                type: "error"
            })

        }
        setTimeout(() => {
            setNotification({
                isActive: false,
                message: null,
                type: null
            })
        }, 3000)
    }, [isError])


    const getConsole = () => {
        console.log(customFields)
    }
    return (
        <PageLayout>
            {notification.isActive && (
                <Notification type={notification.type} setNotification={setNotification} message={notification.message} />
            )}
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
                    <input className='border border-solid border-gray-400/70 bg-white text-dark rounded-md mt-2' onChange={handleImage} type="file" id='image' />
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
                {
                    customFields.map((field, index) => {
                        return (
                            <div key={index} className='px-10'>
                                <select name="fieldType" onChange={e => handleCustomFieldChange(e, index)} value={field.fieldType}>
                                    <option selected='selected' value="null">Choose type</option>
                                    <option value="string">Text</option>
                                    <option value="number">Number</option>
                                    <option value="date">Date</option>
                                    <option value="boolean">Yes/No</option>
                                    <option value="textarea">Multiline textarea</option>
                                </select>
                                <input onChange={(e) => handleCustomFieldChange(e, index)} value={field.fieldName} type="text" name="fieldName" placeholder="Field name" />
                                <button onClick={() => handleCustomFieldRemove(index)} className='dark:text-white'>Remove field</button>
                            </div>
                        )
                    })
                }
                <button onClick={handleCustomFieldAdd} className='border col-span-2 place-self-center p-1 px-8 text-dark dark:text-white rounded-full border-accent-color-2 hover:bg-accent-color-2 hover:text-white transition duration-200 ' >Add field</button>
                <button className={`col-span-2 rounded-full max-h-[3rem]  text-xl text-white  active:opacity-80 transition duration-200  ${isLoading ? "bg-gray-400/50" : "bg-gradient-to-t from-accent-color-1 to-accent-color-2"} `} onClick={handleSubmit}>{isLoading ? 'SENDING...' : "CREATE"}</button>
                <button onClick={getConsole}>console</button>
            </div>
        </PageLayout>
    )
}


const CustomField = () => {

    return (
        <div className='px-10'>
            <select name="customField">
                <option value="string">Text</option>
                <option value="number">Number</option>
                <option value="date">Date</option>
                <option value="boolean">Yes/No</option>
                <option value="textarea">Multiline textarea</option>
            </select>
            <input type="text" name="" placeholder="Field name" />
            <button className='dark:text-white'>Remove field</button>
        </div>
    )
}
export default CreateCollection