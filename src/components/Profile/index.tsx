import { CgTrash } from "react-icons/cg";
import { BsCaretDownFill, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { StockStateType } from "../../types";

import "./styles.css";
import {
  changeStockInChart,
  removeFav,
} from "../../store/actions/stock.actions";
import CompanyBox from "../CompanyBox";

function Profile() {
  const favCompanies = useSelector((state: StockStateType) => state.favorities);

  const dispatch = useDispatch();

  return (
    <div className="profile-component">
      <div className="user-data">
        <img src="/assets/profile.png" alt="João da Silva Almeida Magalhães" />
        <h2>João da Silva Almeida Magalhães</h2>

        <BsCaretDownFill className="arrow" />
      </div>

      <div className="box-title">
        <BsStarFill className="icon" />

        <h2>Empresas favoritas</h2>
      </div>

      <div className="fav-list">
        {favCompanies.map((item) => (
          <div
            className="fav-item"
            onClick={() => dispatch(changeStockInChart(item))}
          >
            <CompanyBox item={item} isOnFavList={true} />

            <CgTrash
              className="delete-icon"
              onClick={() => dispatch(removeFav(item))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
