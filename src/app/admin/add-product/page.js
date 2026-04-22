"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    category: "",
    type: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      router.push("/admin/showproducts");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">

   
      <div className="flex gap-4 mb-6">

        <Link href="/admin/add-product">
          <button className="px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
            ➕ Add Product
          </button>
        </Link>

        <Link href="/admin/showproducts">
          <button className="px-6 py-2 border border-green-600 text-green-700 rounded-full hover:bg-green-50 transition">
            👁 Show Products
          </button>
        </Link>

      </div>

   
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          ➕ Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            name="category"
            placeholder="Category (e.g. Fertilizer)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="type"
            placeholder="Type (e.g. Nitrogen)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price (৳)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            {loading ? "Saving..." : "Save Product"}
          </button>

        </form>

      </div>

    </div>
  );
}