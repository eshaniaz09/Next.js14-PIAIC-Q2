import React from 'react'

const Card = () => {
  return (
<div className="h-[12rem] w-[23rem] rounded  shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">Card 1</div>
        <p className="text-gray-700 text-base">
          This is a sample card component created with Next.js and Tailwind CSS.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          
        >
          Click me
        </button>
      </div>
    </div>
  )
}

export default Card
