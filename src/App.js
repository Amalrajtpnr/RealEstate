import "./App.css";
import NavBar from "./components/NavBar.js";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import Card from "./components/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);

  const cardData = [
    {
      imageUrl: "/home1.jpg",
      price: "$2500/month",
      location: "Palm Harbor",
      address: "2699 Grace Valley, Highland Lake, FL",
      beds: "3 Beds",
      dateProperty: "2023-09-15", // Replace with actual date property
      propertyType: "Houses", // Replace with actual property type
    },
    {
      imageUrl: "/home.jpg",
      price: "$1800/month",
      location: "Miami Beach",
      address: "123 Ocean Drive, Miami Beach, FL",
      beds: "2 Beds",
      dateProperty: "2023-09-20", // Replace with actual date property
      propertyType: "Apartments", // Replace with actual property type
    },
    // Add more data as needed
  ];

  const handleFilterClick = () => {
    setFilterApplied(true);
  };

  const filteredCards = cardData.filter((card) => {
    if (selectedDate) {
      const cardDate = new Date(card.dateProperty);
      if (
        cardDate.getDate() !== selectedDate.getDate() ||
        cardDate.getMonth() !== selectedDate.getMonth() ||
        cardDate.getFullYear() !== selectedDate.getFullYear()
      ) {
        return false;
      }
    }

    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      const cardPrice = parseInt(card.price.replace(/[^0-9]/g, ""), 10);

      if (cardPrice < parseInt(minPrice, 10) || cardPrice > parseInt(maxPrice, 10)) {
        return false;
      }
    }

    if (selectedPropertyType && card.propertyType !== selectedPropertyType) {
      return false;
    }

    return true;
  });

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col items-center justify-start overflow-y-scroll">
      <NavBar />
      <div className="w-[85%] h-full  flex flex-col items-center justify-start  ">
        <div className="w-full min-h-[20%]  flex flex-row items-center justify-between">
          <h1 className="text-[30px] font-semibold">
            Search Properties to rent
          </h1>
          <div className="w-[20%] h-[30%] bg-white flex flex-row items-center justify-around border border-black ">
            <input
              type="text"
              className="w-[75%] h-full  focus:outline-none"
              placeholder="Search with search Bar"
            />
            <IoIosArrowDown size={20} />
          </div>
        </div>
        <div className="w-full min-h-[20%] bg-white flex flex-row items-center justify-around ">
          <div className="w-[18%] h-[90%] border-r-4 flex flex-col items-start justify-around px-[10px]">
            <h1 className="text-[15px] font-normal text-gray-400">Location</h1>
            <button className="text-[18px] font-semibold ">
              New York, USA
            </button>
          </div>
          <div className="w-[18%] h-[90%] border-r-4 flex flex-col items-start justify-around px-[10px]">
            <h1 className="text-[15px] font-normal text-gray-400">When</h1>
            <div className="w-full h-[40%] flex flex-row items-center justify-between">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Move-in Date"
              />
              <FaRegCalendarAlt />
            </div>
          </div>
          <div className="w-[18%] h-[90%] border-r-4 flex flex-col items-start justify-around px-[10px]">
            <h1 className="text-[15px] font-normal text-gray-400">Price</h1>
            <div className="w-full h-[40%] flex flex-row items-center justify-between">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-[75%] h-full focus:outline-none"
              >
                <option value="">All</option>
                <option value="0-500">$0 - $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-2000">$1000 - $2000</option>
                <option value="2000-3000">$2000 - $3000</option>
                {/* Add more price range options as needed */}
              </select>
            </div>
          </div>{" "}
          <div className="w-[18%] h-[90%] border-r-4 flex flex-col items-start justify-around px-[10px]">
            <h1 className="text-[15px] font-normal text-gray-400">
              Property Type
            </h1>
            <div className="w-full h-[40%] flex flex-row items-center justify-between">
              <select
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
                className="w-[75%] h-full focus:outline-none"
              >
                <option value="">All</option>
                <option value="Houses">Houses</option>
                <option value="Apartments">Apartments</option>
                {/* Add more property type options as needed */}
              </select>
            </div>
          </div>{" "}
          <div className="w-[12%] h-[55%] bg-violet-600 rounded-[10px] flex flex-col items-center justify-around px-[10px]">
            <h1 className="text-[16px] font-semibold text-white" onClick={handleFilterClick}>
              Search
            </h1>
          </div>{" "}
        </div>
        <div className="w-full min-h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {filteredCards.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
