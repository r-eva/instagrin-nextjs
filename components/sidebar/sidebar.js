"use client";
import { signOut } from "next-auth/react";
export default function Sidebar() {
  function logoutHandler() {
    signOut();
  }
  return (
    <div className="flex">
      <div className=" bg-white border border-r-gray-200 h-screen p-5 pt-8 w-72">
        <div className=" h-1/5">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
            className=" w-28 item-center"
          ></img>
        </div>
        <div className="flex flex-col h-3/5 gap-4 my-4 border-gray-100 pb-4 ">
          <button className="mb-2 hover:bg-gray-100 p-2 rounded-md group cursor-pointer text-black">
            <h3>Dasboard</h3>
          </button>
          <button className="mb-2 hover:bg-gray-100 p-2 rounded-md group cursor-pointer text-black">
            <h3>Search</h3>
          </button>
          <button className="mb-2  hover:bg-gray-100 p-2 rounded-md group cursor-pointer text-black">
            <h3>Profile</h3>
          </button>
        </div>
        <div className="flex h-1/5 flex-col gap-4 my-4 border-gray-100 pb-4">
          <button
            className="mb-2  hover:bg-gray-100 p-2 rounded-md group cursor-pointer text-black"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
