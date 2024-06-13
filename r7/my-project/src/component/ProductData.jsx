import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProductData = () => {
    const [data, setdata] = useState([])
    const [show, setShow] = useState([false])

    useEffect(() => {
            axios.get('https://fakestoreapi.com/products')
                .then(responce => setdata(responce.data))
                .catch(error => console.log(error))
    }, [show])

    return (
        <div className='grid grid-cols-2'>
            <button onClick={() => {setShow(true)}}>Click</button>
            {
                data.map(item => {
                    return (
                        <div className=' border border-black' key={item.id}>
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
export default ProductData