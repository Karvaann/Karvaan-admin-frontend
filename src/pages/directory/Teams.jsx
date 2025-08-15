import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import SideSheet from "../../components/SideSheet";
import axios from "axios";
import AddMemberForm from "./create/AddMemberForm";

const Teams = () => {
  const [isSideSheetOpen, setIsSideSheetOpen] = useState({
    open: false,
    data: null,
  });
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [teamData, setTeamData] = useState([]);

  const handleRowClick = (customerData) => {
    setIsSideSheetOpen({ open: true, data: customerData });
  };

  const headers = {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token"),
  };

  const fetchDataBySearch = async () => {
    try {
      if (searchTerm.trim() === "") {
        const response = await axios.get(
          "http://localhost:8080/team/get-all-teams",
          { headers }
        );
        setData(response.data);
      } else {
        const response = await axios.get(
          `http://localhost:8080/team/get-team/${searchTerm}`,
          { headers }
        );
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/team/get-all-teams",
          { headers }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const columns = ["Agent ID", "Name", "Email", "Role", "Notes", "Actions"];

  const roleColumns = ["Roles", "Users", "Access Level", "Actions"];

  const tableData = () => {
    let tab = [];
    console.log("Data:", data, typeof data === "object");
    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i], "data[i");
        const temp = (
          <>
            <td className="px-4 py-3">{data[i]._id}</td>
            <td className="px-4 py-3 flex items-center gap-2">
              <div className="font-bold text-white rounded-full bg-amber-700 w-[30px] h-[30px] flex items-center justify-center">
                {data[i].name[0]}
              </div>
              <div>{data[i].name}</div>
            </td>
            <td className="px-4 py-3">{data[i].email}</td>
            <td className="px-4 py-3">{data[i].roleId.roleName}</td>
            <td className="px-4 py-3">
              <button
                onClick={() => handleRowClick(data[i])}
                className="bg-gray-200 text-white px-4 py-2 rounded"
              >
                <img src="/assets/icons/eye.svg" alt="" />
              </button>
            </td>
            <td className="px-4 py-3">
              <button className="bg-gray-200 text-white px-4 py-2 rounded">
                <img src="/assets/icons/trash.svg" alt="" />
              </button>
            </td>
          </>
        );
        tab.push(temp);
      }
    } else if (data?.team && typeof data.team === "object") {
      const temp = (
        <>
          <td className="px-4 py-3">{data.team._id}</td>
          <td className="px-4 py-3 flex items-center gap-2">
            <div className="font-bold text-white rounded-full bg-amber-700 w-[30px] h-[30px] flex items-center justify-center">
              {data.team.name[0]}
            </div>
            <div>{data.team.name}</div>
          </td>
          <td className="px-4 py-3">{data.team.email}</td>
          <td className="px-4 py-3">{data.team.roleId.roleName}</td>
          <td className="px-4 py-3">
            <button
              onClick={() => handleRowClick(data.team)}
              className="bg-gray-200 text-white px-4 py-2 rounded"
            >
              <img src="/assets/icons/eye.svg" alt="" />
            </button>
          </td>
          <td className="px-4 py-3">
            <button className="bg-gray-200 text-white px-4 py-2 rounded">
              <img src="/assets/icons/trash.svg" alt="" />
            </button>
          </td>
        </>
      );
      tab.push(temp);
    }
    console.log("Table Data:", tab);
    return tab;
  };

  return (
    <div className="bg-white rounded-2xl shadow pt-3 pl-[5rem] pr-[1rem] pb-6 text-left">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="rounded-xl text-left w-[25%]">
            <input
              type="text"
              placeholder="Search by Agent ID"
              className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchDataBySearch();
                }
              }}
              value={searchTerm}
            />
          </div>
          <button
            className="bg-[#114958] text-white px-8 py-2 rounded-lg shadow hover:bg-[#14505e] transition"
            onClick={() => handleRowClick()}
          >
            Add New Member
          </button>
        </div>
        <Table columns={columns} data={tableData()} />
      </div>

      <SideSheet
        isOpen={isSideSheetOpen.open}
        onClose={() => setIsSideSheetOpen({ open: false, data: null })}
        title="Add Member"
      >
        <AddMemberForm
          data={isSideSheetOpen.data}
          rolesData={teamData}
          onCancel={() => setIsSideSheetOpen({ open: false, data: null })}
        />
      </SideSheet>
    </div>
  );
};

export default Teams;
