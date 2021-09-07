import React from "react";
import SearchIcon from "../imgs/Search.svg";
import ChevDown from "../imgs/chev-down.svg";
import FiltersMenu from "../imgs/adjusts.svg";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__options">
        <b className="filters__option">
          Preferencias
          <img src={ChevDown} alt="" />
        </b>
        <div className="filters__option">
          Ordenar por <b>Relevancia</b>
          <img src={ChevDown} alt="" />
        </div>
      </div>
      <div className="filters__search">
        <img src={SearchIcon} alt="" />
        <input type="text" className="filters__search-input" />
      </div>

      <div className="filters__menu">
        <img src={FiltersMenu} alt="" />
        <span>Filtros</span>
      </div>
    </div>
  );
};

export default Filters;
