export default function PesticidePage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            🧪 Pesticide Products
          </h1>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Advanced crop protection solutions to control insects, pests, and diseases effectively.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition">

            <div className="h-56 flex items-center justify-center bg-gray-50">
              <img
                src="/pesticide-1.webp"
                alt="Pesticide"
                className="h-full w-auto object-contain group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Insect Control Spray
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                Powerful insecticide for controlling harmful crop insects and improving yield.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: Available</p>
                <p>⚡ Type: Insecticide</p>
                <p>🌱 Usage: Rice, Vegetables, Fruits</p>
              </div>

            </div>

          </div>

          <div className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition">

            <div className="h-56 flex items-center justify-center bg-gray-50">
              <img
                src="/pesticide-2.webp"
                alt="Pesticide"
                className="h-full w-auto object-contain group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Fungus Protection Spray
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                Prevents fungal infections and keeps crops healthy and disease-free.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: Limited</p>
                <p>⚡ Type: Fungicide</p>
                <p>🌱 Usage: All crops</p>
              </div>

            </div>

          </div>

          <div className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition">

            <div className="h-56 flex items-center justify-center bg-gray-50">
              <img
                src="/pesticide-3.webp"
                alt="Pesticide"
                className="h-full w-auto object-contain group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-xl font-bold text-green-600">
                Weed Control Solution
              </h2>

              <p className="text-gray-600 mt-2 text-sm">
                Effective herbicide to remove unwanted weeds from farmland.
              </p>

              <div className="mt-4 text-sm text-gray-500 space-y-1">
                <p>📦 Stock: In Stock</p>
                <p>⚡ Type: Herbicide</p>
                <p>🌱 Usage: Paddy fields, Crops</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}