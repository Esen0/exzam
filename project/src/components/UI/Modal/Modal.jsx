import React from 'react'
import styles from './Modal.module.css'
import clsx from 'clsx'
import BackDrop from './BackDrop/BackDrop'

const Modal = ({showModal}) => {
  return (
    <div className={clsx(styles.modal, showModal && styles.activeModal)}>
<div className={styles.title}>
    <h1>Promo</h1>
</div>
<div className={styles.text}>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quasi recusandae rem deserunt quam, laboriosam pariatur iste maxime tempore itaque.</p>
</div>
<button className={styles.btn}>undo</button>
    </div>
  )
}

export default Modal