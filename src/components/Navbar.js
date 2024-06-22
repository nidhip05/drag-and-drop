import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-10 py-3 text-slate-400 bg-slate-50 grid grid-cols-[1fr,1fr,0fr] gap-5 rounded-tl-2xl rounded-tr-2xl shadow-lg">
      <div className="flex gap-10 items-center">
        <div className="flex items-center gap-5">
          <div className="bg-pink-500 text-white text-base font-semibold h-8 w-8 rounded-full flex justify-center items-center">
            T
          </div>
          <div className="text-base text-pink-500 font-semibold uppercase">
            Task
          </div>
        </div>
        <div className="rounded-3xl px-5 py-3 flex justify-between items-center h-12 bg-gray-100">
          <IoSearchSharp className="text-2xl bg-slate-100" />
          <input
            className="rounded-3xl px-5 py-3 text-black placeholder bg-gray-100"
            placeholder="Search something..."
          />
        </div>
      </div>
      <div className="flex gap-16 items-center text-base">
        <div className="text-pink-500 font-semibold">Project</div>
        <div className="text-gray-400 font-semibold">Settings</div>
        <div className="text-gray-400 font-semibold">Help</div>
      </div>
      <div className="relative">
        <IoMdNotifications className="text-4xl" />
        <div className="bg-red-500 rounded-full h-3 w-3 absolute top-[3px] right-[5px]"></div>
      </div>
    </div>
  );
};

export default Navbar;
