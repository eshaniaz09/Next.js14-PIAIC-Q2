/* eslint-disable react/jsx-key */
"use client"

import axios from "axios";

import { useState } from "react";

export default function Home() {

  const [todos, setTodo] = useState([]);
  const getTodo = async () => {
    try {
      const Result = await axios.get('https://dummyjson.com/todos')
      console.log(`Data from rest api:`, Result.data.todos);
      setTodo(Result.data.todos);
    } catch (error) {

      console.log(`Data not found! Error: ${error} `);
      
      
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo app</h1>
      

      <button onClick={getTodo} className="rounded p-3 my-4 bg-amber-400 text-center">Get All Todos </button>

      {todos.map((todo) => {
        return   <div>
          {todo.id} - {todo.todo}
        </div>
      })}
      {/* // eslint-disable-next-line @next/next/no-img-element */}
      {/* this image is related to class 17 => The url is getting by upload the local image file in the firebase console => built => storage */}
      <img  src="https://firebasestorage.googleapis.com/v0/b/esha-3921e.appspot.com/o/image3.png?alt=media&token=e7ff93ba-20d5-460a-980c-7ecdab743382" alt="" />
    </main>
  );
}
