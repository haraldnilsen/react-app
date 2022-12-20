import React from "react";
import ClimbForm from "../Components/ClimbForm";
import ShowClimbs from "../Components/ShowClimbs";

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
