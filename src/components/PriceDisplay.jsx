// src/components/PriceDisplay.js
import React from 'react';

const PriceDisplay = ({ roomType, adults, children }) => {
    const calculatePrice = () => {
        let price = 0;
        switch (roomType) {
            case 'Standard Double City View':
                price += 30000 * adults;
                price += children.filter(age => age >= 6 && age <= 12).length * 20000;
                price += children.filter(age => age < 6).length * 5000;
                break;
            case 'Superior Twin City View':
                price += 40000 * adults;
                price += children.filter(age => age >= 6 && age <= 12).length * 20000;
                price += children.filter(age => age < 6).length * 5000;
                break;
            case 'Superior Twin Sea View':
                price += 50000 * adults;
                price += children.filter(age => age >= 6 && age <= 12).length * 30000;
                price += children.filter(age => age < 6).length * 10000;
                break;
            default:
                break;
        }
        return price;
    };

    return (
        <div>
            <h2>Total Price: {calculatePrice()}</h2>
        </div>
    );
};

export default PriceDisplay;
