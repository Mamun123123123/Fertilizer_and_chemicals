async function getProduct(id) {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();

  return data.find((p) => String(p.id) === String(id)) || null;
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold text-red-500">
          Product not found 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-12">

      <div className="max-w-4xl mx-auto border rounded-2xl shadow-lg p-6">

        <img
          src={product.image}
          className="h-72 w-full object-cover rounded-xl"
          alt={product.name}
        />

        <h1 className="text-3xl font-bold text-green-700 mt-6">
          {product.name}
        </h1>

        <p className="text-gray-600 mt-3">
          {product.description}
        </p>

        <div className="mt-4 text-gray-500 space-y-1">
          <p>📦 Category: {product.category}</p>
          <p>⚡ Type: {product.type}</p>
          <p>💰 Price: ৳ {product.price}</p>
        </div>

        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg">
          Buy Now
        </button>

      </div>

    </div>
  );
}