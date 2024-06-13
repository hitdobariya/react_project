import { useState } from 'react'
// import Axios_Get from './Page/Axios_Get'
// import Axios_Post from './Page/Axios_Post'
import AllComponent from './AllComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Axios_Get /> */}
      {/* <Axios_Post /> */}
      <AllComponent />
    </>
  )
}
export default App