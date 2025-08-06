// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "./ToastContext"; // Import the toast context for notifications

// Define the base URL for your API
const API_BASE_URL = "http://localhost:8080"; // Replace with your actual API URL

// Create context
const AuthContext = createContext();

// Exported hook to use the context
export const useAuth = () => useContext(AuthContext);


const headers = {
  "Content-Type": "application/json",
}; // Initialize the toast function

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // or initial value from localStorage/session
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    // Optional: Load user from localStorage/session on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const loginAgent = async (userData, setOtpSent) => {
    await axios.post(`${API_BASE_URL}/auth/send-otp/agent`, userData, { headers })
      .then((response) => {
        if (response.data.success) {
          showToast("Otp sent successfully to Agent on their phone number", "success");
          setOtpSent(true);
        } else {
          showToast("Failed to send otp to this number", "error");
        }
      })
      .catch((error) => {
        showToast(error.response?.data?.message || "Failed to send otp to this number", "error"); // Show error toast
        console.error("Login Error:", error.message);
        throw error; // Re-throw the error to handle it in the component
      });
  };

  const loginSU = async (userData, setOtpSent) => {
   await axios.post(`${API_BASE_URL}/auth/send-otp/super-admin`, userData, { headers })
      .then((response) => {
        if (response.data.success) {
          showToast("Otp sent successfully to Super Admin on their phone number", "success");
          setOtpSent(true);
        } else {
          showToast("Failed to send otp to this number", "error");
        }
      })
      .catch((error) => {
        showToast(error.response?.data?.message || "Failed to send otp to this number", "error"); // Show error toast
        console.error("Login Error:", error.message);
        throw error; // Re-throw the error to handle it in the component
      });
  };

  const verifyOtp = async (otpData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/verify-otp`, otpData, { headers });
      if (response.data.success) {
        showToast("Login successful", "success");
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user in localStorage
        localStorage.setItem("token", response.data.token); // Store token in localStorage
      }
    } catch (error) {
      showToast(error.response?.data?.message || "OTP verification failed", "error"); // Show error toast
      setUser(null);
      console.error("OTP Verification Error:", error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    loginAgent,
    loginSU,
    logout,
    verifyOtp,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
