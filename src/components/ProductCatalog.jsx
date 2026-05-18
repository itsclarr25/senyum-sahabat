const WA_NUMBER = '6285113177360';

const products = [
  'AC Split',
  'AC Cassette',
  'Pipa AC',
  'Freon Refrigerant',
  'Bracket AC',
  'Peralatan AC',
];

export default function ProductCatalog() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Katalog Produk</h3>
          <p className="text-gray-600 text-lg">
            Produk AC dan kebutuhan refrigeration berkualitas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-900 to-red-600 rounded-full mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-blue-900 mb-3">{product}</h4>
              <p className="text-gray-600 mb-6">Produk berkualitas dengan harga kompetitif.</p>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
              >
                Tanya Produk
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
