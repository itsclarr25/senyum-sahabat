import about from'../assets/cvsenyumsahabat.jpg'
export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div>
          <img
            src= {about}
            alt="About CV Senyum Sahabat"
            className="rounded-3xl shadow-xl w-full bg-gray-100 min-h-[300px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-4xl font-bold mb-6 text-blue-900">Tentang Kami</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            CV. Senyum Sahabat adalah perusahaan yang bergerak di bidang AC & Refrigeration
            dengan fokus pada pelayanan cepat, profesional, dan terpercaya.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            Kami melayani instalasi AC baru, bongkar pasang AC, service AC, cuci AC,
            pengisian freon, maintenance rutin, hingga penanganan kerusakan AC untuk
            kebutuhan rumah tangga maupun komersial.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-blue-50 p-5 rounded-2xl shadow-sm">
              <h4 className="text-3xl font-bold text-red-600">100.000+</h4>
              <p>Project Selesai</p>
            </div>
            <div className="bg-red-50 p-5 rounded-2xl shadow-sm">
              <h4 className="text-3xl font-bold text-blue-900">24/7</h4>
              <p>Layanan Responsif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
