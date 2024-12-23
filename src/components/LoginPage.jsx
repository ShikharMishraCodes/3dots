import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (phone) setShowOtpInput(true);
  };

  const handleSubmit = () => {
    if (otp) navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-[#8B0000] text-white">
      <h2 className="text-2xl font-bold mb-6">Login to your account</h2>

      {!showOtpInput ? (
        <div className="w-80 flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="w-80 flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
