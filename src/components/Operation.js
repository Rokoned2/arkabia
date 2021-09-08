import React, { useState } from "react";
import checkIcon from "../imgs/check.svg";
import factory from "../imgs/factory.svg";
import minus from "../imgs/minus.svg";
import ChevDown from "../imgs/chev-down.svg";

const Operation = ({ id, title, type, state, date }) => {
  const [open, setOpen] = useState(false);

  return (
    <table className="operation" key={id}>
      <tr>
        <th colSpan="4" className="operation__main-header">
          <div className="operation__main-info">
            <img className="operation__check-icon" src={checkIcon} alt="" />
            <span>
              <p>{title}</p>
              <div>{type}</div>
            </span>
          </div>
        </th>
        <th className="operation__state">
          <div className="operation__state-info">
            <img className="operation__state-img" src={factory} alt="" />
            <span>
              Mi carga está en
              <div>{state}</div>
            </span>
          </div>
        </th>
        <th className="operation__date">{date}</th>
        <th className="operation__toggle-btn" onClick={() => setOpen(!open)}>
          {open ? <img src={minus} alt="" /> : <img src={ChevDown} alt="" />}
        </th>
      </tr>
      {open && (
        <>
          <tr>
            <th>Equipo</th>
            <th>Órden</th>
            <th>Turno</th>
            <th>Precio</th>
            <th>Último mensaje</th>
          </tr>
          <tr>
            <td>DeChinaAPeru.com</td>
            <td>
              <div>#3275139042421</div>
              Información de pr...
            </td>
            <td>Eloy</td>
            <td>PEN S/ 200.00</td>
            <td colSpan="3">Victor: Completa el paso 1 requeri...</td>
          </tr>
          <tr>
            <td>Grupo Aduan Agencia de Aduana</td>
            <td>
              <div>#3275139042421</div>
              Agenciamiento de...
            </td>
            <td>Julissa</td>
            <td>USD $ 8,331.79</td>
            <td colSpan="3">Julissa: Gracias por aceptar la cotizac...</td>
          </tr>
        </>
      )}
    </table>
  );
};

export default Operation;
