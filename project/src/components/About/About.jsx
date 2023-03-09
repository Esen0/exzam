import React from 'react'
import about from '../img/about.jpg'
import style from './About.module.css'

const About = () => {
  return (
 <div className={style.container}>
    <div className={style.img}>
      <img className={style.img} src={about} alt="" />
    </div>
    <div className={style.block2}>
      <div className={style.title}>
        <h1>PROMO</h1>
      </div>
      <div className={style.text}>  
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit reiciendis, velit eveniet animi unde nemo culpa ipsum repellat repellendus voluptas atque quas tempora neque aliquam eius laborum provident eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit reiciendis, velit eveniet animi unde nemo culpa ipsum repellat repellendus voluptas atque quas tempora neque aliquam eius laborum provident eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit reiciendis, velit eveniet animi unde nemo culpa ipsum repellat </p>
      </div>
    </div>
 </div>
  )
}

export default About