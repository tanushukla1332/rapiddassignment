// import React from 'react'
import style from './Section9.module.css'
import BuyLinks from "./BuyLinks"
import Link from "./Link"

function Section9() {
  return (
    <div className={style.sec9wrapper}>
      <Link/>
      <Link/>
      <BuyLinks/>
    </div>
  )
}

export default Section9
