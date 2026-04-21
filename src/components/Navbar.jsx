"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        
    
        <Link href="/" className="text-2xl font-bold">
          AgroShop
        </Link>


        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/category/fertilizer">Fertilizer</Link>
          <Link href="/category/pesticide">Pesticide</Link>
          <Link href="/category/fungicide">Fungicide</Link>
          <Link href="/products">Products</Link>
          <Link href="/admin/dashboard">Admin</Link>
        </div>

        
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>


      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/category/fertilizer">Fertilizer</Link>
          <Link href="/category/pesticide">Pesticide</Link>
          <Link href="/category/fungicide">Fungicide</Link>
          <Link href="/products">Products</Link>
          <Link href="/admin/dashboard">Admin</Link>
        </div>
      )}
    </nav>
  );
}