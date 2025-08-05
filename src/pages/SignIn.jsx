import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const [team, setTeam] = useState("");
  const [otp, setOtp] = useState("");
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [agentId, setAgentId] = useState("");
  const [number, setNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const {loginAgent, loginSU, verifyOtp} = useAuth();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "team":
        setTeam(e.target.value);
        break;
      case "agentId":
        setAgentId(e.target.value);
        break;
      case "otp":
        setOtp(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      case "isSuperAdmin":
        setIsSuperAdmin(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    if (otpSent) {
      verifyOtp({
        signingId: isSuperAdmin ? number : agentId,
        otp,
        superAdmin: isSuperAdmin
      });
    } else {
      try {
        // Sign in logic with twilio
        if (isSuperAdmin) {
        const formData = {
          phoneNumber: number
        };
        console.log("SU otp sent", formData);
        loginSU(formData, setOtpSent);
      } else {
        const formData = {
          agentId: agentId
        };
        console.log("Agent OTP sent", formData);
        loginAgent(formData, setOtpSent);
      }
    } catch (error) {
        console.error("Sign In Error:", error.message);
        alert("Error signing in. Please try again.");
      }
    };
  }

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
            className="bg-[#FCFCF8] p-7 rounded-2xl shadow-lg w-[400px] flex flex-col gap-y-[15px]"
          >
            {/* Team Select */}
            <select
              name="team"
              value={team}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 hover:border-black-500 ${
                !team ? "text-gray-400" : "text-black-500"
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
           {!isSuperAdmin && <input
              type="text"
              name="agentId"
              value={agentId}
              onChange={handleChange}
              disabled={otpSent}
              placeholder="Enter Agent ID"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 hover:border-black-500"
            />}

            {isSuperAdmin && <input
              type="text"
              name="number"
              value={number}
              disabled={otpSent}
              onChange={handleChange}
              placeholder="Enter Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 hover:border-black-500"
            />}

            {/* OTP */}
           {otpSent && <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 hover:border-black-500"
            />}

            {/* Checkbox */}
            <div className="flex items-center justify-center py-2 cursor-pointer text-teal-800 hover:text-black transition 0.25s ease-in-out" onClick={() => setIsSuperAdmin(!isSuperAdmin)}>
              {!isSuperAdmin ? <span>I am a Super Admin</span> : <span>I am an agent</span>}
            </div>

            {/* Login Button */}
            <button
              onClick={() => handleSubmit()}
              className="w-full py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-lg transition"
            >
              {otpSent ? "Verify OTP" : "Send OTP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
