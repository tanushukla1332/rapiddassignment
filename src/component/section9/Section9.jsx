
import style from './Section9.module.css'
import HyperLink from "./HyperLink"
import Section9last from "./section9last"

function Section9() {
  return (
    <div className={style.sec9wrapper}>
     
      <HyperLink/>
      <HyperLink/>
      <Section9last/>
    
    </div>
  )
}
export default Section9
