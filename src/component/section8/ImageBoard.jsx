import Image from './ImageBoard.module.css'
import { FiShoppingCart } from 'react-icons/fi';
function ImageCard(props) {
  return (
    <div Image={{backgroundImage:`url(${props.imgLink})`}} className={Image.wrapperdiv}>
        <h1 className={Image.titleText}>{props.titleText} </h1>
        <button><FiShoppingCart/>  {props.btnText} </button>
    </div>
  )
}

export default ImageCard
