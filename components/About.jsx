import React from 'react'
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <div className={styles.mainBody}>
            <h1 className="title">About Us</h1>

            <img src="logo.png" alt="yash-journeys-logo" />

            <h2 className="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptate repudiandae deleniti eveniet numquam dolor soluta at et expedita adipisci! Odit laborum ipsa voluptatem recusandae facere dignissimos, corrupti placeat nobis optio aut voluptate vitae mollitia dolorem, fuga, ullam alias atque quidem nemo aliquid possimus libero at. Dolor possimus dolore laboriosam delectus harum quae nostrum animi aliquam. Amet ducimus numquam tenetur?</h2>

            <br />

            <button className="actionButton">Learn More</button>

    </div>
  )
}

export default About