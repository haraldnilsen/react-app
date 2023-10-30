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
        const frenchResponse = await fetchGrades("french");
        const nordicResponse = await fetchGrades("nordic");
        const vGradeResponse = await fetchGrades("vgrade");

        setFrenchGrades(frenchResponse);
        setNordicGrades(nordicResponse);
        setVGrades(vGradeResponse);
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchGyms();
  }, []);

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
