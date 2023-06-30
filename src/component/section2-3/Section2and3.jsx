import Sec2 from "./Section2and3.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import "../../App.css";
function Section2and3() {
  return (
    <>
      <div className={Sec2.label}>
        <div>
          <h1 className={Sec2.wholetxt}>
            <span>How you design , align,</span>
            <span className={Sec2.boldtxt}> and build  matters..</span>
          </h1>
        </div>
      </div>

      <div className={Sec2.section2wrapper}>
        <div className={Sec2.sec2Text}>
        Design, Collaborative, Prototyping, User-friendly, Web-based, Responsive.
        </div>

        <div className={Sec2.sec2BtnDiv}>
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

      <div className={Sec2.sec3wrapper}>
        <div className={Sec2.leftSide}>
          <img
            src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg"
            alt=""
          />
          <div className={Sec2.links}>
       
            <span>
              <BsLink45Deg />
              Design
            </span>
            <span>
              <BsLink45Deg />
              Prototyping
            </span>
            <span>
              <BsLink45Deg />
              Product
            </span>
            <span>
              <BsLink45Deg />
              Resources
            </span>
          </div>
        </div>
        <div className={Sec2.rightSide}>
          <div className={Sec2.titleRight}>
            <span>
              Figma. <b> Design, Collaboration, Prototyping..</b>
            </span>
            <h2>Vector-based, Web-based.</h2>
            <a href="#">click me..</a>
          </div>
          <div className={Sec2.imgRight}>
            <img
              src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"
              alt=""
            />

            <div className={Sec2.rightLinks}>
              <button>
                <h2><BsLink45Deg /></h2>click me..
              </button>
              <span>Interactive, Responsive, Iterative, Versatile..</span>
              <a href="#">redi..</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2and3;
