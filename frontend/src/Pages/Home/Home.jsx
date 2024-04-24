import React, { useState } from 'react'
import'./Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

const[category,setCatagory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCatagory={setCatagory}/>
      <FoodDisplay  category={category}/>

      
    </div>
  )
}

export default Home
