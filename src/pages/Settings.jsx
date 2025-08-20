import { useState } from "react";
import ProfileSummary from "../components/ProfileSummary";
import TermsConditions from "../components/TermsConditions";
import PrivacyPolicy from "../components/PrivacyPolicy";

const menuOptions = [
  { key: "profile", label: "Profile And Summary" },
  { key: "roles", label: "Roles And Permissions" },
  { key: "terms", label: "Terms And Conditions" },
  { key: "privacy", label: "Privacy Policy" },
];

const mockContent = {
  profile: <ProfileSummary />,
  roles: <RolesPermissionsSection />, // Custom component for roles/permissions
  terms: <TermsConditions />,
  privacy: <PrivacyPolicy />,
};
// Roles permission sections
const roleCategories = [
  { key: "sales", label: "Sales" },
  { key: "operations", label: "Operations" },
  { key: "user", label: "User Access" },
];

const staticpermissionsData = {
  sales: {
    title: "Sales Permissions",
    subtitle: "Configure access permissions for sales-related functionalities",
    areas: [{ area: "Sales", permissions: [false, false, false, false] }],
  },
  operations: {
    title: "Operations Permissions",
    subtitle:
      "Configure access permissions for operations-related functionalities",
    areas: [
      { area: "Voucher", permissions: [false, false, false, false] },
      { area: "Content", permissions: [false, false, false, false] },
    ],
  },
  user: {
    title: "User Access Permissions",
    subtitle:
      "Configure access permissions for user access-related functionalities",
    areas: [
      { area: "Roles", permissions: [false, false, false, false] },
      { area: "User", permissions: [false, false, false, false] },
    ],
  },
};

function RolesPermissionsSection() {
  const [selectedCategory, setSelectedCategory] = useState("sales");
  const [permissionsData, setPermissionsData] = useState(staticpermissionsData);

  const { title, subtitle, areas } = permissionsData[selectedCategory];

  const handlePermissionsChange = (categoryKey, rowIdx, permIdx) => {
    setPermissionsData((prev) => {
      const newCategory = { ...prev[categoryKey] };
      const newAreas = [...newCategory.areas];
      const newPermissions = [...newAreas[rowIdx].permissions];
      newPermissions[permIdx] = !newPermissions[permIdx]; // toggle
      newAreas[rowIdx] = {
        ...newAreas[rowIdx],
        permissions: newPermissions,
      };
      newCategory.areas = newAreas;

      return {
        ...prev,
        [categoryKey]: newCategory,
      };
    });
  };

  return (
    <div className="flex h-full">
      <div className="w-[30%] min-w-[180px] max-w-xs bg-white shadow-md flex flex-col p-6 border-r border-gray-200 rounded-l-lg">
        <div className="mb-4 text-gray-700 font-semibold text-lg">
          Role Categories
        </div>
        {roleCategories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`mb-2 px-4 py-2 rounded text-left font-medium transition-colors w-full ${
              selectedCategory === cat.key
                ? "bg-[#1A3447] text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {/* Right: Permissions Table */}
      <div className="w-[70%] flex-1 p-8 bg-white rounded-r-lg">
        <div className="mb-2 text-xl font-semibold text-gray-800">{title}</div>
        <div className="mb-6 text-gray-500 text-sm">{subtitle}</div>
        <div className="border rounded-lg p-4 bg-gray-50">
          <table className="w-full text-center">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="py-2 font-medium text-left pl-4">Area</th>
                <th className="py-2 font-medium">Create</th>
                <th className="py-2 font-medium">Read</th>
                <th className="py-2 font-medium">Update</th>
                <th className="py-2 font-medium">Delete</th>
              </tr>
            </thead>
            <tbody>
              {areas.map((row, idx) => (
                <tr key={row.area} className="bg-white border-t">
                  <td className="py-3 text-left pl-4 font-medium text-gray-700">
                    {row.area}
                  </td>
                  {[0, 1, 2, 3].map((permIdx) => (
                    <td key={permIdx}>
                      <input
                        type="checkbox"
                        className="accent-[#1A3447] w-4 h-4"
                        checked={row.permissions[permIdx]}
                        onChange={() =>
                          handlePermissionsChange(
                            selectedCategory,
                            idx,
                            permIdx
                          )
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const Settings = () => {
  const [selected, setSelected] = useState("profile");

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <div className="w-[30%] min-w-[220px] max-w-sm bg-white shadow-md flex flex-col justify-start items-stretch p-8 border-r border-gray-200">
        {menuOptions.map((option) => (
          <button
            key={option.key}
            className={`mb-4 p-4 rounded cursor-pointer transition-colors font-medium text-lg ${
              selected === option.key
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelected(option.key)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="w-[70%] flex-1 p-10 overflow-y-auto">
        {mockContent[selected]}
      </div>
    </div>
  );
};

export default Settings;
