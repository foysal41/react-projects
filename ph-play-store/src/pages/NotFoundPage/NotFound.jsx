import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/App-Error.png"; // 👉 এখানে তোর image path দে

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      
      {/* Image */}
      <img
        src={errorImg}
        alt="404 Not Found"
        className="max-w-md w-full mb-6"
      />

      {/* Text */}
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for doesn't exist.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}