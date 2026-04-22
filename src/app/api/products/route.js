import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return Response.json(products);
  } catch (error) {
    console.log(error);
    return Response.json([]);
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const product = await Product.create(body);

    return Response.json(product);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Create failed" }, { status: 500 });
  }
}