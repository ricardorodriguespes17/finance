import { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addFav,
  changeStockInChart,
  removeFav,
} from "../../store/actions/stock.actions";
import { StockType, StoreType } from "../../types";
import "./styles.css";

interface CompanyBoxProps {
  item: StockType;
  isOnFavList?: boolean;
}

function CompanyBox({ item, isOnFavList }: CompanyBoxProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorities = useSelector((store: StoreType) => store.stock.favorities);

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
      className={
        isOnFavList
          ? "company-box-component on-fav-list"
          : "company-box-component"
      }
      onClick={() => dispatch(changeStockInChart(item))}
    >
      {!isOnFavList && (
        <button
          className="fav-button"
          onClick={() => dispatch(isFavorite ? removeFav(item) : addFav(item))}
        >
          {isFavorite ? (
            <BsStarFill className="star-icon" />
          ) : (
            <BsStar className="star-icon" />
          )}
        </button>
      )}

      <div className="description">
        <h3>{item.symbol}</h3>
        <p>{item.companyName}</p>
      </div>

      <div className="status">
        <p className={item.changePercent < 0 ? "negative" : "positive"}>
          {`${item.changePercent >= 0 ? "+" : ""} ${(
            item.changePercent * 100
          ).toFixed(2)}%`}
        </p>

        {item.changePercent >= 0 ? (
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
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4L5.43713 8.56384C5.77925 8.91574 6.33313 8.91574 6.67438 8.56384L8.54775 6.63697C8.88988 6.28507 9.44375 6.28507 9.785 6.63697L15 12"
              stroke="#D64B45"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 12H15V10"
              stroke="#D64B45"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default CompanyBox;
