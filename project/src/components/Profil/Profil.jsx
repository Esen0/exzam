import React from 'react'
import styles from './Profil.module.css'
import img from '../img/alim.jpg'
import img2 from '../img/aisha.jpg'

const Profil = () => {
  return (
    <div className={styles.container}>
<div className={styles.card2}>
<img className={styles.img2} src={img2} alt="" />
<div className={styles.name2}>Aisha</div>
<button className={styles.btn}>Нравиться</button>
<button className={styles.btn}>Пропустить</button>
</div>

    </div>
    
  )
}

export default Profil