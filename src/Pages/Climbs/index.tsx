import React, { useState, useEffect } from "react";
import ClimbForm from "./ClimbForm";
import ClimbList from "./ClimbList/ClimbList";

const Climbs: React.FC = () => {
  const [climbs, setClimbs] = useState(null);

  useEffect(() => {
    // npx json-server --watch data/climbs.json --port 8000
    fetch("http://localhost:8000/climbs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClimbs(data);
      });
  }, []);

  return (
    <div className="">
      <ClimbForm />
      {/* <GradeConverter /> */}
      {climbs && <ClimbList climbs={climbs} title="All Climbs" />}
    </div>
  );
};

export default Climbs;
