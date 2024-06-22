import React from "react";

const Activity = ({ activity }) => {
  console.log(activity);
  return (
    <div className="grid grid-cols-[0.2fr,1fr] gap-4 items-start">
      <div
        className="rounded-full h-10 w-10 flex justify-center items-center"
        style={{ background: activity.color }}
      >
        {activity.icon}
      </div>
      <div className="leading-4">
        <span className="font-medium text-black text-sm">{activity.name}</span>{" "}
        <span className="text-gray-500 text-sm">{activity.desc}</span>
        <div className="text-gray-500 text-sm">{activity.date}</div>
      </div>
    </div>
  );
};

export default Activity;
