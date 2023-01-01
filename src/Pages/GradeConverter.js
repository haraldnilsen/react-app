import React, { useState, useEffect} from "react";
import convertGrade from "../util/convertGrade";

export const GradeConverter = () => {

    const [climbType, setClimbType] = useState("sport");
    
    const [gradeType, setGradeType] = useState("French");
    const [frenchGrades, setFrenchGrades] = useState(null);
    const [nordicGrades, setNordicGrades] = useState(null);
    const [vGrades, setVGrades] = useState(null);

    const [gradeValue, setGradeValue] = useState(4);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:8080/frenchGradeValue"),
            fetch("http://localhost:8080/nordicGradeValue"),
            fetch("http://localhost:8080/vGradeValue")
        ])
        .then(([resFrench, resNordic, resV]) =>
            Promise.all([resFrench.json(), resNordic.json(), resV.json()])
        )
        .then(([dataFrenchGrades, dataNordicGrades, dataVGrades]) => {
            setFrenchGrades(dataFrenchGrades);
            setNordicGrades(dataNordicGrades);
            setVGrades(dataVGrades);
            setIsLoaded(true);
        }, (error) => {
            setError(error);
            setIsLoaded(true);
        });
    }, []);

    const selectGrades = () => {
        return gradeType == "V-grade" ? vGrades
            : gradeType == "Norwegian" ? nordicGrades
            : frenchGrades;
    }

    const selectClimb = () => {
        // if sport -> french, norwegian else -> french, v-grade
        return climbType == "sport" ? ["French", "Norwegian"] : ["French", "V-grade"];
    }

    const convertGrade = (climbtype, gradetype, gradevalue) => {
        let result = [];

        if (climbtype == "sport") {
            if (gradetype != "French") {result.push("French: " + frenchGrades.find(c => c.value == gradevalue).grade)}
            if (gradetype != "Norwegian") {result.push("Norwegian: " + nordicGrades.find(c => c.value == gradevalue).grade)}
        } 
        if (climbtype == "bouldering") {
            if (gradetype != "French") {result.push("French: " + frenchGrades.find(c => c.value == gradevalue).grade)}
            if (gradetype != "V-grade") {result.push("V-grade: " + vGrades.find(c => c.value == gradevalue).grade)}
        }

        return result;
    }

    if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) { //hvis data laster ...
        return <div>Loading...</div>
      } else {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-max p-10 mt-12 border">
                <h2 className="font-bold text-xl text-green-700 border-b-2">Grade Converter</h2>
                <form className="py-3">
                    <select className="formelement--select" onChange={(e) => setClimbType(e.target.value)}>
                        <option value="sport">Sport</option>
                        <option value="bouldering">Bouldering</option>
                    </select>
                    <select className="formelement--select" onChange={(e) => setGradeType(e.target.value)}>
                        {selectClimb().map(x => <option value={x} key={x}>{x}</option>)}
                    </select>
                    <select className="formelement--select" onChange={(e) => setGradeValue(e.target.value)}> 
                        {selectGrades().map(x => <option value={x.value} key={x.grade}>{x.grade}</option>)}
                    </select>
                </form>
                <p>Is the same as:</p>
                {convertGrade(climbType, gradeType, gradeValue).map(c => <p key={c}>{c}</p>)}
            </div>
        </div>
    )
}
}



export default GradeConverter;