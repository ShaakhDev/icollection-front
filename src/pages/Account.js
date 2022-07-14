import { useEffect } from 'react'
import PageLayout from 'layout/PageLayout'
import { Button, OutlineButton } from 'components/button/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useGetUserProfileQuery } from 'redux'

const uId = localStorage.getItem('uId')

function Account() {
    const { data, isLoading } = useGetUserProfileQuery({ count: 5, id: uId });
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('uId');
        navigate('/')
    }



    return (
        <PageLayout>
            <div className='min-h-[90vh] px-16 text-dark  '>
                <UserDetails isLoading={isLoading} userData={data} />
                <MyCollections collections={data?.data.collections} />
                <div className='flex justify-center my-12'>
                    <Link to="/create-collection">
                        <Button text="+ CREATE NEW COLLECTION" additional="p-3 px-20 my-6 " />
                    </Link>
                </div>
                <div className='flex justify-center mb-12'>
                    <OutlineButton onClick={handleLogOut} text="Log out" additional="p-2 px-5" />
                </div>
            </div>
        </PageLayout>
    )
}


function UserDetails({ userData, isLoading }) {

    return (
        <>
            <h1 className='font-bold text-4xl mt-12 dark:text-white'>My Account Details </h1>
            <div className='text-dark divide-x  w-full bg-gray-400/60 dark:bg-dark-lighter p-5 my-5 rounded-xl grid grid-cols-5'>
                <DetailItem isLoading={isLoading} name="Username" value={userData?.data?.user_name} />
                <DetailItem isLoading={isLoading} name="Email" value={userData?.data?.user_email} />
                <DetailItem isLoading={isLoading} name="User ID" value={userData?.data?.id} />
                <DetailItem isLoading={isLoading} name="Role" value={userData?.data?.role} />
                <DetailItem isLoading={isLoading} name="Status" value={userData?.data?.status} />
            </div>
        </>
    )
}
function DetailItem({ name, value, isLoading }) {
    return (
        <div className=' pl-8 flex-column'>
            <h1 className='text-dark dark:text-gray-400'>{name}</h1>
            <strong className='dark:text-white text-dark/80 text-xl'>{isLoading ? "Loading..." : value}</strong>
        </div>
    )
}

function MyCollections({ collections }) {
    return (
        <>
            <h1 className='font-bold text-4xl mt-16 dark:text-white'>My Collections</h1>
            <div className='flex justify-start  overflow-x-auto py-8'>
                {collections?.length !== 0 ? collections?.map(item => <Card key={item.collection_id} collection={item} />) : <h1 className='text-dark dark:text-white'>Nothing has been created yet</h1>}

            </div>
        </>
    )
}
function Card({ collection }) {
    return (
        <div className='border border-solid mr-5 p-2 overflow-hidden border-x-gray-400/50 rounded-xl bg-gray-300 dark:bg-dark-lighter h-[17rem] min-w-[15rem] max-w-[15rem]'>
            <Link to={`/collection/${collection.collection_id}`}>
                <div className='w-full min-h-70 max-h-[150px] overflow-hidden rounded-lg'>
                    <img className='object-cover' src={collection?.image_url} alt="collection_img" />
                </div>
            </Link>
            <div className='text-white flex justify-between px-2'>
                <div>

                    <span className='text-sm text-dark-lighter/70 dark:text-gray-400'>Name</span>
                    <h1 className='text-sm font-bold dark:text-white text-dark'>{collection?.name}</h1>

                </div>
                <div>
                    <span className='text-sm text-dark-lighter/70 dark:text-gray-400'>Topic</span>
                    <h1 className='text-sm font-bold dark:text-white text-dark'>{collection?.topic}</h1>
                </div>


            </div>
            {/* <div className='text-white flex justify-between mt-5'>
                <span className='mx-2   px-4 border border-solid border-accent-color-2 hover:bg-accent-color-2 cursor-pointer  rounded-full'>Edit</span>
                <span className='mx-2  px-4 border border-solid  border-accent-color-2 hover:bg-accent-color-2 cursor-pointer rounded-full'>Delete</span>
            </div> */}
        </div>
    )
}

export default Account