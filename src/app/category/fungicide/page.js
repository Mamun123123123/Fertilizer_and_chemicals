export default function FungicidePage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            🍄 Fungicide Products
          </h1>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Advanced disease control solutions to protect crops from fungal infections and ensure healthy growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition">

            <div className="h-56 flex items-center justify-center bg-gray-50">
              <img
                src="/fungicide-1.webp"
                alt="Fungicide"
                className="h-full w-auto object-contain hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Leaf Protection Spray
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                Prevents leaf fungus and protects plants from early damage.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: Available</p>
                <p>⚡ Type: Fungicide</p>
                <p>🌱 Usage: Vegetables, Fruits, Rice</p>
              </div>

            </div>

          </div>

          <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition">

            <div className="h-56 flex items-center justify-center bg-gray-50">
              <img
                src="/fungicide-2.webp"
                alt="Fungicide"
                className="h-full w-auto object-contain hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Root Disease Control
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                Protects plant roots from fungal infection and rot.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: Limited</p>
                <p>⚡ Type: Fungicide</p>
                <p>🌱 Usage: All crops</p>
              </div>

            </div>

          </div>

          <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition">

            <div className="h-56 flex items-center justify-center bg-gray-50">
              <img
                src="/fungicide-3.webp"
                alt="Fungicide"
                className="h-full w-auto object-contain hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Crop Shield Solution
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                Full protection against fungal diseases for higher yield.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: In Stock</p>
                <p>⚡ Type: Fungicide</p>
                <p>🌱 Usage: Field crops</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}