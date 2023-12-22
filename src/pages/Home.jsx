import React from 'react'
import'./Home.css'
import Button from '../components/Button'
import NavBar from '../components/NavBar'
const Home = () => {
  return (
    <div>
        <NavBar/>
        <h1>Home page</h1> 
        <Button text="Learn More"/>
        <Button text="View All"/>

    </div>
  )
}

export default Home