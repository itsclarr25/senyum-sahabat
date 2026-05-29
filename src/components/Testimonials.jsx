const testimonials = [
  {
    name: 'Budi Santoso',
    review: 'Pelayanan cepat dan teknisinya sangat profesional. AC kembali dingin.',
  },
  {
    name: 'Rina Amelia',
    review: 'Pengerjaan rapi dan harga sangat bersaing. Recommended banget.',
  },
  {
    name: 'Andi Prasetyo',
    review: 'Respon cepat dan hasil service sangat memuaskan untuk kantor kami.',
  },
  {
    name: 'Dewi Lestari',
    review: 'Teknisi datang tepat waktu dan pemasangan AC sangat rapi serta aman.',
  },
  {
    name: 'Fajar Nugroho',
    review: 'Service panel listrik sangat profesional dan penjelasannya mudah dipahami.',
  },
  {
    name: 'Maya Putri',
    review: 'Perawatan AC rutin untuk cafe kami hasilnya sangat memuaskan.',
  },
  {
    name: 'Rizky Hidayat',
    review: 'Instalasi listrik gedung cepat, rapi, dan sesuai standar keamanan.',
  },
  {
    name: 'Siti Rahma',
    review: 'Admin responsif dan pengerjaan genset ATS berjalan baik tanpa kendala.',
  },
  {
    name: 'Yoga Pramana',
    review: 'Harga transparan, pelayanan ramah, dan hasil sangat memuaskan.',
  },
  {
    name: 'Nanda Wijaya',
    review: 'Teknisi sangat berpengalaman dan hasil pemasangan AC sangat bersih.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">
            Testimoni Pelanggan
          </h3>

          <p className="text-gray-600 text-lg">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        <div className="relative overflow-hidden">

          <div className="flex gap-8 animate-scroll whitespace-nowrap">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-[500px] bg-gray-100 p-8 rounded-3xl shadow-lg"
              >
                <p className="text-gray-600 italic mb-6 break-words whitespace-normal">
                  "{item.review}"
                </p>

                <h4 className="font-bold text-xl text-blue-900">
                  {item.name}
                </h4>
              </div>
            ))}

          </div>

        </div>

      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}
