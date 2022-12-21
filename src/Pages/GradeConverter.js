import React, { useState, useEffect} from "react";

export const GradeConverter = () => {

    const [climbType, setClimbType] = useState("sport");
    const [gradeType, setGradeType] = useState("french");
    const [frenchGrades, setFrenchGrades] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClimbTypeChange = (e) => {
        setClimbType(e.target.value);
    }

    const handleGradeTypeChange = (e) => {
        setGradeType(e.target.value);
    }

    const selectGrade = () => {
        if (climbType == "sport") {
            return ["French", "Norwegian", "American"];
        } else {
            return ["French", "V-grade"];
        }
    }

    const [grades, setGrades] = useState(null);

    useEffect(() => {

        // npx json-server --watch data/grades.json --port 8080
        fetch("http://localhost:8080/frenchGradeValue")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setFrenchGrades(data);
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
                <select onChange={(e) => handleClimbTypeChange(e)}>
                    <option value="sport">Sport</option>
                    <option value="bouldering">Bouldering</option>
                </select>
                <select>
                    {selectGrade().map(arrayItem => <option value={arrayItem} key={arrayItem}>{arrayItem}</option>)}
                </select>
                <select>
                {frenchGrades.map((x) => (
                    <option value={x.grade} key={x.grade}>{x.grade}</option>
                 ))}
                </select>
            </form>
        </div>
    )
}
}

export default GradeConverter;