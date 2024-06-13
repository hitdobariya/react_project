import { useState, useEffect } from 'react';

const FetchDataWithUseEffect = () => {
    const [signin, setSignin] = useState(false);
    const [data, setData] = useState();
    console.log(data);

    const fetchTodoList = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const todos = await response.json();
        setData(todos);
    };

    useEffect(() => {
        fetchTodoList();
    }, [signin]);

    return (

        <div>
            {
                signin ? (
                    <>
                        <button className='w-20 m-8 h-6 border-2 border-black rounded-md' onClick={() => setSignin(false)} >Log_Out</button>
                        <ul className='flex flex-wrap m-10'>
                            {
                                data.map((item) => {
                                    return (
                                        <div className='h-auto w-56 m-2 font-mono flex flex-col border-2 text-[10px] border-black mb-2 text-center'>
                                            <p className='font-bold '>{item.title}</p>
                                            <p className='font-bold'>{item.price}</p>
                                            {/* <p>{item.description}</p> */}
                                            <p>{item.category}</p>
                                            <p className='font-bold'>{item.rating.rate}</p>
                                            <p className='font-bold'>{item.rating.count}</p>
                                            <img className='w-16 h-16 mx-auto' src={item.image}></img>
                                        </div>
                                    )
                                })}
                        </ul>
                    </>
                ) : (
                    <button className='w-20 m-8 h-6 border-2 border-black rounded-md' onClick={() => setSignin(true)}  >Log_In</button>
                )
            }
        </div>
    )
}
export default FetchDataWithUseEffect;