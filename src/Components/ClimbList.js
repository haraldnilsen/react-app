import React from "react";
import Moment from "moment";
import { format } from "date-fns";

const ClimbList = (props) => {
  const climbs = props.climbs;
  const title = props.title;
  const date = props.date;
  const id = props.id;

  const formatString = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${day}.${month}.${year}`;
  };

  const handleClick = (id) => {
    fetch("http://localhost:8000/climbs/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
    window.location.reload();
  };

  return (
    <div className="climbList" key={id}>
      <h1>{title}</h1>
      {climbs.map((climb) => (
        <div className="climb-list" key={climb.id}>
          <h2>
            {climb.climbType.charAt(0).toUpperCase() + climb.climbType.slice(1)}
          </h2>
          <p>Grade = {climb.grade}</p>
          <p>When = {formatString(climb.date)}</p>
          <button onClick={() => handleClick(climb.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ClimbList;
