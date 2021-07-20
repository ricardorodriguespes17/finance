import { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFav, changeStockInChart } from "../../store/actions/stock.actions";
import { StockStateType, StockType } from "../../types";
import "./styles.css";

interface CompanyBoxProps {
  item: StockType;
}

function CompanyBox({ item }: CompanyBoxProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorities = useSelector((state: StockStateType) => state.favorities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (favorities.some((stock) => stock.symbol === item.symbol)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorities, item]);

  return (
    <div
      className="company-box-component"
      onClick={() => dispatch(changeStockInChart(item))}
    >
      {!isFavorite && (
        <button className="fav-button" onClick={() => dispatch(addFav(item))}>
          <BsStar className="star-icon" />
        </button>
      )}

      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="36" height="36" rx="18" fill="#3C5A9A" />
        <path
          d="M25.8526 7.52515H21.8652C19.4989 7.52515 16.867 8.52037 16.867 11.9504C16.8785 13.1455 16.867 14.2901 16.867 15.5783H14.1295V19.9344H16.9517V32.4749H22.1375V19.8517H25.5603L25.87 15.5661H22.0482C22.0482 15.5661 22.0567 13.6597 22.0482 13.1061C22.0482 11.7506 23.4586 11.8282 23.5434 11.8282C24.2145 11.8282 25.5195 11.8302 25.8545 11.8282V7.52515H25.8526Z"
          fill="white"
        />
        <path
          d="M20 36C11.1634 36 4 28.8366 4 20H0C0 31.0457 8.95431 40 20 40V36ZM36 20C36 28.8366 28.8366 36 20 36V40C31.0457 40 40 31.0457 40 20H36ZM20 4C28.8366 4 36 11.1634 36 20H40C40 8.95431 31.0457 0 20 0V4ZM20 0C8.95431 0 0 8.95431 0 20H4C4 11.1634 11.1634 4 20 4V0Z"
          fill="#3C5A9A"
          fill-opacity="0.5"
        />
      </svg>

      <div className="description">
        <h3>{item.symbol}</h3>
        <p>{item.companyName}</p>
      </div>

      <div className="status">
        <p>
          {`${item.changePercent >= 0 ? "+" : ""} ${item.changePercent.toFixed(
            2
          )}%`}
        </p>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12L5.43713 7.43616C5.77925 7.08426 6.33313 7.08426 6.67438 7.43616L8.54775 9.36303C8.88988 9.71493 9.44375 9.71493 9.785 9.36303L15 4"
            stroke="#79C300"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 4H15V6"
            stroke="#79C300"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CompanyBox;