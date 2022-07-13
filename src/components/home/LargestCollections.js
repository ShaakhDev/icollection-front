import { useEffect, useState } from 'react'
import { useGetMostPopularCollectionsQuery } from 'redux'


function LargestCollections() {
    const { data, loading, error } = useGetMostPopularCollectionsQuery(1);
    const [largestCollections, setLargestCollections] = useState([]);
    useEffect(() => {
        console.log('data', data)
        if (data) {
            const sorted = [...data.data].sort((a, b) => b.items.length - a.items.length).slice(0, 5);
            setLargestCollections(sorted);
        }
        console.log('largestCollections', largestCollections)
    }, [data])

    return (
        <div className='px-16 py-8'>
            <h1 className='text-dark mb-8 dark:text-white font-bold text-4xl'>The most popular Collections</h1>
            <Layout items={largestCollections} />
        </div>
    )
}



function Layout({ items }) {
    console.log(items)
    return (
        <div className='grid grid-cols-3 mb-8 gap-8 w-8/12 m-auto'>
            {
                items.map((item, index) =>
                    <Card key={item.collection_id} collection={item} span={index === 0 || index === 4 ? 'col-span-3' : ""} />
                )
            }
        </div>
    )
}

function Card({ span, collection }) {
    return (
        <div className={`border text-white/100 group border-solid relative border-gray-400/80 rounded-md max-h-[10rem] min-h-[10rem] overflow-hidden  cursor-pointer ${span}`} >
            <div style={{ "backgroundImage": `url('${collection.image_url}')` }} className={`w-full h-full bg-no-repeat bg-cover bg-center transition duration-300 group-hover:scale-105`}></div>
            <div className='w-full h-full    absolute transition duration-300 z-10 top-0 left-0 group-hover:bg-dark/50'>
                <div className='absolute opacity-0 p-3  transition duration-300  bottom-0 left-2  group-hover:opacity-100 z-12'>
                    <h1 className='font-bold text-2xl'>{collection.name}</h1>
                    <p>{collection.author_name}</p>
                </div>
            </div>

        </div>
    )
}

export default LargestCollections