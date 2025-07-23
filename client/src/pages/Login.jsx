import React, { useState } from "react";
import { Link } from "react-router-dom";
import{ MapPin } from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (API call, validation, etc.)
    console.log(form);
  };

  return (
    <div className="min-h-screen flex  flex-col items-center justify-center bg-white">
      <div className="text-center">
        <Link href="/login">
          <div className="flex items-center justify-center space-x-2 mb-6 cursor-pointer">
            <MapPin className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold text-gray-900">Journmate</span>
          </div>
        </Link>
        <h2 className="text-3xl font-bold text-gray-900">Join Journmate</h2>
        <p className="mt-2 text-gray-600">A Travel Buddy Finder</p>
      </div>
      <div className="w-full max-w-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
