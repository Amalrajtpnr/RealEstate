import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

function NavBar() {
  return (
    <div className="w-full min-h-[20%] bg-white flex flex-row items-center justify-between overflow-hidden px-[20px]">
      <div className="w-[60%] h-full flex flex-row items-center justify-around ">
        <div className="w-[20%] h-full   flex flex-row items-center justify-around">
          <BsFillBuildingsFill size={35} color="violet" />
          <h1 className="text-[25px]  font-bold text-violet-600">Estatery</h1>
        </div>
        <div className="w-[70%] h-full  flex flex-row items-center justify-around">
          <button className="text-[15px] hover:bg-violet-400  font-semibold">
            Rent
          </button>
          <button className="text-[15px] hover:bg-violet-400  font-semibold">
            Buy
          </button>
          <button className="text-[15px] hover:bg-violet-400  font-semibold">
            Sell
          </button>
          <div className="w-[32%] hover:bg-violet-400  h-[15%] flex flex-row items-center justify-around">
            <h1 className="text-[15px]  font-semibold">Manage Resourse</h1>
            <IoIosArrowDown size={20} />
          </div>
          <div className="w-[20%] hover:bg-violet-400  h-[15%] flex flex-row items-center justify-around">
            <h1 className="text-[15px] font-semibold">Resources</h1>

            <IoIosArrowDown size={20} />
          </div>
        </div>
      </div>
      <div className="w-[25%] h-full flex flex-row items-center justify-around  ">
        <button className="w-[35%] h-[40%] rounded-md border hover:bg-violet-400 border-violet-600 text-[15px] font-semibold">
          Login
        </button>
        <button className="w-[35%] h-[40%] rounded-md border hover:bg-violet-400 border-violet-600 text-[15px] font-semibold">
          Signup
        </button>
      </div>
    </div>
  );
}

export default NavBar;
