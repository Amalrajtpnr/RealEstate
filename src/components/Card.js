import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function Card(props) {
  const { imageUrl, price, location, address, beds } = props;

  return (
    <div className="w-[100%] md:w-[calc(33.33% - 8px)] lg:w-[calc(33.33% - 16px)] h-[100%] flex flex-col items-start justify-start border border-black mb-4">
      <img src={imageUrl} className="w-full h-[70%]" alt="" />
      <div className="w-full h-[10%] flex flex-row items-center justify-between px-[10px]">
        <h1 className="text-[20px] font-medium text-gray-500">{price}</h1>
        <AiOutlineHeart />
      </div>
      <h1 className="text-[20px] font-medium">{location}</h1>
      <h1 className="text-[15px] font-medium text-gray-500">{address}</h1>
      <div className="w-full h-[10%] flex flex-row items-center justify-around">
        <h1 className="text-[15px] font-medium text-gray-500">{beds}</h1>
      </div>
    </div>
  );
}

export default Card;
