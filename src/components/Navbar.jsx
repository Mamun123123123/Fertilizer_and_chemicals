"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md">

      <div className="flex justify-between items-center">

     
        <Link href="/" className="text-2xl font-bold">
          AgroShop
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/category/fertilizer">Fertilizer</Link>
          <Link href="/category/pesticide">Pesticide</Link>
          <Link href="/category/fungicide">Fungicide</Link>
          <Link href="/products">Products</Link>
          <Link href="/admin/dashboard">Admin</Link>
        </div>


        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden bg-green-800 p-4 rounded-lg">

          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/category/fertilizer" onClick={closeMenu}>Fertilizer</Link>
          <Link href="/category/pesticide" onClick={closeMenu}>Pesticide</Link>
          <Link href="/category/fungicide" onClick={closeMenu}>Fungicide</Link>
          <Link href="/products" onClick={closeMenu}>Products</Link>
          <Link href="/admin/dashboard" onClick={closeMenu}>Admin</Link>

        </div>
      )}

    </nav>
  );
}