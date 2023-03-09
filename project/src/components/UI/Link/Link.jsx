import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'

const Link = ({text, to}) => {
  return (
   <NavLink className={styles.Link} to={to}>
    {text}
   </NavLink>
  )
}

export default Link