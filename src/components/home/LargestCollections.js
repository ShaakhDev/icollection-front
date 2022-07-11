import React from 'react'

function LargestCollections() {
    return (
        <div className='px-16 py-8'>
            <h1 className='text-dark mb-8 dark:text-white font-bold text-4xl'>The most popular Collections</h1>
            <Layout />
        </div>
    )
}


function Layout() {
    return (
        <div className='grid grid-cols-3 mb-8 gap-8 w-8/12 m-auto'>
            <Card span="col-span-3" />
            <Card />
            <Card />
            <Card />
            <Card span="col-span-3" />
        </div>
    )
}

function Card({ span }) {
    return (
        <div className={`border text-white/100 group border-solid relative border-gray-400/80 rounded-md max-h-[10rem] min-h-[10rem] overflow-hidden  cursor-pointer ${span}`} >
            <div className="w-full h-full bg-[url('/public/img/bg.jpg')] bg-no-repeat bg-cover bg-center transition duration-300 group-hover:scale-105"></div>
            <div className='w-full h-full    absolute transition duration-300 z-10 top-0 left-0 group-hover:bg-dark/50'>
                <div className='absolute opacity-0 p-3  transition duration-300  bottom-0 left-2  group-hover:opacity-100 z-12'>
                    <h1 className='font-bold text-2xl'>Collection name</h1>
                    <p>Author</p>
                </div>
            </div>

        </div>
    )
}

export default LargestCollections