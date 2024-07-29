"use client"
import React from 'react'
import { useState } from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks

const Home = () => {
  const [myName, changeName] = useState("esha");
  const setName = () => {
    changeName("fatima")
  }
  return (
    <div>
      <h1>Hello , I am home page</h1>
      <h2>My name is {myName}</h2>
      <button onClick={setName}>Change Name</button>

    </div>
  )
}

export default Home
