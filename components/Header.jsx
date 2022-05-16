import React from 'react'
import styles from "../styles/Header.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import OpenMenu from '@mui/icons-material/Close';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMobileNav, setIsMobileNav] = useState(false);
    return (
        <section className={styles.mainHeader}>
            {/* ----------NAVBAR------------------- */}
            <nav className={styles.navBar}>
                <Link href="/">
                    <img src="logo.png" alt="yash-journeys-logo" className={styles.navLogo} />
                </Link>

                <ul className={styles.navBarLinks}>
                    <li><a href='#services' className={styles.menuItem} >Services</a></li>
                    <li><a href='#packages' className={styles.menuItem}>Packages</a></li>
                    <li><a href='#reviews' className={styles.menuItem}>Reviews</a></li>
                    <li><a href='#team' className={styles.menuItem}>About Us</a></li>
                </ul>
            </nav>

            <nav className={styles.mobileNavBar}>

            <Link href="/">
                    <img src="logo.png" alt="yash-journeys-logo" className={styles.navLogo} />
                </Link>

                {!isMobileNav ? <MenuIcon htmlColor='#F9A833'
                    fontSize='large'
                    onClick={() => setIsMobileNav(!isMobileNav)}
                /> : <OpenMenu htmlColor='#F9A833'
                    fontSize='large'
                    onClick={() => setIsMobileNav(!isMobileNav)}
                />}
            </nav>

            {isMobileNav && <MobileNavBarScreen />}

            {/* ----------NAVBAR------------------- */}

            <section className={styles.content}>
                <h1>We take care of your journeys</h1>
                <br />
                <button className={styles.bookNow} href="/#packages">Book A Tour</button>

                <a href='#services'>↓</a>
            </section>
        </section>
    )
}


const MobileNavBarScreen = () => {
    return <>
        <section className={styles.mobileNavScreen}>
            <ul className={styles.mobileNavBarLinks}>
                <li><a href='#services' className={styles.mobileMenuItem}>Services</a></li>
                <li><a href='#packages' className={styles.mobileMenuItem}>Packages</a></li>
                <li><a href='#reviews' className={styles.mobileMenuItem}>Reviews</a></li>
                <li><a href='#team' className={styles.mobileMenuItem}>About Us</a></li>
            </ul>
        </section>
    </>
}

export default Header