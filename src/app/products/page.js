"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.log(err));
  }, []);

  const handleBuy = (name) => {
    alert(`✅ ${name} purchased successfully!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">


      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          🌿 Agro Products
        </h1>
        <p className="text-gray-500 mt-2">
          Explore and buy quality products
        </p>
      </div>


      <div className="flex justify-center mb-10">
        <Link href="/admin/add-product">
          <button className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
            ➕ Add Product
          </button>
        </Link>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border"
          >


            <div className="h-44 bg-gray-100 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="h-full object-contain p-2"
              />
            </div>

 
            <div className="p-4 text-center">

              <h2 className="font-semibold text-green-700 text-lg">
                {p.name}
              </h2>

              <p className="text-sm text-gray-500">
                {p.category}
              </p>

              <p className="font-bold text-xl text-green-600 mt-2">
                ৳ {p.price}
              </p>

              <button
                onClick={() => handleBuy(p.name)}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
              >
                🛒 Buy Now
              </button>

            </div>

          </div>
        ))}

      </div>

      {products.length === 0 && (
        <div className="text-center mt-20 text-gray-500">
          <h2 className="text-xl font-semibold">
            No Products Available 😢
          </h2>
        </div>
      )}

    </div>
  );
}