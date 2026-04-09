import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

export default function Navbar() {
  return (
    <nav className=" bg-white shadow py-2">
      <div className="flex justify-between gap-4 items-center container mx-auto">
        <img src={logoImg} alt="" className="w-15" />
        <ul className="flex justify-between gap-2 items-center">
          <li>
            <MyNavLink to={"/"} >Home</MyNavLink>
         
          </li>
          <li>
            <MyNavLink to={"/app"}>Apps</MyNavLink>
          </li>
          <li>
             <MyNavLink to={"/installedApp"}> Installation Apps</MyNavLink>
          </li>
        </ul>

        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
}
