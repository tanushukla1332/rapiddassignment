
import  Drop from './DropDownMenu.module.css'

function DropDownMenu() {
  return (
    <>
    <div className={Drop.ddMenuBox}>
        <div className={Drop.innerBox}>
        <ul className={Drop.menuLists}>
        <h4>Ipsum Lorem</h4>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
        </ul>
        <ul className={Drop.menuLists}>
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
