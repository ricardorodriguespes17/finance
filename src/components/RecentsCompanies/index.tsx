import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { StockStateType } from "../../types";
import CompanyBox from "../CompanyBox";

import "./styles.css";

function RecentsCompanies() {
  const recentsCompanies = useSelector(
    (state: StockStateType) => state.recents
  );

  function changeScroll(position: number) {
    const element = document.getElementById("recents-companies");

    if (element) {
      element.scrollTo({
        left: element.scrollLeft + position,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="recents-companies-component">
      <div className="top">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M21 17C21 19.209 19.209 21 17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3H17C19.209 3 21 4.791 21 7V9"
            stroke="#0047BB"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 14L10 10L14 14L21 9"
            stroke="#0047BB"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2>Empresas recentes</h2>

        <div className="arrows">
          <BsChevronLeft className="icon" onClick={() => changeScroll(-350)} />
          <BsChevronRight className="icon" onClick={() => changeScroll(350)} />
        </div>
      </div>

      <div id="recents-companies" className="recents-companies">
        {recentsCompanies.map((item) => (
          <CompanyBox item={item} />
        ))}
      </div>
    </div>
  );
}

export default RecentsCompanies;
