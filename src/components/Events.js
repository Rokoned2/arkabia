import React from "react";
import Event from "./Event";

const Events = () => {
  const events = [
    {
      id: "1",
      title: "Presentación de empaques nueva marca",
      description: "Oficina",
      time: "8:30 - 9:30",
      participants: "",
    },
    {
      id: "2",
      title: "Reunión con el proveedor por Zoom.",
      description: "Carros de juguete para navidad",
      time: "21:00 - 22:00",
      participants: "Kristian y tú",
    },
    {
      id: "3",
      title: "Llegada a puerto del Callao",
      description: "Bicicletas eléctricas",
      time: "21:00 - 22:00",
      participants: "",
    },
  ];

  return (
    <div>
      <div className="events-info">
        <b>Para hoy</b>
        <b>+ Agregar evento</b>
      </div>
      <div className="events">
        {events.map(({ id, title, description, time, participants }) => (
          <Event
            id={id}
            title={title}
            description={description}
            time={time}
            participants={participants}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
