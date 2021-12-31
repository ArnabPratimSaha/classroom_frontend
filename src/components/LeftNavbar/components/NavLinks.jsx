import { memo } from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const defaultActiveStyle = {
  color: "#1967D2",
  boxShadow: "inset 1px 1px 3px rgba(0 , 0 , 0 , 0.5)",
  backgroundColor: "#f2f2f2",
};

const NavLinks = ({ icon, text, to, onClick , activeStyle , style }) => {
  return (
    <NavLink
      style={({ isActive }) => (isActive ? (activeStyle ? {...defaultActiveStyle,...style,...activeStyle} : {...defaultActiveStyle,...style}) : style)}
      to={to && to}
      className="leftnavbar-navlinks__full-div"
    >
      <div className="leftnavbar-navlinks__icon-div">{icon && icon}</div>
      <div className="leftnavbar-navlinks__text-div">
        <span className="leftnavbar-navlinks__text">{text && text}</span>
      </div>
    </NavLink>
  );
};

export default memo(NavLinks);
