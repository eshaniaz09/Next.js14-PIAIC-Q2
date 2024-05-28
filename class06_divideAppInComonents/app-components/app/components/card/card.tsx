import React from 'react'
import Button from '../button/button'
import { cardType } from '@/types/cardType'

const Card = (props: cardType) => {
  
  return (
<div className="h-auto w-[23rem] rounded  shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{props.heading}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <Button title="Learn More" />
      </div>
    </div>
  )
}

export default Card
