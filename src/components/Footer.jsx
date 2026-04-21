import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-extrabold text-green-700">
            Agro<span className="text-gray-900">Shop</span>
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Smart Fertilizer & Chemical Management System for modern agriculture.
            Manage products, stock, and orders easily.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-600">

            <li><Link href="/" className="hover:text-green-600">Home</Link></li>
            <li><Link href="/products" className="hover:text-green-600">Products</Link></li>
            <li><Link href="/category/fertilizer" className="hover:text-green-600">Fertilizer</Link></li>
            <li><Link href="/category/pesticide" className="hover:text-green-600">Pesticide</Link></li>
            <li><Link href="/category/fungicide" className="hover:text-green-600">Fungicide</Link></li>

          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
          <ul className="space-y-3 text-gray-600">

            <li>Stock Management</li>
            <li>Order Tracking</li>
            <li>Admin Dashboard</li>
            <li>Product Analytics</li>

          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-600">

            <li>Email: mamun@agroshop.com</li>
            <li>Phone: +880 1866418423</li>
            <li>Location: Bangladesh</li>

          </ul>
        </div>

      </div>

      <div className="border-t py-5 text-center text-gray-500 text-sm">
        © 2026 AgroShop • All rights reserved
      </div>

    </footer>
  );
};

export default Footer;