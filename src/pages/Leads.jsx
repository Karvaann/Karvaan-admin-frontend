import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import { useState } from "react";

const Leads = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} />
      <div>
        <h1> Leads </h1>
      </div>
    </>
  );
};

export default Leads;
