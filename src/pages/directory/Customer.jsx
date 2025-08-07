import React, {useState, useEffect} from "react";
import Table from "../../components/Table";
import SideSheet from "../../components/SideSheet";
import axios from "axios";
import CustomerForm from "./create/CustomerForm";
import { getRandomDarkBgClass } from "../../utils/helper";

const Customers = () => {

    const [isSideSheetOpen, setIsSideSheetOpen] = useState({ open: false, data: null });
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [teamData, setTeamData] = useState([]);

    const handleRowClick = (customerData) => {
        setIsSideSheetOpen({ open: true, data: customerData });
    };

    const headers = {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("token")
    };

    const fetchDataBySearch = async () => {
            try {
                if (searchTerm.trim() === "") {
                    const response = await axios.get('http://localhost:8080/customer/get-all-customers', { headers });
                    setData(response.data);
                } else {
                    const response = await axios.get(`http://localhost:8080/customer/get-customer/${searchTerm}`, { headers });
                    setData(response.data);
                }
                
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/customer/get-all-customers', { headers });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

        const fetchTeamData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/team/get-all-teams', { headers });
                setTeamData(response.data);
            } catch (error) {
                console.error("Error fetching team data:", error);
            }
        }

        fetchData();
        fetchTeamData();
    }, []);

    const columns = ["Customer ID", "Name", "Tier", "Owner", "Notes", "Action"];

    const tableData = () => {
        let tab = [];
        console.log("Data:", data?.customers, typeof data.customers === 'object');
        if (data?.customers && data.customers.length > 0) {
            for (let i = 0; i < data.customers.length; i++) {
                const temp = <>
                <td className="px-4 py-3">{data.customers[i]._id}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                    <div className={`font-bold text-white rounded-full ${getRandomDarkBgClass()} w-[30px] h-[30px] flex items-center justify-center`}>{data.customers[i].name[0]}</div>
                    <div>{data.customers[i].name}</div>
                </td>
                <td className="px-4 py-3">
                    <div className="font-bold text-amber-300 text-[10px] rounded-full bg-amber-100 pt-1 pb-1 pl-3 pr-3" style={{ width: 'max-content' }}>{data.customers[i].tier}</div>
                </td>
                <td className="px-4 py-3">{data.customers[i].ownerId.name}</td>
                <td className="px-4 py-3"><button onClick={() => handleRowClick(data.customers[i])} className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/eye.svg" alt="" /></button></td>
                <td className="px-4 py-3">
                    <button className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/trash.svg" alt="" /></button>
                </td>
                </>
                tab.push(temp);
            }
        } else if (data?.customer && typeof data.customer === 'object') {
            const temp = <>
                <td className="px-4 py-3">{data.customer._id}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                    <div className="font-bold text-white rounded-full bg-amber-700 w-[30px] h-[30px] flex items-center justify-center">{data.customer.name[0]}</div>
                    <div>{data.customer.name}</div>
                </td>
                <td className="px-4 py-3">
                    <div className="font-bold text-amber-300 text-[10px] rounded-full bg-amber-100 pt-1 pb-1 pl-3 pr-3" style={{ width: 'max-content' }}>{data.customer.tier}</div>
                </td>
                <td className="px-4 py-3">{data.customer.ownerId.name}</td>
                <td className="px-4 py-3"><button onClick={() => handleRowClick(data.customer)} className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/eye.svg" alt="" /></button></td>
                <td className="px-4 py-3">
                    <button className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/trash.svg" alt="" /></button>
                </td>
                </>
                tab.push(temp);
        }
        console.log("Table Data:", tab);
        return tab;
    };


    return (
        <div className="bg-white rounded-2xl shadow pt-3 pl-[5rem] pr-[1rem] pb-6 text-left">
            <div className="flex justify-between items-center mb-4">
                <div className="rounded-xl text-left w-[25%]">
                    <label className="block mb-2">Search</label>
                    <input
                        type="text"
                        placeholder="Search by Customer ID"
                        className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                fetchDataBySearch();
                            }
                        }}
                        value={searchTerm}
                    />
                </div>
                <button className="bg-[#114958] text-white px-8 py-2 rounded-lg shadow hover:bg-[#14505e] transition"  onClick={() => handleRowClick()}>
                    Create
                </button>
            </div>
            <Table columns={columns} data={tableData()} />
            <SideSheet isOpen={isSideSheetOpen.open} onClose={() => setIsSideSheetOpen({ open: false, data: null })} title="Customer Details">
                <CustomerForm data={isSideSheetOpen.data} teamData={teamData} />
            </SideSheet>
        </div>
    );
};

export default Customers;
