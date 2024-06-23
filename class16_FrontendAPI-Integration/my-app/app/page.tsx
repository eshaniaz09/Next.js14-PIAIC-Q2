
// **************Client side rendering of the data fetching from api****************

// /* eslint-disable react/jsx-key */
// "use client"

// import axios from "axios";

// import { useState } from "react";
// // This hook is study in class 19
// import { useEffect } from "react";

// export default function Home() {

 
//   const [loader, setLoader] = useState(false);

  
//   useEffect(() => {
//     getTodo()
//   }, [])

//   const [todos, setTodo] = useState([]);
//   const getTodo = async () => {
//     try {
//       setLoader(true);
//       const Result = await axios.get('https://dummyjson.com/todos')
//       console.log(`Data from rest api:`, Result.data.todos);
//       setTodo(Result.data.todos);
//     } catch (error) {

//       console.log(`Data not found! Error: ${error} `);
      
      
//     }
//     finally {
//       setLoader(false);
//     }
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>Todo app</h1>
      

//       <button onClick={getTodo} className="rounded p-3 my-4 bg-amber-400 text-center">Get All Todos </button>
//       {loader && "leading...."}
//       {todos.map((todo) => {
//         return   <div>
//           {todo.id} - {todo.todo}
//         </div>
//       })}


//       {/* // eslint-disable-next-line @next/next/no-img-element */}
//       {/* this image is related to class 17 => The url is getting by upload the local image file in the firebase console => built => storage */}
//       <img  src="https://firebasestorage.googleapis.com/v0/b/esha-3921e.appspot.com/o/image3.png?alt=media&token=e7ff93ba-20d5-460a-980c-7ecdab743382" alt="" />
//     </main>
//   );
// }




//    class: 20 "Sever side vs client side api integration"


// **************Server side rendering of the data fetching from api****************

/* eslint-disable react/jsx-key */
const getTodo = async () => {
  try {
    const result = await fetch('https://dummyjson.com/todos')
    const data = await result.json()
    return data?.todos // Corrected data structure
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const todos = await getTodo()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo app</h1>
      {todos && todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.todo}
          </div>
        )
      })}
    </main>
  );
}
