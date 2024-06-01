import { buttonType } from '@/types/buttonTypes';
import React from 'react'

const Button = (props:buttonType) => {

  return (
    <div className=''>
      <button onClick={props.onClickHandler} className='bg-yellow-400 text-black p-2 text-base  rounded '>{props.title}</button>
      
    </div>
  )
}

export default Button
