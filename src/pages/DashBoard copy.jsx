import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";

const DashBoard = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const tabs = ["Users", "Projects", "Operating Status"];
  return (
    <>
      <Header isOpen={isSideBarOpen} />

      <Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
      <div
        style={{
          marginLeft: isSideBarOpen ? "100px" : "-10px",
          transition: "margin-left 0.5s",
          position: "relative",
          right: -30,
          width: "100%",
        }}
        className="flex-1"
      >
        {children}

        {/* Top Action Buttons */}
        <div className="flex justify-end gap-4 mb-6 mt-25">
          <button className="bg-[#114958] text-white px-6 py-2 rounded-lg shadow hover:bg-[#14505e] transition">
            View Draft
          </button>
          <button className="bg-[#114958] text-white px-6 py-2 rounded-lg shadow hover:bg-[#14505e] transition">
            Create +
          </button>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow p-4 mb-4 mx-[-30px]">
          <h2 className="text-xl font-bold mb-4 text-left">Filters</h2>
          <hr className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">Service Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none">
                <option>Service Type</option>
              </select>
            </div>
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">Service Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none">
                <option>Status</option>
              </select>
            </div>
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">
                Owner (Primary)
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none">
                <option>Select Owner</option>
              </select>
            </div>
            <div className="rounded-xl p-4 text-left">
              <label className="block mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by Booking ID / Lead Pax"
                className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
              />
            </div>
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">
                Booking Start Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
              />
            </div>
            <div className="rounded-xl p-4 text-left mr-6 ml-0">
              <label className="block text-gray-700 mb-2">
                Booking End Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
              />
            </div>

            <div className="rounded-xl p-4 text-left ml-2">
              <label className="block text-gray-700 mb-2">
                Trip Start Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
              />
            </div>
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">Trip End Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button className="bg-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition flex items-center justify-center">
              <RiRefreshLine size={22} className="text-[#114958]" />
            </button>
            <button className="bg-[#114958] text-white px-8 py-2 rounded-lg shadow hover:bg-[#14505e] transition">
              Apply
            </button>
          </div>
        </div>

        <div className="flex justify-center p-10">
          <div className="bg-blue-800 w-60 text-white text-center p-4 rounded-lg shadow">
            Welcome to Karvaan Portal
          </div>
        </div>
        <div>
          <h1>Hello World</h1>
        </div>
        <div>
          <h1>Hello World</h1>
        </div>
        <div>
          <h1>Hello World</h1>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
