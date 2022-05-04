import React from 'react'
import styles from "../styles/Services.module.css"

const Services = () => {
    return (
        <div className={styles.mainSection}>
            <h1 className="title">Our Services</h1>
            <h2 className="subtitle">We offer various services to ensure the travelling experience for you.</h2>

            <section className={styles.services}>
                <ServiceSection
                    number="01"
                    title="Various Destinations"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi corporis repudiandae aliquam provident voluptatum consectetur labore vitae odio est?" 
                />
                <ServiceSection 
                    number="02" 
                    title="Everything is Included" 
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi corporis repudiandae aliquam provident voluptatum consectetur labore vitae odio est?" 
                    alt = {true}
                />
                <ServiceSection 
                    number="03" 
                    title="Most Affordable Prices" 
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi corporis repudiandae aliquam provident voluptatum consectetur labore vitae odio est?" 
                />
            </section>
        </div>
    )
}


const ServiceSection = ({ number, title, body, alt }) => {
    return <section className={ !alt ? styles.serviceSection : styles.serviceSectionAlt}>
        <h2 className={ !alt ? styles.serviceNumber : styles.serviceNumberAlt}>{number}</h2>
        <h1 className={ !alt ? styles.serviceTitle : styles.serviceTitleAlt}>{title}</h1>
        <p className={styles.serviceDescription}>{body}</p>
    </section>
}

export default Services