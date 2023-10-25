import React from "react";
import { NavLink } from "react-router-dom";
import { SubNavbarItemProps, SubNavbarProps } from "./types";

const SubNavbar: React.FC<SubNavbarProps> = ({ data }) => {
  return (
    <nav className="bg-secondary shadow-xl py-5 pl-14 w-screen transform ">
      <div className="flex" key={3}>
        {data.map((elem) => (
          <SubNavElement link={elem} name={elem} />
        ))}
      </div>
    </nav>
  );
};

const SubNavElement: React.FC<SubNavbarItemProps> = ({ name, link }) => {
  return (
    <React.Fragment key={name}>
      <NavLink
        exact
        to={link}
        className="hover:underline pr-10 text-white"
        activeClassName="underline"
      >
        {name.charAt(1).toUpperCase()}
        {name.slice(2)}
      </NavLink>
    </React.Fragment>
  );
};

export default SubNavbar;
