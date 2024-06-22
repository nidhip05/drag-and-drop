import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Header = ({ text, count, key }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-md top-0 sticky">
      <div
        className={`w-60 rounded-md text-black flex gap-3 justify-start items-center`}
        key={key}
      >
        <p className="capitalize font-medium text-black text-lg">{text}</p>
        <p className="rounded-full flex items-center justify-center text-black p-1.5 h-6 w-6 text-sm bg-gray-200">
          {count?.length}
        </p>
      </div>
      <div>
        <BsThreeDots className="text-xl text-slate-400" />
      </div>
    </div>
  );
};

export default Header;
