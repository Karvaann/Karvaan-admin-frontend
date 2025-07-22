import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const [formData, setFormData] = useState({
    team: "",
    agentId: "",
    otp: "",
    isSuperAdmin: false,
  });

  const {login} = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    try {
      // Sign in logic with twilio

      console.log("User signed in:", formData);
      login(formData);
    } catch (error) {
      console.error("Sign In Error:", error.message);
    }
  };
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectFit: "cover" }}
      >
        <source src="/login-video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      {/* Centered Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen"
        style={{ marginTop: "-32px" }}
      >
        {/* Logo */}
        <div
          className="relative z-20 flex justify-center items-center mb-6"
          style={{ marginTop: "-32px" }}
        >
          <div className="flex items-center space-x-0.5">
            <img
              src="/assets/icons/karvaann wordmark.svg"
              alt="Karvaann"
              className="h-[120px]  filter invert"
            />
            <img
              src="/assets/icons/login-icon 3-6.svg"
              alt="Logo"
              className="h-[120px] w-[120px]"
            />
          </div>
        </div>

        {/* Login Card */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ marginTop: "-16px" }}
        >
          <div
            className="bg-[#FCFCF8] p-7 rounded-2xl shadow-lg w-[400px] h-[380px] flex flex-col gap-y-[15px]"
          >
            {/* Team Select */}
            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 hover:border-black-500 ${
                !formData.team ? "text-gray-400" : "text-black-500"
              }`}
            >
              <option value="" disabled hidden>
                Select Team
              </option>
              <option value="karvaan experiences" style={{ color: "#000" }}>
                Karvaan experiences
              </option>
            </select>

            {/* Agent ID */}
            <input
              type="text"
              name="agentId"
              value={formData.agentId}
              onChange={handleChange}
              placeholder="Enter Agent ID"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 hover:border-black-500"
            />

            {/* OTP */}
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 hover:border-black-500"
            />

            {/* Checkbox */}
            <div className="flex items-center py-2">
              <input
                type="checkbox"
                name="isSuperAdmin"
                checked={formData.isSuperAdmin}
                onChange={(e) => {
                  // if (e.target.checked) {
                  //   setShowSuperAdminDialog(true);
                  // }
                  setFormData({ ...formData, isSuperAdmin: e.target.checked });
                }}
                className="mr-3 w-5 h-5 accent-teal-800 rounded-full"
              />
              <label className="text-balance text-gray-700">
                I am a Super Admin
              </label>
            </div>

            {/* Login Button */}
            <button
              onClick={() => handleSubmit()}
              className="w-full py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-lg transition"
            >
              Login
            </button>

            {/* Forgot Link */}
            <div className="text-right text-sm">
              <button
                type="button"
                className="text-black-600 hover:underline"
                onClick={() => alert("Forgot logic not yet implemented")}
              >
                Forgot?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
