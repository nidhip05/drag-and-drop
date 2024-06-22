import React from "react";
import ProgressBar from "./ProgressBar";

const TaskProgress = () => {
  const tasks = [
    {
      label: "Copywriting",
      progress: 3,
      total: 8,
      color: "rgb(192 132 252 / var(--tw-bg-opacity))",
      lightColor: "rgb(233 213 255 / var(--tw-bg-opacity))",
    },
    {
      label: "Illustrations",
      progress: 6,
      total: 10,
      color: "rgb(74 222 128 / var(--tw-bg-opacity))",
      lightColor: "rgb(187 247 208 / var(--tw-bg-opacity))",
    },
    {
      label: "UI Design",
      progress: 2,
      total: 7,
      color: "rgb(96 165 250 / var(--tw-bg-opacity))",
      lightColor: "rgb(191 219 254 / var(--tw-bg-opacity))",
    },
  ];
  return (
    <div className="px-6 py-6 grid gap-2">
      <div className="mb-3 mt-4 text-base font-medium">Task Progress</div>
      {tasks.map((task, index) => (
        <ProgressBar key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskProgress;
