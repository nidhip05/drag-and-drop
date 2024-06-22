import React, { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { taskStore } from "../store/tasks";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3) {
      return toast.error("Enter more than 3 characters");
    }
    if (task.name.length > 100) {
      return toast.error("Cannot add more than 100 characters");
    }
    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("Task created successfully");
    // setTask({
    //   id: "",
    //   name: "",
    //   status: "todo",
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center m-10 gap-4"
    >
      <input
        type="text"
        className="border-slate-300 border-2 rounded-md p-3 h-10 focus-within:outline-none"
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button className="bg-cyan-400 rounded-md p-2 text-white">Create</button>
    </form>
  );
};

export default CreateTask;
