import React, {useState, useEffect} from "react";
import Table from "../../components/Table";
import axios from "axios";

const Vendors = () => {

    const [isSideSheetOpen, setIsSideSheetOpen] = useState({ open: false, data: null });
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
                    const response = await axios.get('http://localhost:8080/vendor/get-all-vendors', { headers });
                    setData(response.data);
                } else {
                    const response = await axios.get(`http://localhost:8080/vendor/get-vendor/${searchTerm}`, { headers });
                    setData(response.data);
                }
                
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/vendor/get-all-vendors', { headers });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };
        fetchData();
    }, []);

    const columns = ["Vendor ID", "Company Name", "GSTIN", "Phone", "Notes", "Action"];

    const tableData = () => {
        let tab = [];
        console.log("Data:", data?.vendors, typeof data.vendors === 'object');
        if (data?.vendors && data.vendors.length > 0) {
            for (let i = 0; i < data.vendors.length; i++) {
                const temp = <>
                <td className="px-4 py-3">{data.vendors[i]._id}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                    <div className="font-bold text-white rounded-full bg-amber-700 w-[30px] h-[30px] flex items-center justify-center">{data.vendors[i].companyName[0]}</div>
                    <div>{data.vendors[i].companyName}</div>
                </td>
                <td className="px-4 py-3">{data.vendors[i].GSTIN}</td>
                <td className="px-4 py-3">{data.vendors[i].phone}</td>
                <td className="px-4 py-3"><button onClick={() => handleRowClick(data.vendors[i])} className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/eye.svg" alt="" /></button></td>
                <td className="px-4 py-3">
                    <button className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/trash.svg" alt="" /></button>
                </td>
                </>
                tab.push(temp);
            }
        } else if (data?.vendor && typeof data.vendor === 'object') {
            const temp = <>
                <td className="px-4 py-3">{data.vendor._id}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                    <div className="font-bold text-white rounded-full bg-amber-700 w-[30px] h-[30px] flex items-center justify-center">{data.vendor.companyName[0]}</div>
                    <div>{data.vendor.companyName}</div>
                </td>
                <td className="px-4 py-3">{data.vendor.GSTIN}</td>
                <td className="px-4 py-3">{data.vendor.phone}</td>
                <td className="px-4 py-3"><button onClick={() => handleRowClick(data.vendor)} className="bg-gray-200 text-white px-4 py-2 rounded"><img src="/assets/icons/eye.svg" alt="" /></button></td>
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
                        placeholder="Search by Vendor ID"
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
        </div>
    );
};

export default Vendors;
