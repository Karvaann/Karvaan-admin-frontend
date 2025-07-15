import Sidebar from "./../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} />
      <div>
        <h1>Tasks</h1>
      </div>
    </>
  );
};

export default Tasks;
