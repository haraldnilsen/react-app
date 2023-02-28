import { NavLink } from "react-router-dom";
import * as logo from "../../img/climbing-svgrepo-com-revert.svg";
import * as profile from "../../img/profile-user-avatar-man-person-svgrepo-com.svg"

export const Navbar = () => {

  return (
    <nav className="bg-primary shadow-xl py-6 px-32 ">
      <div className="px-8 mx-auto flex justify-center p-1 [&>*]:text-white">
        <div className="absolute left-10">
          <a href="/" className="flex ">
            <img className="h-8" src={logo.default} ></img>
            <h3 className="pl-2 text-3xl text-white font-logo
            ">Zendit</h3>
          </a>
        </div>
        
        <div className="flex [&>*]:px-8">
          <NavBarItem name="Stats" link="/stats"/>
          <NavBarItem name="Grade Converter" link="/converter"/>
          <NavBarItem name="Bibelen" link="/gear"/>
        </div>
        <div className="absolute right-10">
          <a href="" className="flex ">
            <img className="h-8" src={profile.default} ></img>
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavBarItem = (props) => {
  return (
    <NavLink 
        exact
        to={props.link}
        className="hover:underline"
        activeClassName="underline"
        >
          {props.name}
    </NavLink>
  )
}

export default Navbar;
