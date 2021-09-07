import React, { useState } from "react";
import Popup from "../components/Popup";
import PopupInputOperation from "../components/PopupInputOperation";

const BtnAddOperation = ({ refreshFunction }) => {
  const [options, showOptions] = useState(false);
  const [operationType, setOperationType] = useState("");
  const [popupInputActive, setPopupInputActive] = useState(false);
  const [operationTitle, setOperationTitle] = useState("");
  console.log("operationType", operationType);
  console.log("operationTitle", operationTitle);

  const createOperation = (operationTitle, operationType) => {
    console.log("operationTitle, operationType", operationTitle, operationType);
    refreshFunction(operationTitle, operationType);
  };

  return (
    <div className="actions-add-operation">
      <div
        className="btn btn-add-operation"
        onClick={() => {
          if (operationType) return;
          showOptions(!options);
        }}
      >
        + Agregar Operación
      </div>
      {options && (
        <Popup
          showPopupInput={setPopupInputActive}
          showOptions={showOptions}
          refreshFunction={setOperationType}
        />
      )}
      {popupInputActive && (
        <PopupInputOperation
          refreshFunction={createOperation}
          operationType={operationType}
          setOperationTitle={setOperationTitle}
        />
      )}
    </div>
  );
};

export default BtnAddOperation;