import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState(""); //Q. what to give as initial value , empty string or null
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); //Basic validation

  const navigate = useNavigate(); //Q3. what are the different methods to use Navigation in react

  const handleSignup = (e) => {
    e.preventDefault(); // Prevents default form submission and page reload

    // Basic validation
    if (email.trim().length === 0 || password.trim().length === 0) {
      setError("Please enter email and password");
      return; // Stop function here if validation fails
    }

    // If validation passed, clear error and proceed
    setError("");

    const encodedPassword = btoa(password); // encode password
    const user = {
      email,
      password: encodedPassword,
    };

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Navigate to login page
    navigate("/login");
  };

  const handleChange = (e) => {
    if (error.length > 0) {
      setError("");
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create Your Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
            value={email}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
            value={password}
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
