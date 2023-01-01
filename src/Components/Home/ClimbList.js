import { React, useState } from "react";
import Moment from "moment";
import { format } from "date-fns";

const ClimbList = (props) => {
  const climbs = props.climbs;
  const title = props.title;
  const date = props.date;
  const id = props.id;
  const grade = props.grade;
  
  const [sortedBy, setSortedBy] = useState("added");

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

  const sortClimbs = () => {
    console.log(sortedBy);
  }

  return (
    <div className="ml-64 p-4" key={id}>
      <h1 className="text-4xl text-center font-bold text-primary py-6">{title}</h1>
      <form>
        <div className="pt-2">
          <label for="sort">Sorted by: </label>
          <select name="sort" onChange={e => setSortedBy(e.target.value)}>
            <option value="added">Time added</option>
            <option value="grade">Grade</option>
            <option value="date">Date</option>
          </select>
        </div>
      </form>
      {climbs.map((climb) => (
        <div className="border border-b-slate-300 p-6 my-2" key={climb.id}>
          <h2 className="font-bold">
            {climb.climbType.charAt(0).toUpperCase() + climb.climbType.slice(1)}
          </h2>
          <p>Grade: {climb.grade}</p>
          <p>When: {formatString(climb.date)}</p>
          <button className="formelement--select" onClick={() => handleClick(climb.id)}>Delete</button>
        </div>
      ))}

    </div>
  );
};

export default ClimbList;
