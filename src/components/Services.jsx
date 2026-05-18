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
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Layanan Kami</h3>
          <p className="text-gray-600 text-lg">Solusi lengkap kebutuhan AC dan Refrigeration Anda</p>
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
