import React, { useState } from "react";
import serviceFormConfig from "../data/serviceConfig.json";

const BookingForm = ({ selectedService }) => {
  const sections = serviceFormConfig[selectedService] || {};
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <div className="space-y-4">
      {Object.entries(sections).map(([sectionName, fields], idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection(sectionName)}
            className={`w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-lg bg-white  ${openSections[sectionName] ? 'border-b' : ''} `}
          >
            <span>{sectionName}</span>
            <span>{openSections[sectionName] ? "▲" : "▼"}</span>
          </button>

          {openSections[sectionName] && (
            <div className="grid grid-cols-3 gap-4 p-4 space-y-4 bg-white">
              {fields.map((field, i) => {
                if (field.type === "select") {
                  return (
                    <div className="flex flex-col items-stretch" key={i}>
                      <label className="block text-sm font-medium mb-1 text-left">{field.label}</label>
                      <select name={field.name} className="w-full border rounded px-3 py-2">
                        {field.options.map((opt, j) => (
                          <option key={j} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                return (
                  <div key={i}>
                    <label className="block text-sm font-medium mb-1 text-left">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingForm;
