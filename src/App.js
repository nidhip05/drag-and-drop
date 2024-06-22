import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar.js";
import { useEffect, useState } from "react";

function App() {
  const [taskData, setTaskData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTaskData(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className="w-screen h-screen flex items-center flex-col"
        style={{
          background: "linear-gradient(180deg, #fbc2eb 0%, #a6c1ee 100%)",
        }}
      >
        <div className="w-[calc(100vw-80px)] mx-auto my-10 h-[calc(100vh-62px)]">
          <Navbar />
          <div
            className="grid grid-cols-[1fr,0.2fr] rounded-bl-2xl rounded-br-2xl rounded-tl-0 rounded-tr-0 h-[calc(100vh-140px)] bg-gray-100"
            // style={{ backgroundImage: `url('/bg.webp')` }}
          >
            <LeftBar taskData={taskData} setTaskData={setTaskData} />
            <RightBar />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
