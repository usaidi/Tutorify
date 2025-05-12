import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    address: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("https://tutorify.live/api/register.php", formData, {
        withCredentials: true,
      });

      if (response.data.success) {
        const userRole = response.data.user.role;
        setSuccess("Registration successful!");

        // Redirect based on role
        if (userRole === "student") {
          navigate("/dashboard");
        } else if (userRole === "teacher") {
          navigate("/tutorform");
        }
      } else {
        setError(response.data.message || "Registration failed.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-cyan-500">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="flex items-center space-x-6 ml-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="student"
              checked={formData.role === "student"}
              onChange={handleChange}
              className="accent-cyan-500"
            />
            <span>Student</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={formData.role === "teacher"}
              onChange={handleChange}
              className="accent-cyan-500"
            />
            <span>Teacher</span>
          </label>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <Button
          type="submit"
          className="w-full py-6 bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-lg rounded-lg transition-colors"
        >
          Register
        </Button>
      </form>
      <h3 className="text-xl mt-2 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-cyan-500">
          Login
        </a>
      </h3>
    </div>
  );
}
