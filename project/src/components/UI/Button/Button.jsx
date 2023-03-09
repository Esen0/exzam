import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Button.module.css"

const Button = ({text, to}) => {
  return (
   <NavLink className={styles.link} to={to}>
<div className={styles.btn}>{text}</div>
   </NavLink>
  )
}

export default Button