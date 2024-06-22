import React from "react";
import Header from "./Header";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { toast } from "react-toastify";

const Section = ({
  todo,
  inProgress,
  complete,
  tasks,
  setTasks,
  status,
  key,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToSection = (id) => {
    setTasks((prev) => {
      const mTasks = prev.map((item) => {
        if (item?.id === id) {
          return { ...item, status: status };
        }
        return item;
      });
      localStorage.setItem("tasks", JSON.stringify(mTasks));
      toast.success("Task status changed!");
      return mTasks;
    });
  };

  let text = "todo";
  let bg = "bg-slate-400";
  let taskToMap = 0;
  if (status === "todo") {
    text = "todo";
    bg = "bg-slate-400";
    taskToMap = todo;
  }
  if (status === "inprogress") {
    text = "In Progress";
    bg = "bg-purple-400";
    taskToMap = inProgress;
  }
  if (status === "complete") {
    text = "complete";
    bg = "bg-green-400";
    taskToMap = complete;
  }

  return (
    <div
      className={`h-[calc(100vh-284px)] overflow-auto todos
        ${isOver ? "bg-pink-100" : "bg-transparent"}
    `}
      ref={drop}
    >
      <div className={`grid gap-3 items-start rounded-md relative`}>
        <Header text={text} count={taskToMap} key={key} />
        {taskToMap &&
          taskToMap?.map((item) => (
            <Task task={item} setTasks={setTasks} tasks={tasks} />
          ))}
      </div>
    </div>
  );
};

export default Section;
