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
         <Button title="Apply" />
          <div className="cards grid grid-cols-3 justify-evenly  gap-3">
            <Card heading='Web development' description='web development Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do anim id est laborum.'/>
            <Card  heading='Mobile development' description=' mobile dev Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do anim id est laborum.'/>
            <Card heading='Word press development' description='word press dev Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do anim id est laborum.' />
            <Card heading='Block-chain development'description='block-chain dev Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do anim id est laborum.'/>
            <Card heading='Fluter development' description='mobile dev Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do anim id est laborum.'/>
            <Card heading='Android development' description='mobile dev Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do anim id est laborum.'/>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Home
