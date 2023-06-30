import { useState } from "react";
import Nav from "./Navbar.module.css";
import Listdown from "../NavbarDropItem/ListDown";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ListDowniind from "../NavbarDropItem/ListDowniind";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState([
    { name: "Product", status: false },
    { name: "EnterPrice", status: false },
    { name: "Pricing", status: false },
    { name: "Resources", status: false },
    { name: "Community", status: false },
    { name: "Login", status: false },
  ]);
  const [showHam, setShowHam] = useState(true);

  
  return (
    <>
      <div className={Nav.navBox}>
        <img
          src="data:image/png;base64,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"
          alt="Company Logo"
        />
        <ul>
          {menu.map((ele, index) => {
            return (
              <li
                key={index}
                className={Nav.navItem}
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
            className={Nav.Icon}
          >
            <GiHamburgerMenu />
          </h1>
        ) : (
          <h1
            onClick={() => {
              setShowHam(!showHam);
            }}
            className={Nav.Icon}
          >
            <AiOutlineClose />
          </h1>
        )}
        {dropDown ? (
          <div
            className={Nav.ddMenu}
            onMouseOver={() => setDropDown(true)}
            onMouseOut={() => setDropDown(false)}
          >
            <Listdown />
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
                className={Nav.smallDropDown}
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
                    <ListDowniind />
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
