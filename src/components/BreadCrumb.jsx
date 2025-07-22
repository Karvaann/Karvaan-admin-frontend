import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const BreadCrumb = () => {
  return (
    <>
      {/* Breadcrumb Row */}
      <div className="flex items-center px-8 py-3 bg-gray-100 border-b border-gray-200">
        <IoHomeOutline className="w-5 h-5 mr-2 text-[#114958]" />
        <span className="text-gray-400 mx-2">/</span>
        <span className="text-[#114958] font-medium mr-2"> Sales</span>
        <span className="text-gray-400 mx-2">/</span>
        <span className="text-gray-700 font-medium">OS</span>
      </div>
    </>
  );
};

export default BreadCrumb;
