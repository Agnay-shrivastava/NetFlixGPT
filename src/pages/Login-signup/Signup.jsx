import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const user = {
      email,
      password,
    };

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true"); // Save as string

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
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={handleChange}
          value={email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          onChange={handleChange}
          value={password}
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default signup;
