import React, { useState, useEffect } from "react";
import { SubNavbar } from "../../components";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import ChartComponent from "./ChartComponent";
import { fetchGyms } from "../../api/getGyms";

const Charts: React.FC = () => {
  const [climbs, setClimbs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleFetchClimbs = async () => {
      const response = await fetchGyms();
      if (response) {
        setClimbs(response);
        setIsLoaded(true);
      } else {
        setError("Error");
        setIsLoaded(true);
      }
    };

    handleFetchClimbs();

    // Promise.all([fetch("http://localhost:8000/climbs")])
    //   .then(([resClimbs]) => Promise.all([resClimbs.json()]))
    //   .then(
    //     ([dataClimbs]) => {
    //       setClimbs(dataClimbs);
    //       setIsLoaded(true);
    //     },
    //     (error) => {
    //       setError(error);
    //       setIsLoaded(true);
    //     }
    //   );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    //hvis data laster ...
    return <div>Loading...</div>;
  } else {
    return (
      <div className="">
        <SubNavbar data={["/stats", "/charts"]} />
        <ChartComponent
          name="Boulder"
          chartTitle="All Boulders"
          climbs={climbs.filter((x) => x.climbType === "boulder")}
        />
        <ChartComponent
          name="Boulder"
          chartTitle="All sport-routes"
          climbs={climbs.filter((x) => x.climbType === "sport")}
        />
      </div>
    );
  }
};

export default Charts;
