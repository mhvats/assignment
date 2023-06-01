import React, { useState, ChangeEvent, FormEvent } from "react";
import logo from "./img/logo.png";
export const Right: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Add login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="max-w-sm mx-auto mt-8">
      <div className="flex flex-col justify-center items-center">
        <div className="w-20">
          <img src={logo} alt="aesthesia" />
        </div>
        <div>
          <p className="font-semibold text-4xl">
            Welcome <span style={{ color: "#08A593" }}>Back!</span>
          </p>
        </div>
        <div>
          <p className="text-gray-500">Glad to see you, Again!</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="border border-gray-400 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="border border-gray-400 rounded-lg p-2 w-full"
          />
        </div>
        <div className="flex justify-end mb-4">
          <p className="text-gray-500 cursor-pointer hover:text-gray-700">
            Forgot Password
          </p>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-900"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center mt-8">
        <p className="text-gray-500">
          Don't have an account yet?
          <span
            style={{ color: "#08A593" }}
            className="font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};
