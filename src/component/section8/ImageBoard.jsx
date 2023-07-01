
import Image from './ImageBoard.module.css'
import { FiShoppingCart } from 'react-icons/fi';
function ImageBoard(props) {
  console.log(props)
  return (
    <div style={{backgroundImage:`url(${props.imgLink})`}} className={Image.wrapperdiv}>
        <h1 className={Image.titleText}>{props.cardText} </h1>
        <button><FiShoppingCart/>{props.btnTxt}</button>
    </div>
  )
}
export default ImageBoard