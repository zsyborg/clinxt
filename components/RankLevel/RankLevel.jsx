import React from 'react'
import styles from "./RankLevel.module.css"
import trophy from "./trophy.png"
import left from "./left.png"
import right from "./right.png"
import LoadingBar from "../LoadingBar/LoadingBar"
import MessageBar from '../MessageBar/MessageBar'
import Leaderboard from "../Leaderboard/Leaderboard"
const RankLevel = () => {
  return (
    <div className={styles.container}>
        <div className={styles.trophyContainer}>
            <img className={styles.left} src={left} alt="" />
            <img className={styles.trophy} src={trophy} alt="" />
            <img className={styles.right} src={right} alt="" />
        </div>
        <LoadingBar percentage={10} />
        <h2>Your Rank Level</h2>
        <MessageBar message={"10/3k"} />
        <h2>Leaderboard</h2>
        <Leaderboard />
    </div>
  )
}

export default RankLevel