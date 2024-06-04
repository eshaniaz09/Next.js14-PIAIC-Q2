import { contactInfoType, contactTypes } from '@/types/contactInfo'
import React from 'react'

const DisplayContact = (props: { contactData: contactTypes }) => {
  return (
      <div className=' mt-10'>
          <h1 className='text-2xl'>Here are your contact details:</h1>
          <h1><span className='font-semibold'>Name: </span> {props.contactData.userName} </h1>
          <h1><span className='font-semibold'>Email: </span> {props.contactData.userEmail} </h1>
          <h1><span className='font-semibold'>Message: </span> {props.contactData.userMessage} </h1>
          
    </div>
  )
}

export default DisplayContact
