"use client"
import Button from '@/app/components/button/button'


const ContactForm = () => {
  return (
    <div>
          <Button title='Contact Me' onClickHandler={() => {
              alert("OnClick by contact page")
      }} /> 
    </div>
  )
}

export default ContactForm
