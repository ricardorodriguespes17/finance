import { BsGridFill } from "react-icons/bs";
import { SiMonero } from "react-icons/si";
import { BiMoon, BiSun } from "react-icons/bi";

import "./styles.css";
import { useEffect, useState } from "react";

function SideBar() {
  const [isDarkTheme, setisDarkTheme] = useState(false);

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

      <button className="change-theme" onClick={() => setTheme()}>
        {isDarkTheme ? <BiSun /> : <BiMoon />}
      </button>
    </div>
  );
}

export default SideBar;
