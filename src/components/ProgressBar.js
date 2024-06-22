// ProgressBar.js
import React from "react";

const ProgressBar = ({ task }) => {
  const percentage = (task.progress / task.total) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm mb-1 text-gray-500">{task.label}</span>
        <span className="text-sm text-gray-400">{`${task.progress}/${task.total}`}</span>
      </div>
      <div
        className={`w-full bg-gray-200 rounded-full h-2`}
        style={{ background: task.lightColor }}
      >
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${percentage}%`, background: task.color }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
