import React from "react";
import Activity from "./Activity";
import { GrAttachment } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";

const activities = [
  {
    icon: <GrAttachment className="text-white" />,
    color: "rgb(249 115 22 / var(--tw-bg-opacity))",
    name: "Andrew",
    desc: "uploaded 3 documents",
    date: "Aug 10",
  },
  {
    icon: <FaMessage className="text-white" />,
    color: "rgb(34 197 94 / var(--tw-bg-opacity))",
    name: "Tom",
    desc: "leave some comments",
    date: "Aug 12",
  },
  {
    icon: <HiPencil className="text-white" />,
    color: "rgb(59 130 246 / var(--tw-bg-opacity))",
    name: "Julia",
    desc: "changed project description",
    date: "Sep 1",
  },
];

const RecentActivity = () => {
  return (
    <div className="mb-10">
      <div className="mt-2 mb-2 mx-6 text-base font-medium">
        Recent Activity
      </div>
      <div className="px-6 py-4 grid gap-10 overflow-auto">
        {activities.map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
