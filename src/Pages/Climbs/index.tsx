import React from "react";
import ClimbForm from "./ClimbForm";
import ShowClimbs from "./ClimbList/ShowClimbs";

const Climbs:React.FC = () => {
  return (
    <div className="">
      <ClimbForm />
      {/* <GradeConverter /> */}
      <ShowClimbs />
    </div>
  );
};

export default Climbs;
