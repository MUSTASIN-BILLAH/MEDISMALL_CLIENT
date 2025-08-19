import React, { useEffect, useState } from "react";

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/medicines")
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch medicines:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading medicines...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Medicines</h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {medicines.map((med) => (
          <div
            key={med._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Medicine Image */}
            <img
              src={med.image}
              alt={med.name}
              className="w-full h-48 object-cover"
            />

            {/* Card content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{med.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{med.brand}</p>
              <p className="text-sm mb-2">{med.description}</p>
              <p className="text-sm text-gray-600 mb-2">
                Category: {med.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Vendor: {med.vendor}
              </p>
              <p className="text-lg font-bold text-green-600 mb-2">
                ${med.price.toFixed(2)}
              </p>
              <p
                className={`text-sm font-semibold ${
                  med.stock > 0 ? "text-blue-600" : "text-red-600"
                }`}
              >
                {med.stock > 0 ? `In Stock: ${med.stock}` : "Out of Stock"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineList;
