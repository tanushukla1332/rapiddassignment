import styles from "./Section2and3.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import "../../App.css";
function Section2and3() {
  return (
    <>
      <div className={styles.label}>
        <div>
          <h1 className={styles.wholetxt}>
            <span>How you design , align , and build  matters.</span>
            <span className={styles.boldtxt}> Do it together with Figma..</span>
          </h1>
        </div>
      </div>

      <div className={styles.section2wrapper}>
        <div className={styles.sec2Text}>
        Design, Collaborative, Prototyping, User-friendly, Web-based, Responsive.
        </div>

        <div className={styles.sec2BtnDiv}>
          <button>
            <span><AiOutlineMail /></span>Gmail
          </button>
          <button>
           <span> <BsLink45Deg /></span> hyperLink
          </button>
          <button>
           <span><GoLocation /></span>Map
          </button>
        </div>
      </div>

      <div className={styles.sec3wrapper}>
        <div className={styles.leftSide}>
          <img
            src="https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
          <div className={styles.links}>
       
            <span>
              <BsLink45Deg />
              Ipsum Lorem
            </span>
            <span>
              <BsLink45Deg />
              Ipsum Lorem
            </span>
            <span>
              <BsLink45Deg />
              Ipsum Lorem
            </span>
            <span>
              <BsLink45Deg />
              Ipsum Lorem
            </span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.titleRight}>
            <span>
              Numquam. <b> Esse aliquip do, magni.</b>
            </span>
            <h2>Minima ad for vitae sit</h2>
            <a href="#">Ipsum Lorem</a>
          </div>
          <div className={styles.imgRight}>
            <img
              src="https://1.bp.blogspot.com/-jG0JKsi41w8/XAC2RMbUe3I/AAAAAAAAZ88/KGlkcW_eLlMi1ucV8oyMTa2mRUhMAoaygCLcBGAs/s1600/17Photo0095_1.jpg"
              alt=""
            />

            <div className={styles.rightLinks}>
              <button>
                <h2><BsLink45Deg /></h2> Ipsum Lorem
              </button>
              <span>Adipisicing unde vel so dolore, consequatur.</span>
              <a href="#">Ipsum Lorem</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2and3;
