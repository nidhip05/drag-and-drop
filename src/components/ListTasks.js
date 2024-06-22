import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
  // const [todo, setTodo] = useState([]);
  // const [inProgress, setInProgress] = useState([]);
  // const [complete, setComplete] = useState([]);
  const [todo, setTodo] = useState([
    {
      id: "0",
      name: "Draft Proposal for Client Meeting",
      desc: "Prepare a detailed proposal outlining project scope, timeline, and deliverables for the client meeting scheduled next week.",
      status: "todo",
    },
    {
      id: "1",
      name: "Research Market Trends",
      desc: "Conduct research on current market trends and competitor analysis to inform the Q3 report.",
      status: "todo",
    },
  ]);
  const [inProgress, setInProgress] = useState([
    {
      id: "2",
      name: "Schedule Team Brainstorming Session",
      desc: "Coordinate and schedule a team brainstorming session to generate ideas and strategies for the upcoming project.",
      status: "inprogress",
    },
  ]);
  const [complete, setComplete] = useState([
    {
      id: "3",
      name: "Reviewing Draft Designs for Website Redesign",
      desc: "Reviewing and providing feedback on the initial draft designs for the upcoming website redesign project to ensure alignment with project goals and brand identity.",
      status: "complete",
    },
    {
      id: "4",
      name: "Updated Client Database",
      desc: "Completed updating the client database with the latest contact information and preferences to improve communication and client relationship management.",
      status: "complete",
    },
  ]);
  const statuses = ["todo", "inprogress", "complete"];

  useEffect(() => {
    if (!isEmpty(tasks)) {
      const fTodo = tasks?.filter((item) => item.status == "todo");
      const fInProgress = tasks?.filter((item) => item.status == "inprogress");
      const fComplete = tasks?.filter((item) => item.status == "complete");
      setTodo(fTodo);
      setInProgress(fInProgress);
      setComplete(fComplete);
    }
  }, [tasks]);

  useEffect(() => {
    const allTasks = [...todo, ...inProgress, ...complete];
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [todo, inProgress, complete]);

  return (
    <div className="grid grid-cols-3 gap-12 items-start">
      {statuses.map((status, index) => (
        <>
          <Section
            todo={todo}
            inProgress={inProgress}
            complete={complete}
            tasks={tasks}
            setTasks={setTasks}
            status={status}
            key={index}
          />
        </>
      ))}
    </div>
  );
};

export default ListTasks;
