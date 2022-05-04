import React from 'react'
import styles from "../styles/Reviews.module.css"
import { useState, useEffect } from 'react'
import { constants } from './constants'

const Reviews = () => {

  useEffect(()=>{
    const getData = async ()=>{
      fetch(`${constants.apiURL}/tours`)
        .then(response => response.json())
        .then(data => setReviewData(data.slice(0, 3)));
    }
    getData();
  }, [])

  const [reviewData, setReviewData] = useState(null);

  return (
    <div className={styles.mainBody}>
            <h1 className="title">Reviews</h1>
            <h2 className="subtitle">Read all the wonderful things our customers have to say about us.</h2>

            <section className={styles.reviewGrid}>
              { reviewData? <h1>Aayo</h1> : <h1 className="title">Loading...</h1>  }
            </section>

            <button className="actionButtonAlt">Read All</button>

    </div>
  )
}

export default Reviews