
import style from './DropDownMenu.module.css'

function DropDownMenu() {
  return (
    <>
    <div className={style.ddMenuBox}>
        <div className={style.innerBox}>
        <ul className={style.menuLists}>
        <h4>Ipsum Lorem</h4>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
        </ul>
        <ul className={style.menuLists}>
        <h4>Ipsum Lorem</h4>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default DropDownMenu
