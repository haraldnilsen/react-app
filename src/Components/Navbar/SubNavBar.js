import React from "react";
import SubNavElement from "./SubNavElement";
import { NavLink } from "react-router-dom";

const SubNavBar = (props) => {

    return (
      <nav className="bg-secondary shadow-xl py-5 pl-14 w-screen transform " >
        <div className="flex" key={3}>
          {props.data.map(elem => <SubNavElement link={elem} name={elem}/>)}
        </div>
      </nav>
    );
};

export default SubNavBar;