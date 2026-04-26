import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold mb-2">Login With</h1>
      <div className="flex flex-col gap-2">
      <button className=" btn  btn-outline text-green-500  w-full btn-sm hover:bg-green-500 hover:text-white">
        <FaGoogle /> Google
      </button>
      <button className=" btn btn-outline text-black hover:text-white w-full btn-sm hover:btn-neutral">
        <FaGithub />
        Github
      </button>
      </div>
    </div>
  );
};

export default RightSidebar;
