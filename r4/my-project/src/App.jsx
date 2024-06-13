import { useState } from 'react'
import './App.css'
import R4 from './Recipe'
import Count from './Count'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='h-[400px]'>
        <R4 />
      </div>
      <Count />
    </>
  )
}
export default App