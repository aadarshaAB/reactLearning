import React, { useState } from 'react'
// import NavBar from '../components/NavBar'

export const About = () => {
    const[number,setNumber]=useState(0)

    function increase(number){
        setNumber(number=>number+1)
    }
    function decrease(number){
        setNumber(number=>number-1)
    }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}
