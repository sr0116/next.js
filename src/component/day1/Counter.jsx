"use client"
import {useState} from "react";


export default function Counter(){
  const[n, setN] = useState(0);
  return (

      <div className="mt-6 flex items-center gap-3">
        <button
            className="px-3 py-2 bg-purple-400 text-green-500 hover:bg-purple-500" onClick={()=>setN((n-1))}> - </button>
        <span className="min-w-10 text-center text-lg font-semibold">{n}</span>
        <button
            className="px-3 py-2  bg-red-700  text-green-500 hover:bg-red-800" onClick={()=> setN(n + 1)}> + </button>
      </div>
  )
}