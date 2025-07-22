import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import BookingFormModal from "../components/BookingFormModal";

import { IoMdArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MyBookings = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  // Pagination state
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  // Table data
  const bookings = [
    {
      voucher: "OS-78945",
      bookingId: "Rajesh Sharma",
      leadPax: "09 Mar 2025",
      date: "✈️ Flight",
      service: "In Progress",
      statusColor: "bg-orange-100 text-orange-600",
      amount: "₹ 24,580",
      addTask: "",
    },
    {
      voucher: "OS-78932",
      bookingId: "Priya Malhotra",
      leadPax: "18 Jul 2025",
      date: "🏨 Accomodation",
      service: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      amount: "₹ 35,750",
      addTask: "",
    },
    {
      voucher: "OS-78910",
      bookingId: "Amit Patel",
      leadPax: "10 Mar 2025",
      date: "🏨 Accomodation",
      service: "Confirmed",
      statusColor: "bg-green-100 text-green-600",
      amount: "₹ 78,900",
      addTask: "",
    },
    {
      voucher: "OS-78905",
      bookingId: "Neha Gupta",
      leadPax: "22 Jul 2025",
      date: "✈️ Flight",
      service: "Hold",
      statusColor: "bg-gray-200 text-gray-700",
      amount: "₹ 18,450",
      addTask: "",
    },
    {
      voucher: "OS-78890",
      bookingId: "Vikram Singh",
      leadPax: "25 Jul 2025",
      date: "🚌 Transportation",
      service: "Cancelled",
      statusColor: "bg-red-100 text-red-500",
      amount: "₹ 5,200",
      addTask: "",
    },
    {
      voucher: "OS-78891",
      bookingId: "Aisha Khan",
      leadPax: "30 Jul 2025",
      date: "🚗 Transportation",
      service: "Released",
      statusColor: "bg-blue-100 text-blue-600",
      amount: "₹ 6,200",
      addTask: "",
    },
    {
      voucher: "OS-78892",
      bookingId: "Rohit Verma",
      leadPax: "02 Aug 2025",
      date: "🚗 Transportation",
      service: "Confirmed",
      statusColor: "bg-green-100 text-green-600",
      amount: "₹ 7,200",
      addTask: "",
    },
    {
      voucher: "OS-78893",
      bookingId: "Meera Joshi",
      leadPax: "05 Aug 2025",
      date: "🚗 Transportation",
      service: "Pending",
      statusColor: "bg-yellow-100 text-yellow-600",
      amount: "₹ 8,200",
      addTask: "",
    },
    {
      voucher: "OS-78894",
      bookingId: "Suresh Rana",
      leadPax: "10 Aug 2025",
      date: "✈️ Flight",
      service: "Hold",
      statusColor: "bg-gray-200 text-gray-700",
      amount: "₹ 9,200",
      addTask: "",
    },
    {
      voucher: "OS-78895",
      bookingId: "Anita Desai",
      leadPax: "12 Aug 2025",
      date: "🏨 Accomodation",
      service: "Cancelled",
      statusColor: "bg-red-100 text-red-500",
      amount: "₹ 10,200",
      addTask: "",
    },
  ];
  const totalRows = bookings.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const paginatedRows = bookings.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const tabs = ["Users", "Projects", "Operating Status"];
  return (
    <>
      <Header isOpen={isSideBarOpen} />

      <Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
      <div
        className={`transition-all duration-500 ease-in-out flex-1 ${
          isSideBarOpen ? "ml-[150px] scale-[0.96]" : "ml-[44px] scale-100"
        }`}
      >
        {children}

        {/* Top Action Buttons */}
        <div className="flex justify-end gap-4 p-6 mb-2 w-full mt-18 mx-[100px]">
          <button className="bg-white text-[#114958] px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition">
            View Draft
          </button>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="bg-[#114958] text-white px-6 py-2 rounded-lg shadow hover:bg-[#14505e] transition"
          >
            Create +
          </button>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow p-4 mb-4 mx-[-80px]">
          <h2 className="text-xl font-bold mb-4 text-left">Filters</h2>
          <hr className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">Service Type</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none pr-8 appearance-none">
                  <option>Service Type</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MdOutlineKeyboardArrowDown size={22} />
                </span>
              </div>
            </div>
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">Status</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none pr-8 appearance-none">
                  <option>Status</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MdOutlineKeyboardArrowDown size={22} />
                </span>
              </div>
            </div>
            <div className="rounded-xl p-4 text-left">
              <label className="block text-gray-700 mb-2">
                Owner (Primary)
              </label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none pr-8 appearance-none">
                  <option>Select Owner</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MdOutlineKeyboardArrowDown size={22} />
                </span>
              </div>
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

        {/* Summary Cards Section */}
        <div className="flex flex-col md:flex-row mb-8 mx-[-80px] mt-8">
          {/* Total Card */}
          <div className="bg-white border border-blue-100 rounded-2xl shadow p-4 flex flex-col justify-between w-[400px] min-w-[220px] md:mr-[140px]">
            <span className="text-gray-500 text-lg mb-2">Total</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-[#114958]">
                ₹ 12,45,890
              </span>
              <div className="bg-blue-100 rounded-full p-3">
                <RiExchangeDollarLine className="text-[#114958]" size={23} />
              </div>
            </div>
            <span className="text-green-600 mt-2 font-medium">
              +8.5% from last month
            </span>
          </div>
          {/* Right spaced last 2 cards */}
          <div className="flex gap-4 ml-auto">
            {/* You Give Card */}
            <div className="bg-white border border-red-100 rounded-2xl shadow p-4 flex flex-col justify-between w-[280px] min-w-[120px] md:mr-6">
              <span className="text-gray-500 text-lg mb-2">You Give</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">
                  ₹ 8,45,620
                </span>
                <div className="bg-red-100 rounded-full p-3">
                  <FaArrowCircleLeft className="text-red-500" size={20} />
                </div>
              </div>
              <span className="text-red-500 mt-2 font-medium">
                -3.2% from last month
              </span>
            </div>
            {/* You Get Card */}
            <div className="bg-white border border-green-100 rounded-2xl shadow p-4 flex flex-col justify-between w-[280px] min-w-[120px]">
              <span className="text-gray-500 text-lg mb-2">You Get</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black">
                  ₹ 4,00,270
                </span>
                <div className="bg-green-100 rounded-full p-3">
                  <FaRegArrowAltCircleRight
                    className="text-green-500"
                    size={20}
                  />
                </div>
              </div>
              <span className="text-green-600 mt-2 font-medium">
                +12.3% from last month
              </span>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table Section */}
        <div className="bg-white rounded-2xl shadow p-6  mx-[-80px] mb-8 w-[calc(100%+160px)]">
          <h2 className="text-xl font-bold mb-4 text-left">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#155e75] text-white">
                  <th className="px-4 py-3 font-semibold text-left">Voucher</th>
                  <th className="px-4 py-3 font-semibold text-left">
                    Booking ID
                  </th>
                  <th className="px-4 py-3 font-semibold text-left">
                    Lead Pax
                  </th>
                  <th className="px-4 py-3 font-semibold text-left">
                    Date of Travel
                  </th>
                  <th className="px-4 py-3 font-semibold text-left">Service</th>
                  <th className="px-4 py-3 font-semibold text-left">
                    Booking Status
                  </th>
                  <th className="px-4 py-3 font-semibold text-left">Amount</th>
                  <th className="px-4 py-3 font-semibold text-left">
                    Add Task
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                  >
                    <td className="px-4 py-3 font-medium text-[#155e75] underline cursor-pointer">
                      {row.voucher}
                    </td>
                    <td className="px-4 py-3">{row.bookingId}</td>
                    <td className="px-4 py-3">{row.leadPax}</td>
                    <td className="px-4 py-3">{row.date}</td>
                    <td className="px-4 py-3">{row.date.split(" ")[1]}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-4 py-1 rounded-full font-semibold text-xs ${row.statusColor}`}
                      >
                        {row.service}
                      </span>
                    </td>
                    <td className="px-4 py-3">{row.amount}</td>
                    <td className="px-4 py-3 text-center">
                      <button className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                        <CiCirclePlus className="text-[#114958]" size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
                {/* Fill empty rows to keep table height consistent */}
                {Array.from({
                  length: Math.max(0, rowsPerPage - paginatedRows.length),
                }).map((_, idx) => (
                  <tr
                    key={`empty-${idx}`}
                    className={`${
                      (paginatedRows.length + idx) % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50"
                    } h-14`}
                  >
                    <td className="px-4 py-3" colSpan={8}></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Rows per page:</span>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-gray-600 bg-white"
                value={rowsPerPage}
                readOnly
              >
                <option>{rowsPerPage}</option>
              </select>
            </div>
            <div className="text-gray-600">
              Showing {(page - 1) * rowsPerPage + 1}-
              {Math.min(page * rowsPerPage, totalRows)} of {totalRows} entries
            </div>
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#155e75]"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                {"<"}
              </button>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full font-bold border border-gray-300 flex items-center justify-center ${
                    page === idx + 1
                      ? "bg-[#155e75] text-white"
                      : "bg-white text-[#155e75]"
                  }`}
                  onClick={() => setPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#155e75]"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingFormModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
    </>
  );
};

export default MyBookings;
