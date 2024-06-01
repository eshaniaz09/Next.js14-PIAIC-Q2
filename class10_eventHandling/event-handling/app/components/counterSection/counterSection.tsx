/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Button from "../button/button"
import {useState} from "react"

const counterSection = () => {
    const [countState, setCountState] = useState(0)
    const [myName, setName] = useState("Hello esha")
    const [myDetails, setDetails] = useState({ name: "esha", age: 20, degree: "BS(SE)" })
    const [books, setBooks] = useState(["physics", "maths", "English", "urdu"])
    const [isMYAccount, setMyAccount] = useState(false)
    const onClickAddHandler = () => {
        setCountState(countState+1)
        console.log("Value added by onClickAddHandler",countState)
    }
    const onClickMinusHandler = () => {
        setCountState(countState-1)
        console.log("Value added by onClickMinusHandler",countState)

    }
    function onClickResetHandler(): void {
        setCountState(0)
    }

  return (
    <div className="flex flex-row gap-2 mt-6 justify-center items-center">
          <Button title={"+"} onClickHandler={onClickAddHandler} />
          <span>{countState}</span>
          <Button title={"-"} onClickHandler={onClickMinusHandler} />
          <br />
          <hr />
          <Button title={"Reset"} onClickHandler={onClickResetHandler} />

    </div>
  )
}

export default counterSection
