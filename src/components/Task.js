import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useDrag } from "react-dnd";
import { IoChatboxSharp } from "react-icons/io5";
import { TiAttachment } from "react-icons/ti";
import { FaFlag } from "react-icons/fa";

const Task = ({ task, setTasks, tasks }) => {
  const handleRemove = (id) => {
    console.log(id, "id");
    const fTask = tasks.filter((f) => f.id !== id);
    console.log(fTask);
    localStorage.setItem("tasks", JSON.stringify(fTask));
    setTasks(fTask);
    toast.success("Task removed successfully");
  };
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={` bg-white grid gap-2 rounded-lg p-4 text-black cursor-pointer ${
        isDragging ? "opacity-40" : "opacity-100"
      }`}
      ref={drag}
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="flex justify-between items-center">
        <div className="bg-pink-100 text-pink-600 rounded-lg px-2 py-1.5 line-clamp-1 mr-4 text-sm">
          {task?.name}
        </div>
        <button
          onClick={() => handleRemove(task?.id)}
          className="bg-pink-100 h-6 w-6 rounded-full flex justify-center items-center"
        >
          <RxCross2 className="text-base text-pink-600" />
        </button>
      </div>
      <div className="font-medium text-xs text-zinc-500 line-clamp-2">
        {task?.desc}
      </div>
      <div className="flex justify-between items-center gap-5 mt-5 border-t-2 border-gray-100 pt-3">
        <div className="flex items-center gap-2">
          <FaFlag className="text-base text-slate-300" />
          <div className="font-medium text-zinc-400 text-xs">Nov 20, 24</div>
        </div>
        <div className="flex items-center gap-2">
          <IoChatboxSharp className="text-base text-slate-300" />
          <div className="font-medium text-zinc-400 text-xs">2</div>
        </div>
        <div className="flex items-center gap-2">
          <TiAttachment className="text-xl text-slate-300" />
          <div className="font-medium text-zinc-400 text-xs">5</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
