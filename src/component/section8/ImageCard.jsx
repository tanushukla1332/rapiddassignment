import style from './ImageCard.module.css'
import { FiShoppingCart } from 'react-icons/fi';
function ImageCard(props) {
  return (
    <div style={{backgroundImage:`url(${props.imgLink})`}} className={style.wrapperdiv}>
        <h1 className={style.titleText}>{props.titleText} </h1>
        <button><FiShoppingCart/>  {props.btnText} </button>
    </div>
  )
}

export default ImageCard
