import React from "react";
import { Tag } from "lucide-react";

const discounts = [
  {
    title: "Summer Sale",
    description: "Get up to 20% off on all pain relief medicines.",
  },
  {
    title: "Buy 2 Get 1",
    description: "Buy two medicines and get one free on selected items.",
  },
  {
    title: "New User Discount",
    description: "First-time users get 10% off on their first order.",
  },
  {
    title: "Festive Offer",
    description: "Special discounts during festive seasons on all categories.",
  },
];

const DiscountSection = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Current Discounts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {discounts.map((discount, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <Tag className="text-gray-700 w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{discount.title}</h3>
              <p className="text-gray-600 text-sm">{discount.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountSection;
