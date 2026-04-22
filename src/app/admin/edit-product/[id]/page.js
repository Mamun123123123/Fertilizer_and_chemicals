"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    type: "",
    price: "",
    image: "",
  });

  
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/products/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();

        setForm({
          name: data?.name || "",
          category: data?.category || "",
          type: data?.type || "",
          price: data?.price || "",
          image: data?.image || "",
        });
      } catch (err) {
        console.log("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      console.log("Updating product:", form);

      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const error = await res.json();
        console.log("Update failed:", error);
        alert("Update failed!");
        return;
      }

      router.push("/admin/showproducts");
    } catch (err) {
      console.log("Update error:", err);
    } finally {
      setSubmitting(false);
    }
  };

 
  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">

      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-3"
      >

        <h1 className="text-xl font-bold text-center text-green-700">
          ✏️ Edit Product
        </h1>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          placeholder="Product Name"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          placeholder="Category"
        />

        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          placeholder="Type"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          placeholder="Price"
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          placeholder="Image URL"
        />

        <button
          type="submit"
          disabled={submitting}
          className={`w-full text-white py-2 rounded ${
            submitting
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {submitting ? "Updating..." : "Update Product"}
        </button>

      </form>

    </div>
  );
}