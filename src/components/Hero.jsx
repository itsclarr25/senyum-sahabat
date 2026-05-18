import hero from'../assets/111.jpeg'
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-900 to-red-600 flex items-center text-white pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* Text */}
        <div>
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Solusi Profesional AC & Refrigeration
          </h2>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            CV. Senyum Sahabat melayani instalasi AC, service AC, cuci AC,
            perawatan dan kebutuhan refrigeration untuk rumah, kantor,
            restoran, cafe, dan industri.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/6285113177360"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Hubungi WhatsApp
            </a>
            <a
              href="#services"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <img
            src={hero}
            alt="Teknisi AC"
            className="rounded-3xl shadow-2xl w-full bg-white/10 min-h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
