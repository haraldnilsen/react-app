import React, { useState, useEffect } from "react";
import StatNavBar from "../Components/Stats/StatNavBar";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export const Charts = () => {
    const [climbs, setClimbs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [grades, setGrades] = useState(null);

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
            <StatNavBar/>
            <ChartComponent name="climbs" climbs={climbs}/>
        </div>
    );
}
}

const ChartComponent = (props) => {
    const name = props.name;
    const climbs = props.climbs;
    const grades = props.grades;

    function filterData () {
        let resultat = new Map();
        let resultatet = new Map();

        //creates a map with the grades as keys and amount of climbs as value
        for (let i = 0; i < climbs.length; i++) {
            let grade = climbs[i].grade;
            if (resultat.has(grade) === false) {
                resultat.set(grade, 1);
            } else {
                resultat.set(grade, resultat.get(grade) + 1)
            }
        } 
        return resultat;
    }

    function sortData (climbMap) {

    }
    
    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: name
        },
        xAxis: {
            categories: [... filterData().keys()]
        },
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        series: [{
            data: [... filterData().values()]
        }]
        
    }
    
    return (
        <div>
            <HighchartsReact 
            highcharts={Highcharts}
            options={options}/>
        </div>
    )
}


export default Charts;