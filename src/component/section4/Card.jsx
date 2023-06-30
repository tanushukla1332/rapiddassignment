import style from './Card.module.css'
import { BsLink45Deg } from "react-icons/bs";
function Card(prop) {
  return (


<div className={style.innerCard}>
    <img src={prop.img} alt="" />

    <p >{prop.txt}</p>

    <button><h2><BsLink45Deg/></h2>
    {prop.btnTxt}

    </button>
    </div>    
  
  )
}

export default Card;
