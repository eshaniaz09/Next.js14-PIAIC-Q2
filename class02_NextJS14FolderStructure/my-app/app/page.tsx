// import esha from './test';
// console.log(esha);
// import { b } from './test';
// console.log(b);
import Link from 'next/link'
import esha, { b } from './test'
console.log(`RollNumber: ${esha}, Name: ${b}`);


import React from 'react'

function home() {
  return (
    <div className='flex justify-center mt-56 gap-4 items-center flex-col rounded'>
      {/* code in html css */}
      
     <Link  href={"/blog"}>  <button className=' text-xl text-black pl-2 pr-2 rounded bg-white font-semibold'>Blog</button></Link>
      <Link href={"/contact"}><button className=' text-xl text-black pl-2 pr-2 rounded bg-white font-semibold'>contact me</button></Link>
     <Link href={"/projects"}> <button className=' text-xl text-black pl-2 pr-2 rounded bg-white font-semibold'>Projects</button></Link>
   </div>
  )
}

export default home;