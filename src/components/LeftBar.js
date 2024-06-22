import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";
import AddTask from "./AddTask";
import ListTask from "./ListTasks";

const LeftBar = ({ taskData, setTaskData }) => {
  const [isModal, setIsModal] = useState(false);
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTaskData(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleSubmit = (e) => {
    setTaskData((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
    toast.success("Task created successfully");
    setIsModal(false);
  };

  return (
    <div className="px-12 py-8 h-[calc(100vh-140px)] border border-r-2 border-r-gray-200 border-l-0 border-b-0 border-t-0">
      <div className="flex justify-between items-center mb-10">
        <div className="text-2xl font-semibold">Task Board</div>
        <div
          className="flex items-center gap-2 bg-green-500 text-white rounded-lg p-2 cursor-pointer"
          onClick={handleOpenModal}
        >
          <FiPlus className="text-lg text-white" />
          <div className="font-semibold text-sm">Add New Task</div>
        </div>
        {isModal && (
          <AddTask
            handleSubmit={handleSubmit}
            setIsModal={setIsModal}
            isModal={isModal}
            taskData={taskData}
            setTaskData={setTaskData}
          />
        )}
      </div>
      <ListTask tasks={taskData} setTasks={setTaskData} />
    </div>
  );
};

export default LeftBar;
