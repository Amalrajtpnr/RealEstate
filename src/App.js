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
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cardData = [
    {
      imageUrl: "/home1.jpg",
      price: "$2500/month",
      location: "Palm Harbor",
      address: "2699 Grace Valley, Highland Lake, FL",
      beds: "3 Beds",
      dateProperty: "2023-09-15",
      propertyType: "Houses",
      bathrooms: "2",
      dimensions: "6 x 7.5 m2",
    },
    {
      imageUrl: "/home.jpg",
      price: "$1800/month",
      location: "Miami Beach",
      address: "123 Ocean Drive, Miami Beach, FL",
      beds: "2 Beds",
      dateProperty: "2023-09-20",
      propertyType: "Apartments",
      bathrooms: "1",
      dimensions: "5 x 6 m2",
    },
    {
      imageUrl: "/home3.jpeg",
      price: "$3200/month",
      location: "Los Angeles",
      address: "456 Sunset Blvd, Los Angeles, CA",
      beds: "4 Beds",
      dateProperty: "2023-09-10",
      propertyType: "Houses",
      bathrooms: "3",
      dimensions: "7 x 8 m2",
    },
    {
      imageUrl: "/home4.jpeg",
      price: "$2100/month",
      location: "San Francisco",
      address: "789 Hilltop Drive, San Francisco, CA",
      beds: "2 Beds",
      dateProperty: "2023-09-25",
      propertyType: "Apartments",
      bathrooms: "1",
      dimensions: "5.5 x 7.5 m2",
    },
    {
      imageUrl: "/home5.jpg",
      price: "$2800/month",
      location: "Chicago",
      address: "1011 Park Avenue, Chicago, IL",
      beds: "3 Beds",
      dateProperty: "2023-09-05",
      propertyType: "Houses",
      bathrooms: "2",
      dimensions: "6.5 x 8 m2",
    },
    {
      imageUrl: "/home6.jpg",
      price: "$1900/month",
      location: "Austin",
      address: "1313 Oak Street, Austin, TX",
      beds: "2 Beds",
      dateProperty: "2023-09-30",
      propertyType: "Apartments",
      bathrooms: "1",
      dimensions: "5 x 6 m2",
    },
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

      if (
        cardPrice < parseInt(minPrice, 10) ||
        cardPrice > parseInt(maxPrice, 10)
      ) {
        return false;
      }
    }

    if (selectedPropertyType && card.propertyType !== selectedPropertyType) {
      return false;
    }

    if (selectedLocation && card.location !== selectedLocation) {
      return false;
    }

    if (searchQuery) {
      const cardName = card.location.toLowerCase();
      if (!cardName.includes(searchQuery.toLowerCase())) {
        return false;
      }
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoIosArrowDown size={20} />
          </div>
        </div>
        <div className="w-full min-h-[20%] bg-white flex flex-row items-center justify-around ">
          <div className="w-[18%] h-[90%] border-r-4 flex flex-col items-start justify-around px-[10px]">
            <h1 className="text-[15px] font-normal text-gray-400">Location</h1>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-[75%] h-full focus:outline-none"
            >
              <option value="">All</option>
              <option value="Palm Harbor">Palm Harbor</option>
              <option value="Miami Beach">Miami Beach</option>
              <option value="Los Angeles">Los Angeles</option>
              {/* Add more location options as needed */}
            </select>
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
                <option value="Condos">Condos</option>
                {/* Add more property type options as needed */}
              </select>
            </div>
          </div>{" "}
          <div className="w-[10%] h-[35%] bg-violet-600 rounded-[10px] flex flex-col items-center justify-around px-[10px]">
            <h1
              className="text-[16px] font-semibold text-white"
              onClick={handleFilterClick}
            >
              Search
            </h1>
          </div>{" "}
        </div>
        <div className="w-full min-h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-4">
          {filteredCards.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
