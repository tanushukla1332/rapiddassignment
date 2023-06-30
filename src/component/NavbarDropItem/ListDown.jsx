
import  Drop from './ListDown.module.css'

function DropDownMenu() {
  return (
    <>
    <div className={Drop.ddMenuBox}>
        <div className={Drop.innerBox}>
        <ul className={Drop.menuLists}>
        <h4>Figma</h4>
            <li>Design</li>
            <li>Prototying</li>
            <li>Design system</li>
            <li>Downloads</li>
            <li>Devlopments</li>
        </ul>
        <ul className={Drop.menuLists}>
        <h4>Figma jaim</h4>
            <li>Overview</li>
            <li>Contact</li>
            <li>Customer</li>
            <li>Contact sales</li>
            <li>Link</li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default DropDownMenu
