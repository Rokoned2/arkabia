import React from "react";
import CheckInvert from "../imgs/check-invert.svg";
import Check from "../imgs/check.svg";

const Popup = ({ refreshFunction, showOptions, showPopupInput }) => {
  return (
    <div className="popup">
      <b>Elige una opción</b>
      <div
        className="btn btn--yellow"
        onClick={() => {
          refreshFunction("importación");
          showOptions(false);
          showPopupInput(true);
        }}
      >
        <img className="btn__icon" src={Check} alt="" />
        <b>Importación</b>
      </div>
      <div
        className="btn btn--yellow"
        onClick={() => {
          refreshFunction("exportación");
          showOptions(false);
          showPopupInput(true);
        }}
      >
        <img className="btn__icon" src={CheckInvert} alt="" />
        <b>Exportación</b>
      </div>
    </div>
  );
};

export default Popup;
