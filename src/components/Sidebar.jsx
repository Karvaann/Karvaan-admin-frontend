import { useState } from "react";
import { useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight, MdDashboard } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaTags, FaDatabase, FaCalendar, FaDollarSign } from "react-icons/fa";
import { FaChartLine, FaCheckDouble } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    icon: MdDashboard,
  },
  {
    label: "Tasks",
    icon: FaCheckDouble,
  },
  {
    label: "Leads",
    icon: FaChartLine,
  },
  {
    label: "Sales",
    icon: FaTags,
    subMenu: ["Limitless", "Others"],
  },
  {
    label: "Operations",
    icon: FaCalendar,
    subMenu: ["Limitless", "Flights", "Hotels"],
  },
  {
    label: "Finance",
    icon: FaDollarSign,
    subMenu: ["Invoices", "Receipts", "Contracts"],
  },
  {
    label: "Directory",
    icon: FaDatabase,
    subMenu: ["Vendors", "Customers", "Team"],
  },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // close sidebar if click is outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen text-white border-r border-gray-700 transition-all transform duration-500 ease-in-out z-50 ${
          isOpen ? "w-54" : "w-16"
        }`}
        style={{
          background:
            "linear-gradient(175.12deg, #0a2c36 0%, #114958 27.08%, #A6ECFF 153.71%)",
        }}
      >
        {/* Toggle Button - icon only, inside sidebar, right aligned */}
        <div className="flex justify-end items-center w-full pt-3 pr-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <MdChevronLeft size={30} />
            ) : (
              <MdChevronRight size={30} />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-12 space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={item.label}
              className={`relative group flex flex-col items-start gap-2 px-4 py-3 cursor-pointer ${
                openSubMenuIndex === index ? "bg-[#114958]" : ""
              }`}
              style={{
                background:
                  openSubMenuIndex === index || hoveredIndex === index
                    ? "#114958"
                    : undefined,
                transition: "background 0.3s",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (item.subMenu) {
                  setOpenSubMenuIndex(
                    openSubMenuIndex === index ? null : index
                  );
                } else if (item.label === "Tasks") {
                  navigate("/tasks");
                } else if (item.label === "Leads") {
                  navigate("/leads");
                } else if (item.label === "Dashboard") {
                  navigate("/");
                }
              }}
            >
              <div className="flex items-center gap-2">
                <item.icon size={20} />
                {isOpen && <span className="text-sm">{item.label}</span>}
                {/* Location icon - shows only when sidebar is open */}
                {isOpen &&
                  item.label !== "Tasks" &&
                  item.label !== "Leads" &&
                  item.label !== "Dashboard" && (
                    <MdKeyboardArrowUp
                      size={16}
                      className="transform transition-transform duration-300 group-hover:rotate-180 text-gray-400"
                    />
                  )}
              </div>
              {/* Submenu Dropdown - open only on click */}
              {item.subMenu && isOpen && (
                <ul
                  className={`pl-8 mt-2 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${
                    openSubMenuIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{
                    background:
                      openSubMenuIndex === index ? "#114958" : undefined,
                    borderRadius: "0.5rem",
                    transition: "background 0.3s",
                  }}
                >
                  {item.subMenu.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="cursor-pointer text-left text-sm py-1 px-2 rounded text-white"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
