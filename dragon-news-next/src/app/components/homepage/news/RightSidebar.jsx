"use client";

import { authClient } from "@/app/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleSign = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data);
  };

  return (
    <div>
      <h2 className="text-xl text-center mb-2">Login With</h2>

      <div className="flex flex-col gap-2">
        <button
          className="btn border-blue-500 text-blue-500"
          onClick={handleGoogleSign}
        >
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
