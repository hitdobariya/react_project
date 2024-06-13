import React from 'react'
import { Navbar } from './Component/Navbar'
import { Tables } from './Component/Tables'

const AllComponent = () => {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <Navbar />
            <div className='w-screen mt-20'>
            <Tables />
            </div>
        </div>
    )
}

export default AllComponent
