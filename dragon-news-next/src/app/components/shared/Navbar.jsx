import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/app/assets/user.png";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="flex container mx-auto justify-between mt-4">
      <div></div>
      <ul className="flex justify-between items-center gap-4">
        <li>
          <Navlink href={"/"}>Home</Navlink>
        </li>
        <li>
          <Navlink href={"/about-us"}>About</Navlink>
        </li>
        <li>
          <Navlink href={"/career"}>Career</Navlink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image
          src={userAvatar}
          alt="user Avatar"
          width={60}
          height={60}
        ></Image>

        <button className="btn btn-primary">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
