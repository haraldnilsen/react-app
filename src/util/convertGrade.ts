import React, { useEffect, useState } from "react";
import { GradeElement } from "../types/response";
import { fetchGrades } from "../api/getGrades";

function ConvertGrade(
  climbtype: string,
  gradetype: string,
  gradevalue: number
) {
  const [frenchGrades, setFrenchGrades] = useState<GradeElement[]>(null);
  const [nordicGrades, setNordicGrades] = useState<GradeElement[]>(null);
  const [vGrades, setVGrades] = useState<GradeElement[]>(null);

  useEffect(() => {
    const handleFetchGyms = async () => {
      try {
        const frenchResponse = await fetchGrades("frenchGradeValue");
        const nordicResponse = await fetchGrades("nordicGradeValue");
        const vGradeResponse = await fetchGrades("vGradeValue");

        setFrenchGrades(frenchResponse);
        setNordicGrades(nordicResponse);
        setVGrades(vGradeResponse);
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchGyms();
  }, []);

  // Promise.all([
  //   fetch("http://localhost:8080/frenchGradeValue"),
  //   fetch("http://localhost:8080/nordicGradeValue"),
  //   fetch("http://localhost:8080/vGradeValue"),
  // ])
  //   .then(([resFrench, resNordic, resV]) =>
  //     Promise.all([resFrench.json(), resNordic.json(), resV.json()])
  //   )
  //   .then(
  //     ([dataFrenchGrades, dataNordicGrades, dataVGrades]) => {
  //       setFrenchGrades(dataFrenchGrades);
  //       setNordicGrades(dataNordicGrades);
  //       setVGrades(dataVGrades);
  //     },
  //     (error) => {
  //       return error;
  //     }
  //   );

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
