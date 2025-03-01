import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TiVendorApple } from "react-icons/ti";

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-200 p-3">
      <div className="bg-indigo-950 p-6 rounded-lg shadow-md h-auto w-full max-w-sm md:max-w-2xl flex flex-col md:flex-row md:items-center md:gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full h-60 md:h-100 object-cover rounded-lg"
            src="/3165.jpg"
            alt="Capture Moments"
          />
        </div>

        <div className="text-white w-full md:w-1/2">
          <h1 className="text-2xl py-2 font-semibold mb-4 md:text-left">
            {isLogin ? "Welcome Back!" : "Create an account"}
          </h1>
          <p className="text-sm text-gray-300 md:text-left">
            {isLogin ? "New User? " : "Already have an account?"}{" "}
            <span
              className="text-blue-400 underline cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>

          <form className="mt-4">
            {!isLogin && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 bg-purple-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-purple-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 bg-purple-950 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {!isLogin && (
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="w-4 h-4 accent-purple-600 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm ">
                  I agree to the{" "}
                  <span className="underline text-violet-400 cursor-pointer">
                    Terms and Conditions
                  </span>
                </label>
              </div>
            )}

            <button
              className={`w-full py-2 mt-2 rounded-lg transition duration-300 ${
                isLogin || isChecked
                  ? "bg-purple-700 hover:bg-purple-600 text-white"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed"
              }`}
              disabled={!isLogin && !isChecked} // Disable if checkbox is unchecked in signup
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <div className="mt-4">
            <p className="text-center text-sm">Or Register with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="border border-white rounded-lg p-2 px-4 flex items-center gap-2 hover:bg-white hover:text-black transition">
                <FcGoogle size={20} />
                <span>Google</span>
              </button>
              <button className="border border-white rounded-lg p-2 px-4 flex items-center gap-2 hover:bg-white hover:text-black transition">
                <TiVendorApple size={22} />
                <span>Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
