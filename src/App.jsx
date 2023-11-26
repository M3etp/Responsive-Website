import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Clients from './components/Clients'
import Services from './components/Services'
import TravelPoint from './components/TravelPoint'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' max-w-6xl h-11 m-auto'>
        <Navbar />
        <Home />
        <Clients />
        <Services />
        <TravelPoint />
      </div>
    </>
  )
}

export default App
