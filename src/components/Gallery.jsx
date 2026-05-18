import img1 from'../assets/111.jpeg'
import img2 from'../assets/222.jpeg'
import img3 from'../assets/333.jpeg'
import img4 from'../assets/444.jpeg'

const galleryImages = [img1, img2, img3, img4];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Galeri Pekerjaan</h3>
          <p className="text-gray-600 text-lg">Dokumentasi project dan pekerjaan teknisi kami</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-xl bg-gray-100">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="h-80 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
