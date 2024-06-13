import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchDataWithUseEffect from './r5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchDataWithUseEffect />
    </>
  )
}

export default App
