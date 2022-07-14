import { useGetAllItemsTagsQuery } from 'redux'


function Tags() {
    const { data } = useGetAllItemsTagsQuery(1)


    return (
        <div className='px-16 py-12'>
            <h1 className='font-bold mb-8 text-4xl text-dark dark:text-white'>Tags</h1>
            <Cloud tags={data} />
        </div>
    )
}

function Cloud({ tags }) {
    return (
        <div>
            {tags?.data?.map((item, index) => {
                return <Item key={index} text={item} />
            })}
        </div>
    )
}

const Item = ({ text }) => {
    return (
        <span className='px-4 transition duration-200 text-2xl py-1 border border-solid rounded-full border-accent-color-2 mx-2 text-accent-color-2 hover:text-white dark:text-white cursor-pointer hover:bg-accent-color-2'>{text}</span>
    )
}
export default Tags