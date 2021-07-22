import { useEffect, useState } from "react";
import { BsGrid, BsSearch, BsStar, BsStarFill } from "react-icons/bs";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { ChartType, StockStateType, StockType } from "../../types";
import CustomTooltip from "../CustomTooltip";
import RecentsCompanies from "../RecentsCompanies";
import { useDispatch, useSelector } from "react-redux";
import {
  addFav,
  addRecents,
  changeStockInChart,
  removeFav,
} from "../../store/actions/stock.actions";

import api from "../../services/api";
import formatUSDCurrency from "../../utils/formatUSDCurrency";

import "./styles.css";

const TOKEN = process.env.REACT_APP_IEX_TOKEN;

function Main() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");

  const [chartPoints, setChartPoints] = useState<ChartType[]>([]);

  const favorities = useSelector((state: StockStateType) => state.favorities);
  const stock = useSelector((state: StockStateType) => state.stockInChart);
  const [stockIsFav, setStockIsFav] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect(searchCompany, []);

  useEffect(() => {
    if (stock) {
      getStockDataChart(stock.symbol);

      if (favorities.some((item) => item.symbol === stock.symbol)) {
        setStockIsFav(true);
      } else {
        setStockIsFav(false);
      }
    }

    // eslint-disable-next-line
  }, [stock, favorities]);

  function searchCompany() {
    if (isLoading || stockSymbol.trim() === "") {
      return;
    }

    setIsLoading(true);

    //get stock data
    api
      .get(`/stock/${stockSymbol}/quote?token=${TOKEN}`)
      .then((res) => {
        const data = res.data as StockType;

        //insert data in chart
        dispatch(changeStockInChart(data));

        //add recents
        dispatch(addRecents(data));

        //get stock chart
        getStockDataChart(stockSymbol);

        //clear input
        setStockSymbol("");
      })
      .catch((err) => {
        switch (err.response.data) {
          case "Not found":
            alert("Empresa não encontrada");
            break;
          case "Incorrect Values":
            alert("Valor incorretos");
            break;
          case "Authorization Invalid":
            alert("Erro na autenticação.");
            break;
          case "Too Many Requests":
            alert("Muitas requisição em um curto periodo");
            break;
          case "System Error":
            alert("Erro no servidor.");
            break;
          default:
            alert(err.response.data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getStockDataChart(stockSymbol: string) {
    if (isLoading || stockSymbol.trim() === "") {
      return;
    }

    setIsLoading(true);

    api
      .get(`/stock/${stockSymbol}/chart/1d?token=${TOKEN}`)
      .then((res) => {
        const allPoints = res.data as ChartType[];

        for (let i = 0; i < allPoints.length; i++) {
          if (!allPoints[i].close) {
            if (i === 0) {
              allPoints[i] = { ...allPoints[i], close: 0 };
            } else {
              allPoints[i] = { ...allPoints[i], close: allPoints[i - 1].close };
            }
          }
        }

        setChartPoints(allPoints);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="main-component">
      <header>
        <BsGrid className="icon" />
        <h1>Dashboard</h1>
      </header>

      <form
        className="search-box"
        onSubmit={(e) => {
          e.preventDefault();
          searchCompany();
        }}
      >
        <input
          placeholder="Buscar empresa"
          value={stockSymbol}
          onChange={(event) => setStockSymbol(event.target.value)}
        />
        <button className="search-submit" type="submit">
          <BsSearch />
        </button>
      </form>

      <div className="graph-container">
        {stock && (
          <div className="company-data">
            <div className="description">
              {stockIsFav ? (
                <BsStarFill
                  className="icon-star"
                  onClick={() => dispatch(removeFav(stock))}
                />
              ) : (
                <BsStar
                  className="icon-star"
                  onClick={() => dispatch(addFav(stock))}
                />
              )}
              <div>
                <strong>{stock.symbol}</strong>
                <p>{stock.companyName}</p>
              </div>
            </div>

            <div className="status">
              <strong>
                {stock.change < 0 ? (
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
                ) : (
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
                )}
                {formatUSDCurrency(stock.latestPrice)}
              </strong>
              <p className={`${stock.change < 0 ? "negative" : "positive"}`}>
                {formatUSDCurrency(stock.change)}(
                {stock.changePercent >= 0 && "+"}
                {(stock.changePercent * 100).toFixed(2)}
                %)
              </p>
            </div>
          </div>
        )}

        <div className="company-graph">
          {chartPoints.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartPoints}>
                <CartesianGrid stroke="#aaaaaa20" />
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0047BB" stopOpacity={0.46} />
                    <stop offset="100%" stopColor="#0047BB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="close"
                  stroke="#0047BB"
                  fillOpacity={1}
                  fill="url(#color)"
                />
                <XAxis
                  dataKey="minute"
                  tickMargin={15}
                  minTickGap={100}
                  ticks={["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"]}
                />
                <YAxis
                  type="number"
                  tickCount={6}
                  domain={[
                    (dataMin: number) =>
                      (dataMin - dataMin * 0.005).toPrecision(3),
                    (dataMax: number) =>
                      (dataMax + dataMax * 0.005).toPrecision(3),
                  ]}
                />
                <Tooltip content={<CustomTooltip />} />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <label className="data-not-found">Não há dados</label>
          )}
        </div>
      </div>

      <RecentsCompanies />
    </div>
  );
}

export default Main;
