import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Axios_Get = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((responce) => { setData(responce.data) })
    }, [])

    return (
        <div className='grid grid-cols-2'>
            {
                data.map(item => {
                    return (
                        <div className='border border-black' key={item.id}>
                            <h1>{item.title}</h1>
                            <h1>{item.price}</h1>
                            <h1>{item.category}</h1>
                            <img src={item.image} alt="" className='h-[200px] py-10' />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Axios_Get