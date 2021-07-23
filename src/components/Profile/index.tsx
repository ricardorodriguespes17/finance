import { CgTrash } from "react-icons/cg";
import { BsCaretDownFill, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ProfileBarStateType, StockStateType, StoreType } from "../../types";
import CompanyBox from "../CompanyBox";
import {
  changeStockInChart,
  removeFav,
} from "../../store/actions/stock.actions";

import "./styles.css";

function Profile() {
  const favCompanies = useSelector(
    (store: StoreType) => store.stock.favorities
  );

  const dispatch = useDispatch();

  const isShow = useSelector((store: StoreType) => store.profileBar.isShowBar);

  return (
    <div className={isShow ? "profile-component active" : "profile-component"}>
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
        {favCompanies &&
          favCompanies.map((item) => (
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
