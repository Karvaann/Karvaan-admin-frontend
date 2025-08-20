import React, { useState } from "react";

const sections = [
  { title: "Overview" },
  { title: "Data Collection" },
  {
    title: "How We Use Your Data",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repellendus commodi mollitia sed nam. Possimus, quasi nihil. Ipsum tempore itaque earum excepturi accusamus repudiandae, quas, at nobis expedita, porro esse.",
  },
  { title: "Your Privacy Rights" },
  { title: "Data Security" },
  { title: "Third-Party Sharing" },
  { title: "Cookie Policy" },
];

const PrivacyPolicy = () => {
  const [open, setOpen] = useState(Array(sections.length).fill(false));

  const togglePolicySection = (idx) => {
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 w-[100%] mx-auto">
      <div className="p-2 border-b border-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-2">Privacy Policy</h2>
        <div className="text-gray-500 text-sm mt-1 mb-3">
          Last updated: January 1, 2025 &nbsp;
        </div>
      </div>
      <div className="bg-blue-100 p-4 rounded-lg mx-5 mt-5 text-gray-700 text-[15px]">
        This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our services. We are committed to
        maintaining your trust and ensuring transparency in our data practices.
      </div>
      <div className="mx-5 mt-4">
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className="mb-3 rounded-lg border border-gray-200 bg-gray-50"
          >
            <button
              onClick={() => togglePolicySection(idx)}
              className="w-full text-left bg-transparent border-none outline-none px-5 py-4 font-semibold text-base flex items-center cursor-pointer rounded-lg focus:ring-2 focus:ring-blue-200 transition-all"
              type="button"
            >
              <span className="mr-2 text-lg">
                {section.title === "Third-Party Sharing" ? "🔗" : "📄"}
              </span>
              {section.title}
              <span className="ml-auto text-lg text-gray-400">
                {open[idx] ? "▲" : "▼"}
              </span>
            </button>
            {open[idx] && (
              <div className="px-5 pb-4 pl-12 text-gray-600 text-[15px]">
                Placeholder content for {section.title}.
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-gray-50 border-t border-gray-200 px-7 py-7 rounded-b-xl mt-8 text-center ml-5 mr-5">
        <div className="font-semibold text-lg mb-2">
          Questions About Our Privacy Policy?
        </div>
        <div className="text-gray-600 text-[15px] mb-4">
          If you have any questions or concerns about this privacy policy or our
          data practices, please don't hesitate to contact us.
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white border-none rounded-md px-6 py-2.5 font-medium text-[15px] cursor-pointer flex items-center gap-2 hover:bg-blue-600 ">
            <span className="text-lg">✉️</span> Contact Team
          </button>
          <button className="bg-gray-100 text-gray-800 border border-gray-300 rounded-md px-6  font-medium text-[15px]  flex items-center gap-2 hover:bg-gray-200 ">
            <span className="text-lg">⬇️</span> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
