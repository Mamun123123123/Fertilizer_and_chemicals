export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative overflow-hidden">

     
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#d9ffe6,_transparent_55%)] pointer-events-none" />

      <main className="relative max-w-7xl mx-auto px-6 py-24">

   
        <section className="text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold shadow-sm border">
            🌿 Smart Agro Platform • v1.0
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Next-Gen Fertilizer & <br />
            <span className="text-green-600">Chemical Management System</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A modern digital platform to manage Urea, DAP, Potash, Pesticides, and Fungicides with real-time stock tracking, smart analytics, and admin control system.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
              🚀 Explore Products
            </button>

            <button className="px-8 py-3 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 hover:-translate-y-1 transition">
              ⚙️ Admin Dashboard
            </button>

            <button className="px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black hover:-translate-y-1 transition">
              📊 View Analytics
            </button>

          </div>

        </section>

        <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            ["500+", "Products"],
            ["120+", "Farmers"],
            ["24/7", "Support"],
            ["99%", "Accuracy"]
          ].map(([num, label], i) => (
            <div key={i} className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-green-600">{num}</h3>
              <p className="text-gray-500 mt-2">{label}</p>
            </div>
          ))}

        </section>

    
        <section className="mt-20 grid md:grid-cols-3 gap-8">

          {[
            {
              icon: "🌾",
              title: "Fertilizers",
              desc: "Manage Urea, DAP, Potash stock with real-time updates"
            },
            {
              icon: "🧪",
              title: "Pesticides",
              desc: "Advanced crop protection chemical tracking system"
            },
            {
              icon: "🍄",
              title: "Fungicides",
              desc: "Disease control & agricultural safety management tools"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-3xl">{item.icon}</div>

              <h2 className="mt-4 text-xl font-bold group-hover:text-green-600 transition">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>

              
            </div>
          ))}

        </section>

      </main>
    </div>
  );
}