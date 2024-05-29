"use client"
import React from 'react'

const EventsNextJS = () => {
    let addValue = 0;
    const onClickHandler = () => {
        addValue = addValue + 1;
    }
    console.log(addValue);
    
  return (
    <div className='flex justify-center items-center'>
      <button onClick={onClickHandler} className='bg-yellow-400 text-black p-2 text-base mt-36 rounded '>{addValue}</button>
    </div>
  )
}

export default EventsNextJS
