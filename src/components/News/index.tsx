import { useEffect, useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NewsType, StoreType } from "../../types";
import formatDate from "../../utils/formatDate";
import { TOKEN } from "../../services/api";

import api from "../../services/api";

import "./styles.css";

export default function News() {
  const stock = useSelector((store: StoreType) => store.stock.stockInChart);

  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    loadNews();
  });

  async function loadNews() {
    try {
      const { data } = await api.get(`/stock/${stock?.symbol}/news`, {
        params: {
          token: TOKEN,
        },
      });

      setNews(data);
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <div className="news-component">
      <div className="news-header">
        <HiOutlineNewspaper />
        <h2>Notícias</h2>
      </div>

      <div className="news-list">
        {news.map((item) => (
          <div className="news-content">
            <div className="news-image">
              <img src={item.image} alt="" />
            </div>

            <div className="details">
              <h3>{item.headline}</h3>
              <p className="summary">{item.summary}</p>
              <p className="date">{formatDate(item.datetime)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
