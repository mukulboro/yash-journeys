import React from 'react'
import styles from "../styles/Reviews.module.css"
import { useState, useEffect } from 'react'
import { constants } from './constants'
import StarRateIcon from '@mui/icons-material/StarRate';


const Reviews = () => {

  useEffect(()=>{
    const getData = async ()=>{
      fetch(`${constants.apiURL}/reviews`)
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
              { reviewData? <ReviewDetails data={reviewData}/> : <h1 className="title">Loading...</h1>  }
            </section>

            <button className="actionButtonAlt">Read All</button>

    </div>
  )
}


const ReviewDetails = ({ data })=>{
  
  return data.map((review)=>{
    return <section key={review.title} className={styles.reviewDetail}>
      <h1>{review.title}</h1>
      <section>
      <ReviewStars number={review.stars}/>
      </section>
      <h2>{review.body.slice(0, 300)}</h2>
    </section>
  })
}

const ReviewStars = ({ number })=>{
  const stars = [];
  const starIcon = <StarRateIcon color='action'/>
  for(let i=0; i<number; i++){
    stars.push(starIcon);
  }

  return stars;
}

export default Reviews