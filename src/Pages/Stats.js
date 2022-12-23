import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const Stats = () => {
  const [climbs, setClimbs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [grades, setGrades] = useState(null);

  useEffect(() => {
    // npx json-server --watch data/climbs.json --port 8000

    fetch("http://localhost:8000/climbs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClimbs(data);
      }, (error) => {
        setError(error);
        setIsLoaded(true);
      });

      // npx json-server --watch data/grades.json --port 8080
      fetch("http://localhost:8080/frenchGradeValue")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGrades(data);
        setIsLoaded(true);
      }, (error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  //Finds the highest graded route of all routes
  function findBestClimb () {
    if (climbs.length === 0) {
      return "No sends registered. Go out and send!";
    }

    let result = climbs[0];

    for (let i = 0; i < climbs.length; i++) {
      let climb = climbs[i];
      let oldHighest = grades.find(c => c.grade == result.grade).value;
      let newHighest = grades.find(c => c.grade == climb.grade).value;
      if (newHighest > oldHighest) {
        result = climb;
      }
    }

    const { grade, date } = result;
    return `${grade}. Date of ascend: ${date}`;
  }

  // Hvis det oppstår error under lasting av data
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) { //hvis data laster ...
    return <div>Loading...</div>
  } else {
  return (
    <div className="Stats">
        <h2>All about your sends!</h2>
        <div className="bestClimb">
          <h3>Highest grades climbed:</h3>
          <p>{findBestClimb()}</p>
        </div>
        <div className="amountOfClimbs">
          <h3>Amount of sends:</h3>
          <p>{climbs.length}</p>
        </div>
    </div>
  );
}
};

export default Stats;
