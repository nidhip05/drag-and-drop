import React from "react";
import TaskProgress from "./TaskProgress";
import RecentActivity from "./RecentActivity";

const RightBar = () => {
  return (
    <div className="grid gap-5">
      <TaskProgress />
      <RecentActivity />
    </div>
  );
};

export default RightBar;
