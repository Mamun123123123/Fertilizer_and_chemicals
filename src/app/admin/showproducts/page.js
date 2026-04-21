"use client";

import { useEffect, useState } from "react";

export default function ShowProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        All Products
      </h1>

  
      {products.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold text-gray-500">
            😢 No Product Added Yet
          </h2>
          <p className="text-gray-400 mt-2">
            Please add a product first
          </p>
        </div>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {products.map((p) => (
            <div key={p._id} className="border p-3 rounded">

              <img
                src={p.image}
                className="h-32 object-contain mx-auto"
              />

              <h2 className="font-bold">{p.name}</h2>
              <p>{p.category}</p>
              <p>৳ {p.price}</p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}