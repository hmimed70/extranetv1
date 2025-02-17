import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/Navbar'
import image from './assets/facebook.jpg'
import Blog from './components/Blog'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gray-100 min-h-full'>
      <div className='flex flex-col max-w-7xl mx-auto bg-white'>
       <Header />
       <NavBar />
       <img src={image} sr className='w-full h-96 rounded-md my-1'/>
       <Blog />
       <Stats />
       <Footer />
      </div>
    </div>
  )
}

export default App
