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
      
      <button onClick={getTodo} className="rounded p-3 bg-amber-400 text-center">Get All Todos </button>

      {todos.map((todo) => {
        return   <div>
          {todo.id} - {todo.todo}
        </div>
      })}
    </main>
  );
}
