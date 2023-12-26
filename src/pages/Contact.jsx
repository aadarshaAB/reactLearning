// import React from 'react'
// import Button from '../components/Button'
// import NavBar from '../components/NavBar'

import { useEffect, useState } from "react"
//jati khera ni code run hunxa
export const Contact = () => {
  // useEffect(()=>{
  //   console.log("Hello")
  // },[])
  const[number,setNumber]=useState(0)
//   //first time mount huda yo code run hunxa
//   useEffect(()=>{

//   },[])
// //jaba yo state name ko state change hunxa
  useEffect(()=>{
    console.log('Hello')
  },[number])
  return (
  
    <div>
        {/* <NavBar/>
        <h1>Contact</h1>
        <Button text="Location"/> */}
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)}>increase</button>
        </div>
  )
}
