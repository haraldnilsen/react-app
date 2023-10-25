import React from "react";
import SubNavElement from "./SubNavElement";
import { NavLink } from "react-router-dom";

const SubNavBar:React.FC = (props) => {

    return (
      <nav className="bg-secondary shadow-xl py-5 pl-14 w-screen transform " >
        <div className="flex" key={3}>
          {props.data.map(elem => <SubNavElement link={elem} name={elem}/>)}
        </div>
      </nav>
    );
};

const SubNavElement:React.FC = (props) => {

  return (
      <React.Fragment key={props.name}>
          <NavLink 
              exact
              to={props.link}
              className="hover:underline pr-10 text-white"
              activeClassName="underline"
              >
                {props.name.charAt(1).toUpperCase()}{props.name.slice(2)}
          </NavLink>
      </React.Fragment>
  )
}

export default SubNavBar;