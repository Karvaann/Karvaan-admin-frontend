import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

const ProfileSummary = () => {
  const [name, setName] = useState("Yash Manocha");
  const [email, setEmail] = useState("yash.manocha@karvaann.com");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phone, setPhone] = useState("9995556789");
  const [role, setRole] = useState("Admin");
  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 w-[70%] mx-auto">
        <h2 className="text-2xl font-bold mb-1">Profile And Summary</h2>
        <h4 className="text-sm text-gray-500 mb-4 ">
          Manage your profile information
        </h4>
        <hr className="mb-4" />
        <div className="space-y-4 mb-4">
          <div className="flex justify-end">
            <button className="px-6 py-2 mr-5 border border-blue-500 rounded-lg text-blue-500 hover:bg-gray-200 flex items-center gap-2">
              <MdOutlineModeEditOutline className="w-5 h-5" />
              <span>Edit Profile</span>
            </button>
          </div>
          <div className="text-left mr-2 ml-2">
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="text-left mr-2 ml-2">
            <label className="block mb-2 font-medium">Email ID</label>
            <input
              type="email"
              placeholder="Enter Email ID"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-left mr-2 ml-2">
            <label className="block mb-2 font-medium">Contact Number</label>
            <div className="flex gap-2">
              <select
                className="border border-gray-300 rounded-lg px-2 py-2 bg-white text-gray-700"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="text"
                placeholder="Enter Contact Number"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="text-left mr-2 ml-2">
            <label className="block mb-2 font-medium">Role</label>
            <input
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none bg-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSummary;
