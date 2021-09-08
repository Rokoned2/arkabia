import React, { useState } from "react";
import "./sass/main.css";
import Header from "./shared/Header";
import Calendar from "./components/Calendar";
import Operation from "./components/Operation";
import BtnAddOperation from "./components/BtnAddOperation";
import Events from "./components/Events";
import Filters from "./components/Filters";
import perfilImg1 from "./imgs/perfil-img1.png";
import perfilImg2 from "./imgs/perfil-img2.png";
import operationsData from "./shared/data";

const App = () => {
  const [operations, setOperations] = useState(operationsData);

  const addOperation = (operationTitle, operationType) => {
    console.log("operationTitle, operationType", operationTitle, operationType);
    setOperations((state) => [
      {
        title: operationTitle,
        type: operationType,
        state: "Investigación",
        date: "07/09/2021",
      },
      ...state,
    ]);
  };

  return (
    <div>
      <Header />
      <div className="main-panel">
        <div className="operations-view">
          <div className="operations-view__tabs">
            <b className="operations-view__tab">Órdenes compradas</b>
            <b className="operations-view__tab">Calendario</b>
          </div>

          <div className="options">
            <Filters />
            <div>
              <BtnAddOperation refreshFunction={addOperation} />
            </div>
          </div>
          <div className="operations">
            {operations.length !== 0 ? (
              operations.map(({ id, title, type, state, date }) => (
                <Operation
                  id={id}
                  title={title}
                  type={type}
                  state={state}
                  date={date}
                />
              ))
            ) : (
              <b>No tienes ninguna operación activa.</b>
            )}
          </div>
        </div>
        <div className="schedule">
          <Calendar />
          <Events />
        </div>
      </div>
    </div>
  );
};

export default App;
