import React, { useState } from "react";
import leftArrow from "../imgs/left-arrow.svg";

const PopupInputOperation = ({
  refreshFunction,
  operationType,
  setOperationTitle,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;
    setOperationTitle(value);
    refreshFunction();
  };

  return (
    <div className="popup-input-operation">
      <div className="popup-input-operation__header">
        <img src={leftArrow} alt="" />
        <h3> Colocar un título a tu {operationType}</h3>
      </div>
      <div className="popup-input-operation__form">
        <input
          className="popup-input-operation__input"
          type="text"
          placeholder="Ej: Máquina para tejer"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="btn popup-input-operation__btn" onClick={handleSubmit}>
        Crear
      </div>
    </div>
  );
};

export default PopupInputOperation;
