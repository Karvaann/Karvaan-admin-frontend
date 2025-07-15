import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

const StatCard = ({ title, value, change, trend, bgColor = "bg-white" }) => {
  return (
    <div className={`rounded-lg shadow overflow-hidden ${bgColor}`}>
      <div className="p-5">
        <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <div className="ml-2 flex items-center text-sm">
            <span
              className={`font-medium ${
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                  ? "text-red-600"
                  : "text-gray-500"
              }`}
            >
              {change}
            </span>
            {trend === "up" && (
              <BiTrendingUp size={16} className="ml-1 text-green-600" />
            )}
            {trend === "down" && (
              <BiTrendingDown size={16} className="ml-1 text-red-600" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
