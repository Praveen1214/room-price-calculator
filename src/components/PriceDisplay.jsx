// src/components/PriceDisplay.js
import React from "react";

const PriceDisplay = ({ adultCost = 0, childrenCost = 0, totalPrice = 0 }) => {
    const formatCurrency = (value) => {
        if (typeof value !== 'number') {
            return ;
        }
        return `${value.toLocaleString()}`;
    };

    return (
        <div className="w-full ">
            <h3 className="text-lg font-bold mb-2">Cost</h3>
            <table className="w-full">
                <tbody>
                    <tr className="border-b">
                        <td className="py-3 px-2 font-small">Items</td>
                        <td className="py-2 px-3 font-small text-right">Amount</td>
                    </tr>

                    <tr>
                        <td className="py-3 px-2 ">Adult Cost</td>
                        <td className="py-2 px-3 text-right">{formatCurrency(adultCost)}</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-2">Children Cost</td>
                        <td className="py-2 px-3 text-right">{formatCurrency(childrenCost)}</td>
                    </tr>
                    <tr
                        className="font-bold "
                        style={{
                            
                            padding: "20px",
                            borderRadius: "8px",
                            border: "0.784px solid var(--Color-Usage-Stroke, #E0E0E0)"
                        }}
                    >
                        <td className="py-3 px-2">Total Price</td>
                        <td className="py-2 px-3 text-right">{formatCurrency(totalPrice)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PriceDisplay;
