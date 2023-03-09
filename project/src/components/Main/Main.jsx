import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.logoH1}>Promo</h1>
        <div className={styles.log}>
            <input className={styles.inLogo} type="text" placeholder='past Login' />
        </div>
        <div className={styles.password}>
            <input className={styles.inPassword} type="password" placeholder='Past password'/>
        </div>
        <Link className={styles.link} to="/forgot">Forgot password?</Link>
        <Button className={styles.btn} to="/profil" text="Log in"></Button>
    </div>
  )
}

export default Main