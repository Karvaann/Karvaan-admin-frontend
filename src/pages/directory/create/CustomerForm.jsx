import React from 'react';

const CustomerForm = ({ data, teamData }) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [owner, setOwner] = React.useState("");
    
    React.useEffect(() => {
        if (data) {
            setName(data.name || "");
            setEmail(data.email || "");
            setPhone(data.phone || "");
            setAddress(data.address || "");
            setOwner(data.ownerId._id || "");
        }

        return () => {
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setOwner("");
        }
    }, [data]);

    return (
        <div className="p-4 w-[550px]">
            <div className="rounded-xl text-left w-full">
                <label className="block mb-2">Name</label>
                <input
                    type="text"
                    placeholder="Enter Customer Name"
                    className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <div className="rounded-xl text-left w-full">
                <label className="block mb-2">Email</label>
                <input
                    type="text"
                    placeholder="Enter Customer Email"
                    className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="rounded-xl text-left w-full">
                <label className="block mb-2">Phone Number</label>
                <input
                    type="text"
                    placeholder="Enter Customer Phone Number"
                    className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
            </div>
            <div className="rounded-xl text-left w-full">
                <label className="block mb-2">Address</label>
                <input
                    type="text"
                    placeholder="Enter Customer Address"
                    className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                />
            </div>
            <div className="rounded-xl text-left w-full">
                <label className="block mb-2">Owner</label>
                <select
                    type="text"
                    placeholder="Enter Customer Owner"
                    className="w-full border border-gray-300 rounded-lg px-2 py-3 text-gray-500 focus:outline-none"
                    onChange={(e) => setOwner(e.target.value)}
                    value={owner}
                >
                    {
                        teamData.map((member) => (
                            <option key={member._id} value={member._id}>
                                {member.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default CustomerForm;
