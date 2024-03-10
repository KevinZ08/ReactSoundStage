import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/navBar.scss";
import reactSoundStageIcon from "../images/ReactSoundStageIconWithoutBackground.png";

function NavBar() {
  return (
    <nav className="navBar-container">
      <NavLink className="navBar-iconContainer" to="/ReactSoundStage/Home">
        <img
          src={reactSoundStageIcon}
          className="navBar-icon"
          alt="ReactSoundStage-Icon"
        />
      </NavLink>
      <NavLink className="navBar-element" to="/ReactSoundStage/Home">
        <p>Home</p>
      </NavLink>
      <NavLink className="navBar-element" to="/ReactSoundStage/Dashboard">
        <p>Dashboard</p>
      </NavLink>
      <NavLink className="navBar-element" to="/ReactSoundStage/Artist">
        <p>Artist</p>
      </NavLink>
      <NavLink className="navBar-element" to="/ReactSoundStage/Contact">
        <p>Contact</p>
      </NavLink>
      <input placeholder="Search Artist" />
    </nav>
  );
}

export default NavBar;
