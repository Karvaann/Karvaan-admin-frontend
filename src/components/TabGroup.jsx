const TabGroup = ({ tabs, activeTab, onChange }) => {
  return (
    <div className=" flex items-center justify-between border-gray-200 w-full">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              py-1 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
              transition-colors duration-200
            `}
          >
            {tab}
          </button>
        ))}
      </nav>
      {/* Right Side: Dropdown + Buttons */}
      <div className="flex items-center space-x-3 ml-auto">
        {/* Dropdown */}
        <div className="relative">
          <select className="border border-gray-300 text-sm rounded-md px-2 py-1  duration-700">
            <option>Week</option>
            <option>Month</option>
            <option>Quarter</option>
            <option>Yearly</option>
          </select>
        </div>

        {/* Buttons */}
        <button className="text-sm px-2 py-1 border rounded-md border-gray-300 text-gray-700 hover:bg-gray-100">
          Download
        </button>
        <button className="text-sm px-2 py-1 border rounded-md bg-gray-500 text-white hover:bg-gray-700">
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default TabGroup;
