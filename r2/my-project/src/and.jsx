import React from 'react'

export const Apps2 = ({ name, isPacked }) => {
    if (isPacked) {
        return <li>{name}  ✔</li>
    }
    return <li>{name} ❌</li>
}

const Apps = () => {
    return (
        <>
            <h1 className='font-bold text-3xl'>Sally Ride's Packing List</h1>
            <ul>
                <Apps2 name={'Space suit'} isPacked={true} />
                <Apps2 name={'Helmet with a golden leaf'} isPacked={true} />
                <Apps2 name={'Photo of Tam'} isPacked={false} />
            </ul>
        </>
    )
}
export default Apps