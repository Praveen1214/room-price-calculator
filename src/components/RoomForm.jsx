import React, { useState } from "react";

const RoomForm = ({ onUpdate }) => {
  const [roomType, setRoomType] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState([]);
  const [childAge, setChildAge] = useState("");
  const [childNumber, setChildNumber] = useState("");

  const addChild = () => {
    if (childAge && childNumber) {
      setChildren([...children, { age: childAge, number: childNumber }]);
      setChildAge("");
      setChildNumber("");
    }
  };

  const resetForm = () => {
    setRoomType("");
    setAdults("");
    setChildren([]);
    setChildAge("");
    setChildNumber("");
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 p-4">
      <div className="flex-1 bg-gray-50-custom text-black p-4 rounded-md mb-4 md:mb-0">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-bold">Room Price Calculator</h2>
          <button
            className="text-custom-red px-4 py-2 rounded-md"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="roomType" className="mb-2">
            Room Type
          </label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="px-4 py-2 rounded-md"
          >
            <option value="" disabled>
              Select a room type
            </option>
            <option value="Standard Double City View">
              Standard Double City View
            </option>
            <option value="Superior Twin City View">
              Superior Twin City View
            </option>
            <option value="Superior Twin Sea View">
              Superior Twin Sea View
            </option>
          </select>
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="adults" className="mb-2">
            Adults
          </label>
          <input
            type="text"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            placeholder="Enter number of adults"
            className="px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="children" className="mb-2">
            Children
          </label>
          <div className="flex flex-row items-center md:space-x-4">
            <input
              type="text"
              id="childAge"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              placeholder="Age"
              className="px-4 py-2 rounded-md"
            />
            <input
              type="text"
              id="childNumber"
              value={childNumber}
              onChange={(e) => setChildNumber(e.target.value)}
              placeholder="No of children"
              className="px-4 py-2 rounded-md"
            />
            <button
              onClick={addChild}
              className="text-white bg-custom-blue px-4 py-2 rounded-md ml-2"
            >
              Add
            </button>
          </div>
        </div>

        {children.length > 0 && (
          <div className="mt-4">
            <h3 className="text-md font-bold mb-2">Children List</h3>
            <div className="flex flex-col space-y-2">
              {children.map((child, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-between items-center bg-gray-100 p-2 rounded-md"
                >
                  <span>Age: {child.age}</span>
                  <span>Number of Children: {child.number}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomForm;
