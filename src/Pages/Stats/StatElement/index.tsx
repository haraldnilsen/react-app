import React from "react";
import convertGrade from "../../../util/convertGrade";

interface StatElementProps {
  title: string;
  type: string;
  data: string;
  func: any;
}

const StatElement: React.FC<StatElementProps> = ({
  title,
  type,
  data,
  func,
}) => {
  let test;
  function propData() {
    if (data === "grade") {
      test = convertGrade("sport", "french", func(type).grade);
      // return test;
      return func(type).grade;
    } else {
      return func(type);
    }
  }
  return (
    <div className="stat">
      <h3 className="stat--h3">{title}</h3>
      <p>{propData()}</p>
    </div>
  );
};

export default StatElement;
