import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../styles/Tours.module.css"
import { constants } from './constants'

const Tours = () => {

  useEffect(()=>{
    const getData = async ()=>{
      fetch(`${constants.apiURL}/tours`)
        .then(response => response.json())
        .then(data => setTourData(data.slice(0, 3)));
    }
    getData();
  }, [])

  const [tourData, setTourData] = useState(null);

  return (
    <div className={styles.mainBody}>
            <h1 className="title">Tour Packages</h1>
            <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus doloribus impedit iste doloremque corporis debitis officiis cupiditate nesciunt eius.</h2>

            <section className={styles.tourGrid}>
              { tourData? <TourDetails data={tourData}/> : <h1 className="title">Loading...</h1>  }
            </section>

            <button className="actionButton">See All</button>

    </div>
  )
}

const TourDetails = ({ data })=>{
  
  return data.map((tour)=>{
    return <section key={tour.title} className={styles.tourDetail}>
      <h1>{tour.title}</h1>
      <img src={tour.image} alt={tour.title} />
      <h2>{tour.body.slice(0, 200)}.....</h2>
      <button>More Details</button>
    </section>
  })
}

export default Tours