export default function FertilizerPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            🌾 Fertilizer Products
          </h1>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Premium agricultural fertilizers designed to improve soil health, crop yield, and farming efficiency.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* UREA */}
          <div className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">

            <div className="overflow-hidden">
              <img
                src="/Urea-fertilizer.png"
                alt="Urea Fertilizer"
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Urea Fertilizer
              </h2>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                High nitrogen fertilizer that boosts leafy growth and improves overall crop productivity.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: Available</p>
                <p>⚡ Type: Nitrogen (N)</p>
                <p>🌱 Best for: Rice, Wheat, Vegetables</p>
              </div>

            </div>

          </div>

          {/* DAP */}
          <div className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">

            <div className="overflow-hidden">
              <img
                src="/dap-fertilizer.webp"
                alt="DAP Fertilizer"
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                DAP Fertilizer
              </h2>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Rich in phosphorus to strengthen root development and early plant growth.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: Limited</p>
                <p>⚡ Type: Phosphorus (P)</p>
                <p>🌱 Best for: Root crops, cereals</p>
              </div>

            </div>

          </div>

          {/* POTASH */}
          <div className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300">

            <div className="overflow-hidden">
              <img
                src="/potash-fertilizer.webp"
                alt="Potash Fertilizer"
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Potash Fertilizer
              </h2>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Improves fruit quality, disease resistance, and plant strength.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: In Stock</p>
                <p>⚡ Type: Potassium (K)</p>
                <p>🌱 Best for: Fruits & vegetables</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}