"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/app/assets/user.png";
import Navlink from "./Navlink";
import { authClient } from "@/app/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;


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

      {isPending ? (
        "loading..."
      ) : user ? (
        <div className="flex items-center gap-2">
          <h3>Hello {user.name}</h3>
          <Image
            src={user.image || userAvatar}
            alt="user Avatar"
            width={60}
            height={60}
          ></Image>

          <button onClick={async () => await authClient.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn btn-primary">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
