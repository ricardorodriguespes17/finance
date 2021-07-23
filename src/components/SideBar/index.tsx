import { BsGridFill, BsStar, BsStarFill } from "react-icons/bs";
import { SiMonero } from "react-icons/si";
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../types";
import { hideBar, showBar } from "../../store/actions/profileBar.actions";

import "./styles.css";

function SideBar() {
  const [isDarkTheme, setisDarkTheme] = useState(false);

  const dispatch = useDispatch();

  const isShowProfileBar = useSelector(
    (store: StoreType) => store.profileBar.isShowBar
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme && theme === "dark") {
      setisDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.className = "dark-theme";
    } else {
      document.body.className = "default-theme";
    }
  }, [isDarkTheme]);

  function setTheme() {
    setisDarkTheme(!isDarkTheme);
    localStorage.setItem("theme", !isDarkTheme ? "dark" : "light");
  }

  return (
    <div className="side-bar-component">
      <SiMonero className="logo" />

      <ul className="options">
        <li>
          <div className="rectangle" />

          <BsGridFill className="icon" />
        </li>
      </ul>

      <button
        id="open-close-bar"
        className="button-bottom-bar"
        onClick={() => dispatch(isShowProfileBar ? hideBar() : showBar())}
      >
        {isShowProfileBar ? <BsStarFill /> : <BsStar />}
      </button>

      <button className="button-bottom-bar" onClick={() => setTheme()}>
        {isDarkTheme ? <BiSun /> : <BiMoon />}
      </button>
    </div>
  );
}

export default SideBar;
