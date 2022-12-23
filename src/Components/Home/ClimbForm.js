import React, { useEffect } from "react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    <div className="ClimbForm" key={3}>
      <form className="form" onSubmit={handleSubmit}>
        <label>Type of climbing*</label>
        <select
          value={climbType}
          onChange={(e) => setClimbType(e.target.value)}
        >
          <option value="sport">Sport</option>
          <option value="boulder">Boulder</option>
        </select>
        <label>Grade*</label>
        <select
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          {gradesList.map((x) => (
            <option value={x} key={x}>{x}</option>
          ))}
        </select>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ClimbForm;
