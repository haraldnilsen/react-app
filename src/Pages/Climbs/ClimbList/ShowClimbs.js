import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClimbList from "./ClimbList";

const ShowClimbs = () => {
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
      {climbs && <ClimbList climbs={climbs} title="All Climbs" />}
    </div>
  );
};

export default ShowClimbs;
