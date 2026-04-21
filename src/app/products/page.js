"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10">

      <div className="max-w-7xl mx-auto">

    
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            🌿 Agro Products Shop
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Fresh fertilizers, pesticides & farming solutions
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">

            <Link href="/admin/add-product">
              <button className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
                ➕ Add Product
              </button>
            </Link>

            <Link href="/admin/showproducts">
              <button className="px-6 py-2 border border-green-600 text-green-700 rounded-full hover:bg-green-50 transition">
                👁 Manage Products
              </button>
            </Link>

          </div>
        </div>

        {loading && (
          <p className="text-center text-gray-500">
            Loading products...
          </p>
        )}

    
        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-500">
              😢 No Product Found
            </h2>
            <p className="text-gray-400 mt-2">
              Please add your first product
            </p>
          </div>
        )}

    
        {!loading &&
          categories.map((cat) => {
            const filtered = products.filter((p) => p.category === cat);

            return (
              <div key={cat} className="mb-16">

        
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-3">
                  {cat}
                </h2>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

                  {filtered.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border"
                    >

                    
                      <div className="h-32 bg-gray-50 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full object-contain"
                        />
                      </div>

                
                      <div className="p-3">

                        <h3 className="font-semibold text-green-700 text-sm truncate">
                          {product.name}
                        </h3>

                        <p className="text-xs text-gray-500">
                          {product.type}
                        </p>

                        <p className="font-bold text-gray-800 mt-1">
                          ৳ {product.price}
                        </p>

            
                        <div className="mt-3 flex gap-2">

                          <button className="flex-1 bg-green-600 text-white text-xs py-1 rounded-lg hover:bg-green-700">
                            Buy
                          </button>

                          <Link href={`/products/${product._id}`} className="flex-1">
                            <button className="w-full border text-xs py-1 rounded-lg hover:bg-gray-100">
                              Details
                            </button>
                          </Link>

                        </div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>
            );
          })}

      </div>
    </div>
  );
}