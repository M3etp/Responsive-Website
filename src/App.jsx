import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Clients from './components/Clients'
import Services from './components/Services'
import TravelPoint from './components/TravelPoint'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


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
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
