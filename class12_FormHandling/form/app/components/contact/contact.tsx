
"use client"
import { useState } from "react";
import DisplayContact from "../DisplayContact/DisplayContact"
import { onChangeEventType } from "@/types/onChangeEventType";
import { contactTypes } from "@/types/contactInfo";

const ContactUS = () => {


  const [contactInfo, setContactInfo] = useState<contactTypes>({
    userName: "",
    userEmail: "",
    userMessage: ""
  })

  const eventHandler = (e: onChangeEventType) => {
    
    let userDetails = {
      ...contactInfo,
     [e.target.name] : e.target.value
    }
    setContactInfo(userDetails)

    // console.log(e.target.value);
    // console.log(e.target.name);
    // if (e.target.name == "name") {
    //   setUserName(e.target.value)
    // } else if (e.target.name == "email") {
    //   setUserEmail(e.target.value)
    // } else {
    //   setUserMessage(e.target.value)
    // }
    
  }


  //  const [userName, setUserName] = useState<string>("")
  // const getUserName = (event:onChangeEventType) => {
  //   // console.log("getUserNameHandler call", event.target.value);
  //   setUserName(event.target.value)
  // }

  // const [userEmail, setUserEmail] = useState<string>("")
  // const getUserEmail = (event:onChangeEventType) => {
  //   setUserEmail(event.target.value)
  // }

  // const [userMessage, setUserMessage] = useState<string>("")
  // const getUserMessage = (event:onChangeEventType) => {
  //   setUserMessage(event.target.value)
  // }
  const submitButton = () => {
    
  }
  return (
    <>
    <div>
        <div className="max-w-md mx-auto  bg-white p-8 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            onChange={eventHandler}
            className="w-full px-36 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            onChange={eventHandler}
            className="w-full px-36 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            // value={formData.message}
            onChange={eventHandler}
            className="w-full px-36 py-2 border border-gray-300 rounded-lg"
            rows="4"
            required
          />
        </div>
        <div className="text-center">
            <button
              onClick={submitButton}
              type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
      < DisplayContact contactData={ contactInfo} />
    </>
  )
}

export default ContactUS
