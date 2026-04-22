import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";


export async function GET(req, context) {
  const { params } = await context;

  try {
    await connectDB();

    const product = await Product.findById(params.id);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}


export async function PUT(req, context) {
  const { params } = await context;

  try {
    await connectDB();

    const body = await req.json();

    const updated = await Product.findByIdAndUpdate(
      params.id,
      body,
      {
        returnDocument: "after", // ✅ FIXED (Mongoose warning)
        runValidators: true,
      }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.log("UPDATE ERROR:", error);

    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}


export async function DELETE(req, context) {
  const { params } = await context;

  try {
    await connectDB();

    const deleted = await Product.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Deleted permanently",
    });
  } catch (error) {
    console.log("DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Delete failed" },
      { status: 500 }
    );
  }
}