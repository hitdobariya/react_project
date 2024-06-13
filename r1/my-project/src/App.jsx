import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
import Card2 from './card2'
import { Cards2 } from './card2'

function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
    
    <div className=' h-screen flex justify-between items-center '>
    <Card heding='Console' image='https://www.shutterstock.com/image-illustration/high-power-electromagnet-3d-image3-600w-1761240347.jpg'/> 
    <Card heding='Playground' image='https://www.shutterstock.com/image-illustration/many-dark-purple-flowers-3d-260nw-1760520050.jpg'/> 
    <Card heding='Adventure' image='https://blog.cloudflare.com/content/images/2024/03/image3-25.png'/> 
    </div>
    
    <div>
        <div className='relative flex justify-start  items-center'>
            <p className='absolute text-3xl font-bold font-mono mx-32 text-white'>Images</p>
            <img className='w-full' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFBzgj3YxctXhvsC71QFyIu04fXzVP3_RUeToCpatBtAei4KuC" alt="" />
        </div>
      <div className='flex justify-around'>
      <Card2 name='Alice Mayor' heding='Photographer'/>
      <Cards2/>
      <Card2 name='Billy Cullen' heding='Web Developer'/>
      </div>
    </div>

    </>
  )
}
export default App