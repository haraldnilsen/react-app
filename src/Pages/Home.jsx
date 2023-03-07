import React from "react";
import * as logo from "../img/climbing-svgrepo-com-revert.svg"
import ClimbList from "./Climbs"
import ShowClimbs from "../Components/Home/ShowClimbs";


const Home = () => {
  return (
    <div className="bg-green-900 h-full">
      <div className="mb-36"> 
        <img className="mx-auto pt-20 h-72" src={logo.default}></img>
        <h1 className="text-7xl mt-5 text-center text-white font-logo">
          Zendit
        </h1>
      </div>
      <div className="bg-white h-80 w-full">
        <h2 className="text-center pt-36 text-2xl font-bold">
          Track your climbs, find all climbing info <br/> you need and get ready to send it!
        </h2>
      </div>
      <div className="bg-primary h-full w-full">
        <h2 className="text-center text-white py-36 text-2xl font-bold">
          Download the app from here
        </h2>
      </div>
    </div>
  );
};

export default Home;