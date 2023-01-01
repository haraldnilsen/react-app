import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../Styles/Stats.css"
import convertGrade from "./GradeConverter";
import StatNavBar from "../Components/Stats/StatNavBar";

export const Stats = () => {
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

  //Finds total amount of routes
  function findAmountOfClimbs (climbtype = "all") {
    let list = climbs;
    if (climbtype == "boulder") {
      list = climbs.filter(x => x.climbType == "boulder");
    }
    if (climbtype == "sport") {
      list = climbs.filter(x => x.climbType == "sport");
    }
    return list.length;
  }

  //Finds the highest graded route of all routes
  function findBestClimb (climbtype = "all") {
    let list = climbs;

    if (climbtype == "boulder") {
      list = climbs.filter(x => x.climbType == "boulder");
    }
    if (climbtype == "sport") {
      list = climbs.filter(x => x.climbType == "sport");
    }

    if (list.length === 0) {
      return {"grade": "No sends registered. Go out and send!"};
    }

    let result = list[0];
    
    for (let i = 0; i < list.length; i++) {
      let climb = list[i];
      let oldHighest = grades.find(c => c.grade == result.grade).value;
      let newHighest = grades.find(c => c.grade == climb.grade).value;
      if (newHighest > oldHighest) {
        result = climb;
      }
    }

    return result;
  }

  // Hvis det oppstår error under lasting av data
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) { //hvis data laster ...
    return <div>Loading...</div>
  } else {
  return (
    
    <div>
        <StatNavBar />
        <div className="flex flex-col items-center">

          <h2 className="font-bold text-3xl text-green-700 p-6">All about your sends!</h2>
          <StatElement func={findBestClimb} data="grade" type="all" title="Highest grade climbed"/>
          <StatElement func={findAmountOfClimbs} data="" type="all" title="Total amount of sends:"/>

          <h2 className="font-bold text-xl text-green-700 p-6">Boulders</h2> 
          <div className="flex">
            <StatElement func={findBestClimb} data="grade" type="boulder" title="Best boulder climbed:"/>
            <StatElement func={findAmountOfClimbs} data="" type="boulder" title="Total boulders climbed"/>

          </div>

          <h2 className="font-bold text-xl text-green-700 p-6">Sport-routes</h2> 
          <div className="flex">
            <StatElement func={findBestClimb} data="grade" type="sport" title="Best sport-route climbed:"/>
            <StatElement func={findAmountOfClimbs} data="" type="sport" title="Total sport-routes climbed"/>
          </div>
        </div>
    </div>
  );
}
};

const StatElement = (props) => {
  let test;
  function propData () {
    if (props.data === "grade") {
      test = convertGrade("sport", "french", props.func(props.type).grade);
      // return test;
      return props.func(props.type).grade;
    } else {
      return props.func(props.type);
    }
  }
  return (
    <div className="stat">
      <h3 className="stat--h3">{props.title}</h3>
      <p>{propData()}</p>
    </div>
)
};

export default Stats;
