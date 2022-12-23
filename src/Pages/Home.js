import React from "react";
import ClimbForm from "../Components/Home/ClimbForm";
import ShowClimbs from "../Components/Home/ShowClimbs";

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
