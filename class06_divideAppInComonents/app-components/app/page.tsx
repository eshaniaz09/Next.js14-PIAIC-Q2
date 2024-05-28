import React from 'react'
import Button from './components/button/button'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Card from './components/card/card'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="w-full h-auto flex justify-center p-10 items-center bg-blue-900">
        <div className="card-container flex justify-center items-center flex-col gap-3">
          <h1>Card-container</h1>
          <div className="cards grid grid-cols-3 justify-evenly  gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Home
