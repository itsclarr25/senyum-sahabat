import img1 from'../assets/111.jpeg'
import img2 from'../assets/222.jpeg'
import img3 from'../assets/333.jpeg'
import img4 from'../assets/444.jpeg'
import img5 from'../assets/555.jpeg'
import img6 from'../assets/666.jpeg'
import img7 from'../assets/777.jpeg'
import img8 from'../assets/888.jpeg'
import img9 from'../assets/999.jpeg'
import img10 from'../assets/10.jpeg'
import img11 from'../assets/11.jpeg'
import img12 from'../assets/12.jpeg'

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">
            Galeri Pekerjaan
          </h3>

          <p className="text-gray-600 text-lg">
            Dokumentasi project dan pekerjaan teknisi kami
          </p>
        </div>

        <div className="overflow-hidden">

          <div className="flex gap-6 animate-gallery whitespace-nowrap">

            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div
                key={index}
                className="min-w-[320px] overflow-hidden rounded-3xl shadow-xl bg-gray-100"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="h-80 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      <style jsx>{`
        .animate-gallery {
          animation: scrollGallery 35s linear infinite;
        }

        @keyframes scrollGallery {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  )
}
