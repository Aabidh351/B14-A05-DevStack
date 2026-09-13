import { Suspense } from 'react'
import './App.css'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Hero from './components/HeroBanner'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Suspense fallback={<div className='text-center text-4xl text-[#dd3580]'>Loading...</div>}>
      <Explore/>
    </Suspense>
    <Footer />
    </>
  )
}

export default App
