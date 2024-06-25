import React, { useState, useEffect,useMemo  } from "react";
import { Icon } from "@iconify/react";
import PriceDisplay from "./PriceDisplay";

const RoomForm = () => {
    const [roomType, setRoomType] = useState("");
    const [adults, setAdults] = useState("");
    const [children, setChildren] = useState([]);
    const [childAge, setChildAge] = useState("");
    const [childNumber, setChildNumber] = useState("");
    const [adultCost, setAdultCost] = useState(0);
    const [childrenCost, setChildrenCost] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const roomPrices = useMemo(() => ({
        "Standard Double City View": { adult: 30000, child6To12: 20000, child0To5: 5000 },
        "Superior Twin City View": { adult: 40000, child6To12: 20000, child0To5: 5000 },
        "Superior Twin Sea View": { adult: 50000, child6To12: 30000, child0To5: 10000 },
    }), []);
        
    const addChild = () => {
        if (childAge && childNumber) {
            setChildren([...children, { age: parseInt(childAge, 10), number: parseInt(childNumber, 10) }]);
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
        setAdultCost(0);
        setChildrenCost(0);
        setTotalPrice(0);
    };

    const deleteChild = (index) => {
        const updatedChildren = [...children];
        updatedChildren.splice(index, 1);
        setChildren(updatedChildren);
    };

    useEffect(() => {
        if (roomType && adults) {
            const roomPrice = roomPrices[roomType];
            const adultTotal = roomPrice.adult * parseInt(adults, 10);

            let childTotal = 0;
            children.forEach((child) => {
                if (child.age >= 6 && child.age <= 12) {
                    childTotal += roomPrice.child6To12 * child.number;
                } else if (child.age >= 0 && child.age <= 5) {
                    childTotal += roomPrice.child0To5 * child.number;
                }
            });

            setAdultCost(adultTotal);
            setChildrenCost(childTotal);
            setTotalPrice(adultTotal + childTotal);
        }
    }, [roomType, adults, children,roomPrices]);

    return (
        <>
        <div className="flex flex-col md:flex-row md:space-x-4 p-4 mr-1">
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
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2">Age</th>
                                    <th className="p-2">Number of Children</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {children.map((child, index) => (
                                    <tr key={index} className="bg-white">
                                        <td className="p-2 text-center">{child.age}</td>
                                        <td className="p-2 text-center">{child.number}</td>
                                        <td className="p-2 text-center">
                                            <button
                                                onClick={() => deleteChild(index)}
                                                className="text-custom-red-500"
                                            >
                                                <Icon icon="akar-icons:trash-can" width="20" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

           
            
        </div>

        <div className="flex-1 bg-transparent text-black p-4 rounded-md mb-4 md:mb-0 border border-solid border-gray-200">
                <PriceDisplay
                    adultCost={adultCost}
                    childrenCost={childrenCost}
                    totalPrice={totalPrice}
                />
            </div>
    
</>
        
    );
};

export default RoomForm;
