import React, { useEffect } from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../Styles/App.css"

const ClimbForm = () => {
  const [climbType, setClimbType] = useState("sport");
  const [grade, setGrade] = useState("6A");
  const [date, setDate] = useState(new Date());

  const gradesList = [
    "4",
    "5",
    "6A",
    "6A+",
    "6B",
    "6B+",
    "6C",
    "6C+",
    "7A",
    "7A+",
    "7B",
    "7B+",
    "7C",
    "7C+",
    "8A",
    "8A+",
    "8B",
    "8B+",
    "8C",
    "8C+",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newclimb = { climbType, grade, date };
    console.log(newclimb);

    fetch("http://localhost:8000/climbs", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newclimb),
    }).then(() => {
      console.log("New climb added");
    });

    window.location.reload();
  };

  return (
    <div className="form" key={3}>
      <form className="p-2 m-3" onSubmit={handleSubmit}>
        <div className="formelement">
          <label className="font-bold">Type of climbing*</label>
          <select className="formelement formelement--select"
            value={climbType}
            onChange={(e) => setClimbType(e.target.value)}
          >
            <option value="sport">Sport</option>
            <option value="boulder">Boulder</option>
          </select>
        </div>
        <div className="formelement">
          <label className="font-bold">Indoor/Outdoor*</label>
          <select className="formelement formelement--select"
            value={climbType}
            onChange={(e) => setClimbType(e.target.value)}
          >
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>
        <div className="formelement">
          <label className="font-bold">Grade*</label>
          <select
            className="formelement formelement--select"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            {gradesList.map((x) => (
              <option value={x} key={x}>{x}</option>
            ))}
          </select>
        </div>
        <div className="formelement">
          <label className="font-bold">Date</label>
          <input
            className="formelement formelement--select"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className="formelement--submit bg-green-500" type="submit">Submit</button>
      </form>
    </div>
  );
};



export default ClimbForm;
