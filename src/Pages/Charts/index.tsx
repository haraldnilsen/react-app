import React, { useState, useEffect } from "react";
import SubNavBar from "../../Components/SubNavbar";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import ChartComponent from "./ChartComponent/ChartComponent";

const Charts: React.FC = () => {
    const [climbs, setClimbs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [grades, setGrades] = useState(null);

    const pages = ["stats"]

    useEffect(() => {
        // npx json-server --watch data/climbs.json --port 8000
    
        Promise.all([
          fetch("http://localhost:8000/climbs"),
          fetch("http://localhost:8080/frenchGradeValue")
        ])
        .then(([resClimbs, resGrades]) => 
          Promise.all([resClimbs.json(), resGrades.json()])
        )
        .then(([dataClimbs, dataGrades]) => {
          setClimbs(dataClimbs);
          setGrades(dataGrades);
          setIsLoaded(true);
        }, (error) => {
          setError(error);
          setIsLoaded(true);
        });
      }, []);
    
      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) { //hvis data laster ...
        return <div>Loading...</div>
      } else {
    return (
        <div className="">
            <SubNavBar data={["/stats", "/charts"]}/>
            <ChartComponent tittel="All boulders" climbs={climbs.filter(x => x.climbType === "boulder")}/>
            <ChartComponent navn="Boulder" navnet="Boulder" tittel="All sport-routes" climbs={climbs.filter(x => x.climbType === "sport")}/>
        </div>
    );
}
}


export default Charts;