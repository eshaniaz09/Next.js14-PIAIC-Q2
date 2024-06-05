"use client"
import { useState } from "react";
import DisplayContact from "../DisplayContact/DisplayContact";
import { onChangeEventType } from "@/types/onChangeEventType";
import { contactTypes } from "@/types/contactInfo";
import * as yup from 'yup';

// declare a variable to store the information give in the form (name, email, message)
const ContactUS = () => {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    userName: "",
    userEmail: "",
    userMessage: ""
  });
// function definition that is passed in onChange={} event handler when user gives data (name, email , message)
  const eventHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    };
    setContactInfo(userDetails);
  };

// Now we declare a state variable to make a list of all the contactInfo given by all the users 
  const [contactList, setContactList] = useState<contactTypes[]>([]);

  // Here we are defining the yup validation schema for our form validation. The schema is written for userName , userEmail, userMessage
  const contactInfoValidationSchema = yup.object().shape({
    userName: yup
      .string()
      .required("User name is required")
      .min(4, "User name must be at least 4 characters")
      .max(15, "User name must be at most 15 characters")
      .matches(/^[A-Za-z\s]+$/, "User name must only contain alphabetic characters and spaces"),
    userEmail: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    userMessage: yup
      .string()
      .required("Message is required")
  });
  // Also declaring a state variable to catch and display the errors when user gives  info not included in the  yup validation schema. WE are declaring an array
  const [errors, setErrors] = useState<string[]>([]);



  // Function definition when the onSubmit{} event handler is used by clicking the submit button.
  // we also use setError  state variable in catch and setContactList and setContactInfo  state variables in try  in this function definition

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // try...catch is used to handle exceptions (errors) that occur during the execution of a block of code.
    try {
      const result = await contactInfoValidationSchema.validate(contactInfo, { abortEarly: false });
      console.log(result);

      let newContactList: contactTypes[] = [
        ...contactList, contactInfo
      ];
      setContactList(newContactList);

      console.log(newContactList);

      // when the submit button is clicked and contactInfo is saved in contactList then setContactInfo become again empty string
      setContactInfo({
        userName: "",
        userEmail: "",
        userMessage: ""
      });

      setErrors([]); // Clear any previous error messages
    } catch (err: any) {
      setErrors(err.errors); // Set new error messages if validation fails
      console.log("error", err.name, err.errors);
    }
  };

  return (
    <>
      <div>
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                value={contactInfo.userName}
                id="name"
                name="userName"
                onChange={eventHandler}
                className="w-full px-36 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                value={contactInfo.userEmail}
                type="email"
                id="email"
                name="userEmail"
                onChange={eventHandler}
                className="w-full px-36 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="userMessage"
                value={contactInfo.userMessage}
                onChange={eventHandler}
                className="w-full px-36 py-2 border border-gray-300 rounded-lg"
                rows="4"
                required
              />
            </div>

            {/* when any error occur in the form validation it is displayed in this place */}
            {/* Here we define and use errors state variable which we declared above */}
            {errors.map((item, index) => (
              <div key={index}>
                <h1 className="text-red-700">{item}</h1>
              </div>
            ))}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Here we pass the contactList variable that we declared above which contains all the contactInfo of all the users who fills the form */}
      <DisplayContact contactData={contactList} />
    </>
  );
};

export default ContactUS;
