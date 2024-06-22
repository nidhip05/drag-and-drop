import React, { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ setIsModal, isModal, setTaskData }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    desc: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    setTaskData((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    setTask({
      id: "",
      name: "",
      desc: "",
      status: "todo",
    });
    toast.success("Task created successfully");
    setIsModal(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity z-10 ${
        isModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="bg-white rounded-lg p-4 transform transition-transform duration-300 ease-in-out w-[30rem]"
        style={{ transform: isModal ? "scale(1)" : "scale(0.95)" }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Add New Task</h2>
          <button
            onClick={() => setIsModal(false)}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-4"
              htmlFor="task"
            >
              Task
            </label>
            <input
              id="task"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Enter task"
              value={task.name}
              onChange={(e) =>
                setTask({ ...task, id: uuidv4(), name: e.target.value })
              }
            />
            <textarea
              id="task"
              type="text"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter description"
              value={task.desc}
              onChange={(e) => setTask({ ...task, desc: e.target.value })}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!task.name && !task.desc}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ${
                !task.name && !task.desc
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
