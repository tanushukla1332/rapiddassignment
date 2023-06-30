import { useState } from "react";
import style from "./Navbar.module.css";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import DropdownMenuSmall from "../dropDownMenu/DropdownMenuSmall";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState([
    { name: "Ipsum", status: false },
    { name: "Ipsum", status: false },
    { name: "Ipsum", status: false },
    { name: "Ipsum", status: false },
  ]);
  const [showHam, setShowHam] = useState(true);

  // const menu = ["Ipsum" ,"Ipsum", "Ipsum", "Ipsum"];

  // const menu=[{name:'Ipsum',status:false},{name:'Ipsum',status:true},{name:'Ipsum',status:false},{name:'Ipsum',status:false}]
  return (
    <>
      <div className={style.navBox}>
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/cdn.elitmus.com/pv47kaalgysujzsemzaaf2juo0gx"
          alt="Company Logo"
        />
        <ul>
          {menu.map((ele, index) => {
            return (
              <li
                key={index}
                className={style.navItem}
                onClick={() => {
                  setDropDown(true);
                }}
                onMouseOver={() => setDropDown(true)}
                onMouseOut={() => setDropDown(false)}
              >
                {ele.name}
              </li>
            );
          })}
        </ul>
        {showHam ? (
          <h1
            onClick={() => {
              setShowHam(!showHam);
            }}
            className={style.Icon}
          >
            <GiHamburgerMenu />
          </h1>
        ) : (
          <h1
            onClick={() => {
              setShowHam(!showHam);
            }}
            className={style.Icon}
          >
            <AiOutlineClose />
          </h1>
        )}
        {dropDown ? (
          <div
            className={style.ddMenu}
            onMouseOver={() => setDropDown(true)}
            onMouseOut={() => setDropDown(false)}
          >
            <DropDownMenu />
          </div>
        ) : (
          ""
        )}
      </div>
      {showHam
        ? ""
        : menu.map((ele, index) => {
            return (


              
              <div
                className={style.smallDropDown}
                onClick={() => {
                  const tempMenu = [...menu];
                  tempMenu[index].status = !tempMenu[index].status;
                  setMenu(tempMenu);
                }}
                key={index}
              >
                <h2>
                  {ele.name}
                  {ele.status ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                </h2>
                {ele.status ? (
                  <span>
                    <DropdownMenuSmall />
                  </span>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        

    </>
  );
}

export default Navbar;
