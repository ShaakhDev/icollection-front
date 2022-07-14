import { GetDate } from 'lib/getDate'
import { useGetLastAddedItemsQuery } from 'redux'

function LastItems() {
    const { data } = useGetLastAddedItemsQuery(1)


    return (
        <div className='px-16 pb-8'>
            <h1 className='font-bold mb-8 text-4xl text-dark dark:text-white'>Last added Items</h1>
            <Table data={data} />
        </div>
    )
}


function Table({ data }) {


    return (
        <table id='homeTable' className=' dark:text-white/60
        0 dark:bg-dark-lighter text-xl my-8'>
            <thead >
                <tr>
                    <th >Name</th>
                    <th>Created</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.map(item => {
                    return (
                        <tr key={item.item_id} className='cursor-pointer hover:bg-dark-lighter/50 hover:text-white/90 transition duration-200'>
                            <td>{item.name}</td>
                            <td>{GetDate(item.date)}</td>
                            <td>{item.author}</td>
                        </tr>
                    )
                })}
                <tr className='bg-dark'></tr>
            </tbody>
        </table>
    )
}

export default LastItems