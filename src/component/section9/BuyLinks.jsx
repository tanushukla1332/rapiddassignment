// import React from 'react'
import style from './Section9.module.css'
import { FiShoppingCart } from 'react-icons/fi';
function BuyLinks() {
  return (
    <div className={style.buyLinkWrapper}>
    <h3>Quia so minima</h3>

    <div className={style.buyLinks}>
        <span><FiShoppingCart/> Lorem</span>
        <span><FiShoppingCart/> Lorem</span>
        <span><FiShoppingCart/> Lorem</span>
        <span><FiShoppingCart/> Lorem</span>

    </div>
    </div>
  )
}

export default BuyLinks
