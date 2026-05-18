const testimonials = [
  {
    name: 'Budi Santoso',
    review: 'Pelayanan cepat dan teknisinya sangat profesional. AC kembali dingin maksimal.',
  },
  {
    name: 'Rina Amelia',
    review: 'Pengerjaan rapi dan harga sangat bersaing. Recommended banget.',
  },
  {
    name: 'Andi Prasetyo',
    review: 'Respon cepat dan hasil service sangat memuaskan untuk kantor kami.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Testimoni Pelanggan</h3>
          <p className="text-gray-600 text-lg">Kepuasan pelanggan adalah prioritas kami</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-3xl shadow-lg">
              <p className="text-gray-600 italic mb-6">"{item.review}"</p>
              <h4 className="font-bold text-xl text-blue-900">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
