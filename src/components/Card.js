import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBed } from "react-icons/io5";
import { BiBath } from "react-icons/bi";

function Card(props) {
  const { imageUrl, price, location, address, beds, bathrooms, dimensions } =
    props;

  return (
    <div className="relative w-[100%] md:w-[calc(33.33% - 8px)] lg:w-[calc(33.33% - 16px)] h-[100%] rounded-[20px] flex flex-col items-start justify-start mb-4">
      <img src={imageUrl} className="w-full h-[70%] rounded-[20px]" alt="" />
      <div className="absolute top-0 right-0 bg-violet-600 text-white py-1 px-3 rounded-bl-[20px] font-medium">
        {price}
      </div>
      <div className="w-full h-[10%] flex flex-row items-center justify-between px-[10px]">
        <h1 className="text-[20px] font-medium text-gray-500">{price}</h1>
        <AiOutlineHeart />
      </div>
      <div className="w-full h-[20%] flex flex-col items-start justify-around px-[10px]">
        <h1 className="text-[20px] font-medium py-1">{location}</h1>
        <h1 className="text-[15px] font-medium text-gray-500 py-1">
          {address}
        </h1>
      </div>
      <div className="w-full h-[10%] flex flex-row items-center justify-around">
        <div className="w-[20%] h-full flex flex-row items-center justify-around">
          <IoBed />
          <h1 className="text-[15px] font-medium text-gray-500 py-1">{beds}</h1>
        </div>
        <div className="w-[31%] h-full flex flex-row items-center justify-around">
          <BiBath />
          <h1 className="text-[15px] font-medium text-gray-500 py-1">
            {bathrooms} bathrooms
          </h1>
        </div>
        <div className="w-[20%] h-full flex flex-row items-center justify-around">
          <h1 className="text-[15px] font-medium text-gray-500 py-1">
            {dimensions}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
