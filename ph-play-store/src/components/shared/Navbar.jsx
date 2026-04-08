import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" bg-white shadow py-2">
      <div className="flex justify-between gap-4 items-center container mx-auto">
        <img src={logoImg} alt="" className="w-15" />
        <ul className="flex justify-between gap-2 items-center">
          <li>
            <NavLink to="/" className={({isActive})=> (  `${isActive ? 'text-purple-500 border border-b-purple-500' : ''}`)}>Home</NavLink>
           
          </li>
          <li>
            <NavLink to="/app"className={({isActive})=> (  `${isActive ? 'text-purple-500 border border-b-purple-500' : ''}`)}>Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installedApp"className={({isActive})=> (  `${isActive ? 'text-purple-500 border border-b-purple-500' : ''}`)}>Installation App</NavLink>
          </li>
        </ul>

        <button className="btn bg-purple-500 text-white"><FaGithub />Contribute</button>
      </div>
    </nav>
  );
}
