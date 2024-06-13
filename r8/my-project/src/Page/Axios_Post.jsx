import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Axios_Post = () => {

    const data = {fname:'' , lname:''} 
    const [inputdata, setInputData] = useState(data)

    console.log(inputdata);

    const handleChange = (e) => {
        setInputData({...inputdata, [e.target.name]:e.target.value})
    }

    const handleSumbit= (e) => {
        e.preventDefault()
        axios.post('https://fakestoreapi.com/products' , inputdata)
        .then(response => console.log(response.data))
    }

    const handleUpdate= (e) => {
        e.preventDefault()
        axios.put('https://fakestoreapi.com/products/1' , inputdata)
        .then(response => console.log(response.data))
    }

    const handleDelete= (e) => {
        e.preventDefault()
        axios.delete('https://fakestoreapi.com/products/1' , inputdata)
        .then(response => console.log(response.data))
    }

    return (
        <div>
            <h1 className='bg-black text-white font-bold py-4 text-center'>Axios Post / Delete Request</h1>
            <div className='flex justify-center h-screen items-center'>

            <div className='border border-black w-[500px] h-[200px]  '>

                <div className='mt-2'>
                    <label className='border px-4 border-black rounded-md ml-4' htmlFor="FirstName">FirstName</label>
                    <input className='border border-black rounded-lg ml-4' type="text" name='FirstName' id='Firtname' onChange={handleChange} />
                </div>
                <div className='mt-10'>
                    <label className='border px-4 border-black rounded-md ml-4' htmlFor="LastName">LastName</label>
                    <input className='border border-black rounded-lg ml-4' type="text" name='LastName' id='Lastname' onChange={handleChange} />
                </div>
                <div className='space-x-5 mt-14 text-center'>

                    <button onClick={handleSumbit}>Sumbit</button>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Axios_Post