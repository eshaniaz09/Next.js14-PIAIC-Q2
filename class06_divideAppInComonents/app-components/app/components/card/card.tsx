import React from 'react'
import Button from '../button/button'
import { cardType } from '@/types/cardType'

const Card = (props: cardType) => {
  var count = 3;
  // var count = 9;
  return (
<div style={{backgroundColor: props.isDescription? 'yellow' : 'white'}} className="h-auto w-[23rem] rounded  shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{props.heading}</div>
     {props.isDescription ?  <p className="text-gray-700 text-base">
          {props.description}
        </p> : "No description available"}  
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center gap-2">
        <Button title="Learn More" />
      {count>5? <span className='text-black'>{count}</span>: null }  
      </div>
    </div>
  )
}

export default Card
