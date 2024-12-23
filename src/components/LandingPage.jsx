import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/app-logo.png";
import name from "../assets/app-name.png";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-[#8B0000] text-white">
      <div className="mb-4">
        <img src={logo} alt="App Logo" className="w-32 h-32" />
      </div>

      <div className="mb-6">
        <img src={name} alt="App Name" className="w-48" />
      </div>

      <p className="text-lg mb-6">Already have an account?</p>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          Yes
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          No
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
