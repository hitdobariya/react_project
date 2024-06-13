import { useState } from 'react'

const Count = () => {
    const [Count, setCount] = useState(0)
    return (
        <>
            <h1 className='text-left font-bold text-2xl'>{Count}</h1>
            <div>
                <button className=' m-8 w-26 rounded-md border-2 border-black h-8' onClick={() => setCount(Count + 1)} >Increment</button>
                <button className=' m-8 w-26 rounded-md border-2 border-black h-8' onClick={() => { if (Count > 0) { setCount(Count - 1) } }} >Decrement</button>
                <button className=' m-8 w-26 rounded-md border-2 border-black h-8' onClick={() => setCount(0)} >Reset</button>
            </div>
        </>
    )
}
export default Count