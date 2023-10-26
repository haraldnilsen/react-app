import React, { useState } from "react";
import { GradeElement } from "../types/response";

function ConvertGrade(
  climbtype: string,
  gradetype: string,
  gradevalue: number
) {
  const [climbType, setClimbType] = useState("sport");

  const [gradeType, setGradeType] = useState("French");
  const [frenchGrades, setFrenchGrades] = useState<GradeElement[]>(null);
  const [nordicGrades, setNordicGrades] = useState<GradeElement[]>(null);
  const [vGrades, setVGrades] = useState<GradeElement[]>(null);

  const [gradeValue, setGradeValue] = useState(4);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  Promise.all([
    fetch("http://localhost:8080/frenchGradeValue"),
    fetch("http://localhost:8080/nordicGradeValue"),
    fetch("http://localhost:8080/vGradeValue"),
  ])
    .then(([resFrench, resNordic, resV]) =>
      Promise.all([resFrench.json(), resNordic.json(), resV.json()])
    )
    .then(
      ([dataFrenchGrades, dataNordicGrades, dataVGrades]) => {
        setFrenchGrades(dataFrenchGrades);
        setNordicGrades(dataNordicGrades);
        setVGrades(dataVGrades);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );

  let result = [];

  if (climbtype == "sport") {
    if (gradetype != "French") {
      result.push(
        "French: " + frenchGrades.find((c) => c.value == gradevalue).grade
      );
    }
    if (gradetype != "Norwegian") {
      result.push(
        "Norwegian: " + nordicGrades.find((c) => c.value == gradevalue).grade
      );
    }
  }
  if (climbtype == "bouldering") {
    if (gradetype != "French") {
      result.push(
        "French: " + frenchGrades.find((c) => c.value == gradevalue).grade
      );
    }
    if (gradetype != "V-grade") {
      result.push(
        "V-grade: " + vGrades.find((c) => c.value == gradevalue).grade
      );
    }
  }

  return result;
}

export default ConvertGrade;
