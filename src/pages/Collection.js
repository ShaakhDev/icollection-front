import { useEffect } from 'react'
import PageLayout from 'layout/PageLayout'
import { useParams } from 'react-router-dom'
import { useGetCollectionByIdQuery } from 'redux'
import { GetDate } from 'lib/getDate'
import CollectionItems from 'components/collection/CollectionItems'

function Collection() {
    const params = useParams()
    const { collection_id } = params
    const { data, isSuccess, isError, error, isLoading } = useGetCollectionByIdQuery({ collection_id })
    console.log(collection_id)

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
            <div className='flex justify-between  bg-gray-200 dark:bg-dark-lighter rounded-xl p-4 mx-16 my-12'>
                <div className='shrink-0 w-3/5'>
                    <img className='w-full rounded-lg' src={data?.data.image_url} alt="collection" />
                </div>
                <div className='w-2/5 pl-12  dark:text-white text-dark'>
                    <h1 className='text-xl mb-3'><span className='block text-gray-400'>Name </span> {data?.data.name}</h1>
                    <h1 className='text-xl mb-3'><span className='block text-gray-400'>Description </span>{data?.data.description}</h1>
                    <h1 className='text-xl mb-3'><span className='block text-gray-400'>Author</span>{data?.data.author_name}</h1>
                    <h1 className='text-xl mb-3'><span className='block text-gray-400'>Topic </span>{data?.data.topic}</h1>
                    <h1 className='text-xl mb-3'><span className='block text-gray-400'>Created </span>{GetDate(data?.data.date)}</h1>
                    <h1 className='text-xl mb-3'><span className='block text-gray-400'>Modified </span>{GetDate(data?.data.updated_at)}</h1>
                </div>
            </div>
            <h1 className='transition duration-300 text-4xl dark:text-white text-dark font-bold px-16 my-12'>Collection Items</h1>
            <CollectionItems />
        </PageLayout>
    )
}

export default Collection