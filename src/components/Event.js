import React from "react";

const Event = ({ id, title, description, time, participants }) => {
  return (
    <div className="event" key={id}>
      <div className="event__color event__color--blue"></div>
      <div className="event__info">
        <b className="event__title">{title}</b>
        <div>{description}</div>
        <div>{time}</div>
        <div>{participants && participants}</div>
      </div>
    </div>
  );
};

export default Event;
