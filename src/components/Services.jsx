const services = [
  {
    title: 'Instalasi AC',
    desc: 'Pemasangan AC baru dengan standar instalasi profesional dan rapi.',
  },
  {
    title: 'Service AC',
    desc: 'Perbaikan AC bermasalah, tidak dingin, bocor, mati total, dan lainnya.',
  },
  {
    title: 'Cuci AC',
    desc: 'Pembersihan indoor dan outdoor agar AC kembali dingin dan hemat listrik.',
  },
  {
    title: 'Isi Freon',
    desc: 'Pengisian freon sesuai standar tekanan dan jenis refrigerant.',
  },
  {
    title: 'Maintenance Rutin',
    desc: 'Perawatan berkala untuk kantor, cafe, restoran, dan perusahaan.',
  },
  {
    title: 'Bongkar Pasang AC',
    desc: 'Jasa bongkar pasang AC pindahan dengan aman dan profesional.',
  },
  {
    title: "Instalasi Panel Listrik",
    desc: "Pemasangan panel listrik untuk kebutuhan industri dan gedung dengan standar keamanan terbaik.",
  },
  {
    title: "Perawatan Panel Listrik",
    desc: "Pengecekan dan maintenance panel listrik secara berkala agar sistem tetap aman dan stabil.",
  },
  {
    title: "Instalasi Listrik Gedung",
    desc: "Pengerjaan instalasi listrik untuk rumah, kantor, dan bangunan komersial secara profesional.",
  },
  {
    title: "Genset Automatic Transfer Switch",
    desc: "Pemasangan sistem ATS genset agar perpindahan daya listrik berjalan otomatis dan aman.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Layanan Kami</h3>
          <p className="text-gray-600 text-lg">Maintenance listrik dan AC</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-900 rounded-2xl mb-6" />
              <h4 className="text-2xl font-bold mb-4 text-blue-900">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
