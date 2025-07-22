import React from "react";
import Calendar from "../components/Calender";

const Dashboard = () => {

    const [calenderShow, setCalenderShow] = React.useState(false);
    const today = new Date();
    const days = [-2, -1, 0, 1, 2];

    const taskData = {
        "-2": [
          ["Review quarterly reports", "bg-blue-100 text-blue-700"],
          ["Team standup meeting", "bg-green-100 text-green-700"],
          ["Client presentation prep", "bg-yellow-100 text-yellow-700"],
        ],
        "-1": [
          ["Design system update", "bg-purple-100 text-purple-700"],
          ["Bug fixes deployment", "bg-red-100 text-red-700"],
          ["Marketing strategy call", "bg-pink-100 text-pink-700"],
        ],
        "0": [
          ["Database optimization", "bg-cyan-100 text-cyan-700"],
          ["User testing feedback", "bg-orange-100 text-orange-700"],
        ],
        "1": [
          ["Sprint planning", "bg-green-100 text-green-700"],
          ["Documentation update", "bg-lime-100 text-lime-700"],
          ["Performance metrics", "bg-yellow-100 text-yellow-700"],
        ],
        "2": [
          ["Weekly retrospective", "bg-red-100 text-red-700"],
          ["Feature deployment", "bg-purple-100 text-purple-700"],
          ["Team lunch meeting", "bg-green-100 text-green-700"],
          ["Project milestone", "bg-blue-100 text-blue-700"],
        ],
      }

      const formatDate = (date) => {
        const day = date.getDate();
        const suffix =
          day % 10 === 1 && day !== 11
            ? "st"
            : day % 10 === 2 && day !== 12
            ? "nd"
            : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";
        const month = date.toLocaleString("default", { month: "short" });
        return `${day}${suffix} ${month}`;
      };

    return (
        <div className="transition-all duration-500 ease-in-out flex-1 ml-[44px] scale-100 w-[95vw] pl-[3%] mt-10">
            {!calenderShow && <div className="flex flex-col items-start self-stretch rounded-[16px] border border-gray-100 bg-white shadow-sm w-[100%]">
                <div className="flex justify-between items-center w-[100%] px-5 py-4 border-b border-[#E2E1E1]">
                    <div className="flex items-center h-8 px-4 py-2 rounded-full bg-[#DCFCE7] text-[#166534] font-poppins text-base font-semibold leading-8">Hurrah! You are up to Date</div>
                    <div className="flex items-center justify-between gap-2">
                        <button type="button" className="flex items-center justify-center h-10 px-5 py-2 rounded-lg bg-[#114958] text-white text-center font-poppins text-base font-normal leading-6">Tasks +</button>
                        <button type="button" onClick={() => setCalenderShow(!calenderShow)} className="flex items-center justify-center h-10 px-5 py-2 rounded-lg border border-[#114958] bg-white text-[#114958] text-center font-poppins text-base font-normal leading-6">{calenderShow ? 'Collapse' : 'Expand'}</button>
                    </div>
                </div>
                <div className="flex justify-between items-center w-[100%] px-5 py-4">
                    <div className="flex gap-4 w-full">
                        {days.map((offset) => {
                        const currentDate = new Date();
                        currentDate.setDate(today.getDate() + offset);
                        const dateLabel = formatDate(currentDate);
                        const tasks = taskData[offset] || [];

                        return (
                            <div
                            key={offset}
                            className={`flex-shrink-0 w-64 rounded-xl bg-[#F9FAFB] border border-gray-200 shadow-sm p-4`}
                            >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-800">{dateLabel}</h3>
                                <span className="text-gray-400">👁</span>
                            </div>
                            <ul className="space-y-2">
                                {tasks.map(([text, style], i) => (
                                <li
                                    key={i}
                                    className={`text-sm font-medium px-3 py-1 rounded-full ${style}`}
                                >
                                    {text}
                                </li>
                                ))}
                            </ul>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </div>}
            {!calenderShow && <div className="flex gap-6 p-6">
                <div className="bg-white p-6 rounded-xl shadow w-1/3">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Task Overview</h2>
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                        <input type="checkbox" checked readOnly className="accent-green-500" />
                    </div>
                    </div>
                    <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex justify-between">
                        <span>Completed</span>
                        <span className="text-green-500 font-semibold">24</span>
                    </li>
                    <li className="flex justify-between">
                        <span>In Progress</span>
                        <span className="text-blue-500 font-semibold">8</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Pending</span>
                        <span className="text-orange-500 font-semibold">3</span>
                    </li>
                    </ul>
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                    <div className="h-full bg-teal-900 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <p className="text-sm text-gray-500 text-center">68% completion rate</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow w-1/3">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Team Performance</h2>
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-green-700">
                        👥
                    </div>
                    </div>
                    {[
                    { name: 'Ashish Sharma', percent: 85, color: 'bg-blue-500' },
                    { name: 'Sara Jain', percent: 92, color: 'bg-green-500' },
                    { name: 'Manish Jena', percent: 78, color: 'bg-purple-500' }
                    ].map((member, idx) => (
                    <div key={idx} className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                        <div className={`w-6 h-6 text-white font-medium flex items-center justify-center rounded-full ${member.color}`}>
                            {member.name[0]}
                        </div>
                        <span className="text-gray-700 font-medium">{member.name}</span>
                        <span className="ml-auto text-gray-700 font-medium">{member.percent}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className={`h-full rounded-full ${member.color}`} style={{ width: `${member.percent}%` }}></div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-xl shadow w-1/3">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
                    <div className="w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full">
                        🕒
                    </div>
                    </div>
                    {[
                    {
                        title: 'Task completed',
                        description: 'Database optimization finished',
                        time: '2 hours ago',
                        dot: 'bg-green-500'
                    },
                    {
                        title: 'New task assigned',
                        description: 'User interface improvements',
                        time: '4 hours ago',
                        dot: 'bg-blue-500'
                    },
                    {
                        title: 'Meeting scheduled',
                        description: 'Sprint planning session',
                        time: '6 hours ago',
                        dot: 'bg-yellow-500'
                    }
                    ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-start mb-4">
                        <div className="flex items-start gap-2">
                        <span className={`w-2 h-2 rounded-full ${item.dot}`}></span>
                        <span className="font-semibold text-gray-800">{item.title}</span>
                        </div>
                        <p className="text-sm text-gray-600 pl-4">{item.description}</p>
                        <p className="text-xs text-gray-400 pl-4">{item.time}</p>
                    </div>
                    ))}
                </div>
            </div>}
            {calenderShow && <Calendar setCalenderShow={setCalenderShow} calenderShow={calenderShow} />}
        </div>
    );
};

export default Dashboard;
