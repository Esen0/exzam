import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import styles from "./Nav.module.css"



const Nav = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.log}>
        <h1 className={styles.h1_logo}>Promo</h1>
      </div>
      <div className={styles.links}>
       <Link className={styles.link} text= "Home" to="/main">Home</Link>
       <Link className={styles.link} text= "About us" to="/about">About</Link>
       {/* <Link className={styles.link} text= "404" to="/*"></Link> */}
       {children}
      </div>
    </div>
  )
}

export default Nav