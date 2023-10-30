import React, { useState, useEffect } from "react";
import { GradeElement } from "../../types/response";
import { fetchGrades } from "../../api/getGrades";

const GradeConverter: React.FC = () => {
  const [climbType, setClimbType] = useState("sport");

  const [gradeType, setGradeType] = useState("French");
  const [frenchGrades, setFrenchGrades] = useState<GradeElement[]>(null);
  const [nordicGrades, setNordicGrades] = useState<GradeElement[]>(null);
  const [vGrades, setVGrades] = useState<GradeElement[]>(null);
  const [gradeValue, setGradeValue] = useState(4);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleFetchGyms = async () => {
      try {
        const frenchResponse = await fetchGrades("french");
        const nordicResponse = await fetchGrades("nordic");
        const vGradeResponse = await fetchGrades("vgrade");

        setFrenchGrades(frenchResponse);
        setNordicGrades(nordicResponse);
        setVGrades(vGradeResponse);
        setIsLoaded(true);
      } catch (error) {
        setError(error);
        setIsLoaded(true);
      }
    };

    handleFetchGyms();
  }, []);

  const selectGrades = () => {
    return gradeType == "V-grade"
      ? vGrades
      : gradeType == "Norwegian"
      ? nordicGrades
      : frenchGrades;
  };

  const selectClimb = () => {
    // if sport -> french, norwegian else -> french, v-grade
    return climbType == "sport"
      ? ["French", "Norwegian"]
      : ["French", "V-grade"];
  };

  const convertGrade = (
    climbtype: string,
    gradetype: string,
    gradevalue: number
  ) => {
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
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    //hvis data laster ...
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center w-max p-10 mt-12 border shadow-2xl">
          <h2 className="font-bold text-xl text-primary border-b-2">
            Grade Converter
          </h2>
          <form className="py-10 ">
            <select
              className="formelement--select"
              onChange={(e) => setClimbType(e.target.value)}
            >
              <option value="sport">Sport</option>
              <option value="bouldering">Bouldering</option>
            </select>
            <select
              className="formelement--select"
              onChange={(e) => setGradeType(e.target.value)}
            >
              {selectClimb().map((x) => (
                <option value={x} key={x}>
                  {x}
                </option>
              ))}
            </select>
            <select
              className="formelement--select"
              onChange={(e) => setGradeValue(Number(e.target.value))}
            >
              {selectGrades().map((x) => (
                <option value={x.value} key={x.grade}>
                  {x.grade}
                </option>
              ))}
            </select>
          </form>
          <p>Is the same as:</p>
          {convertGrade(climbType, gradeType, gradeValue).map((c) => (
            <p className="" key={c}>
              {c}
            </p>
          ))}
        </div>
      </div>
    );
  }
};

export default GradeConverter;
