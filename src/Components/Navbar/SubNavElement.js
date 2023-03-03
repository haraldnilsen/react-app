import React from "react";
import { NavLink } from "react-router-dom";

const SubNavElement = (props) => {

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

export default SubNavElement;

