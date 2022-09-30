import React from "react";
import ClimbForm from "./ClimbForm";
import GradeConverter from "./GradeConverter";
import ShowClimbs from "./ShowClimbs";

const Home = () => {
  return (
    <div className="Home">
      <ClimbForm />
      {/* <GradeConverter /> */}
      <ShowClimbs />
    </div>
  );
};

export default Home;
