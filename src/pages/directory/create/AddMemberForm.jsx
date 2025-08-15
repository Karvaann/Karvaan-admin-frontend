import React, { useState, useEffect } from "react";

const AddMemberForm = ({ data, rolesData, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setEmail(data.email || "");
      setPhone(data.phone?.slice(3) || "");
      setPhoneCode(data.phone?.slice(0, 3) || "+91");
      setRole(data.roleId?._id || "");
    }

    return () => {
      setName("");
      setEmail("");
      setPhone("");
      setPhoneCode("+91");
      setRole("");
    };
  }, [data]);

  return (
    <div className="p-4 w-[550px] space-y-4">
      <div className="text-left">
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="text-left">
        <label className="block mb-2 font-medium">Email ID</label>
        <input
          type="email"
          placeholder="Enter Email ID"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="text-left">
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

      <div className="text-left">
        <label className="block mb-2 font-medium">Role</label>
        <select
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none bg-white"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          {rolesData.map((role) => (
            <option key={role._id} value={role._id}>
              {role.roleName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="px-6 py-2 rounded-md bg-[#114958] text-white hover:bg-[#0f3d44]">
          Give Permissions
        </button>
      </div>
    </div>
  );
};

export default AddMemberForm;
