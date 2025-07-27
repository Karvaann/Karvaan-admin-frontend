import React from "react";
import Table from "../../components/Table";

const Customers = () => {

    const customerData = [
        { customerId: "C001", name: "Customer A", tier: "Tier 1", owner: "Alice", notes: "VIP customer" },
        { customerId: "C002", name: "Customer B", tier: "Tier 1", owner: "Bob", notes: "Frequent buyer" },
        { customerId: "C003", name: "Customer C", tier: "Tier 1", owner: "Charlie", notes: "New customer" }
    ];

    const columns = ["Customer ID", "Name", "Tier", "Owner", "Notes", "Action"];

    const data = customerData.map(row => [
            <td className="px-4 py-3">{row.customerId}</td>,
            <td className="px-4 py-3 flex items-center gap-2">
                <div className="font-bold text-white rounded-full bg-amber-700 w-[30px] h-[30px] flex items-center justify-center">{row.name[0]}</div>
                <div>{row.name}</div>
            </td>,
            <td className="px-4 py-3">
                <div className="font-bold text-amber-300 text-[10px] rounded-full bg-amber-100 pt-1 pb-1 pl-3 pr-3" style={{ width: 'max-content' }}>{row.tier}</div>
            </td>,
            <td className="px-4 py-3">{row.owner}</td>,
            <td className="px-4 py-3"><button className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/eye.svg" alt="" /></button></td>,
            <td className="px-4 py-3">
                <button className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/trash.svg" alt="" /></button>
            </td>
        ]);


    return (
        <div className="bg-white rounded-2xl shadow pt-3 pl-[5rem] pr-[1rem] pb-6 text-left">
            <div className="flex justify-between items-center mb-4">
                <div className="rounded-xl text-left w-[25%]">
                    <label className="block mb-2">Search</label>
                    <input
                        type="text"
                        placeholder="Search by Customer ID or Name"
                        className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
                    />
                </div>
                <button className="bg-[#114958] text-white px-8 py-2 rounded-lg shadow hover:bg-[#14505e] transition">
                    Create
                </button>
            </div>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default Customers;
