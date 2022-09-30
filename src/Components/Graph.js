import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const Graph = () => {
  const [climbs, setClimbs] = useState(null);
  const [grades, setGrades] = useState(null);

  Object.getKeyByValue = function (value) {
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        if (this[prop] === value) return prop;
      }
    }
  };

  useEffect(() => {
    // npx json-server --watch data/climbs.json --port 8000
    fetch("http://localhost:8000/grades")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGrades(data);
      });

    fetch("http://localhost:8000/climbs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClimbs(data);
      });
  }, []);

  return (
    <div className="Graph">
      <div className="Line">
        <Line
          data={{
            labels: [1, 2, 3, 4, 5],
            datasets: [
              {
                data: [4, 5, 6, 8, 9],
                fill: false,
                borderColor: "#46c7a2",
              },
            ],
          }}
          options={{
            // maintainAspectRatio: false,
            responsive: true,
            scales: {
              y: {
                min: 0,
                max: 10,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
