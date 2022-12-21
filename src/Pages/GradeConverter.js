import React, { useState, useEffect} from "react";

export const GradeConverter = () => {

    const [climbType, setClimbType] = useState("sport");
    const [grade, setGrade] = useState(null);
    const [gradeType, setGradeType] = useState("French");
    const [frenchGrades, setFrenchGrades] = useState(null);
    const [nordicGrades, setNordicGrades] = useState(null);
    const [vGrades, setVGrades] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    const selectGrades = () => {
        if (gradeType == "V-grade") {
            return vGrades;
        } else if (gradeType == "Norwegian") {
            return nordicGrades;
        } else {
            return frenchGrades;
        }
    }

    const selectClimb = () => {
        if (climbType == "sport") {
            return ["French", "Norwegian"];
        } else {
            return ["French", "V-grade"];
        }
    }

    useEffect(() => {
        // npx json-server --watch data/grades.json --port 8080
        fetch("http://localhost:8080/frenchGradeValue")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setFrenchGrades(data);
            setIsLoaded(false);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        });

        fetch("http://localhost:8080/nordicGradeValue")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setNordicGrades(data);
            setIsLoaded(false);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        });

        fetch("http://localhost:8080/vGradeValue")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setVGrades(data);
            setIsLoaded(true);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) { //hvis data laster ...
        return <div>Loading...</div>
      } else {
    return (
        <div className="GradeConverter">
            <h2>Grade Converter</h2>
            <form className="converter">
                <select onChange={(e) => setClimbType(e.target.value)}>
                    <option value="sport">Sport</option>
                    <option value="bouldering">Bouldering</option>
                </select>
                <select onChange={(e) => setGradeType(e.target.value)}>
                    {selectClimb().map(x => <option value={x} key={x}>{x}</option>)}
                </select>
                <select >
                    {selectGrades().map(x => <option value={x.grade} key={x.grade}>{x.grade}</option>)}
                </select>
            </form>
        </div>
    )
}
}

export default GradeConverter;