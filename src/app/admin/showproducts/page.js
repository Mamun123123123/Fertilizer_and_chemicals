"use client";

import { useEffect, useState } from "react";

export default function ShowProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleBuy = (name) => {
    alert(`Successfully purchased: ${name} 🎉`);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-blue-50">
      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
     
            <div className="h-40 flex items-center justify-center bg-gray-100">
              <img
                src={p.image}
                alt={p.name}
                className="h-32 object-contain"
              />
            </div>

      
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {p.name}
              </h2>

              <p className="text-sm text-gray-500">{p.category}</p>

              <p className="text-xl font-bold text-green-600 mt-2">
                ৳ {p.price}
              </p>

              {/* Buy Button */}
              <button
                onClick={() => handleBuy(p.name)}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}