import { contactInfoType, contactTypes } from '@/types/contactInfo'
import React from 'react'

const DisplayContact = (props: { contactData: contactTypes[] }) => {
  return (
      <div className=' mt-10'>
          <h1 className='text-2xl'>Here are your contact details:</h1>
         
      <table className='flex flex-col gap-3'>
        <tbody>
        <tr className='flex gap-8'>
          
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
      {props.contactData.map((items,index) => {
        return (
          <div key={index}>
            <tr className='flex gap-8'>
              <td>{ items.userName}</td>
              <td>{ items.userEmail}</td>
              <td>{ items.userMessage}</td>
            </tr>
              </div>
            )
      })}
          </tbody>
          </table>
    </div>
  )
}

export default DisplayContact
