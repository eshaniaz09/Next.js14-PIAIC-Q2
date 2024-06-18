"use client"

import { rootState } from "./globalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./globalRedux/Features/counter/counterSlice";


export default function Home() {
  const count = useSelector((state: rootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    
    <main className="flex min-h-screen  items-center justify-center gap-6 p-24">
      <button className="bg-white text-black p-2 rounded" onClick={() => dispatch(increment())}>Increment</button>
      <span>{ count }</span>
      <button className="bg-white text-black p-2 rounded" onClick={() => dispatch(decrement())}>decrement</button>
      <button className="bg-white text-black p-2 rounded" onClick={() => dispatch(incrementByAmount(2))}>increment by 2</button>
    </main>
  );
}
