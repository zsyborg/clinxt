import React from 'react'
// import styles from './Trophy.module.css'
import trophy from "./trophy.png"
const Trophy = () => {
  return (
    <div className="container">
      <div className="row flex-row flex justify-center items-center">
        <div className="col-6 flex flex-col justify-center items-center text-center">

        <img className="trophyImg" src="http://localhost:3000/trophy.png" alt="" />
        
        </div>
        <div className="col-6 flex flex-col justify-center items-center text-center">
        <p className="text text-white">2000</p>
        </div>
      </div>
    </div>
  )
}

export default Trophy