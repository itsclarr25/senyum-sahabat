const WA_NUMBER = '6285113177360';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-blue-900 to-red-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Info */}
        <div>
          <h3 className="text-4xl font-bold mb-6">Hubungi Kami</h3>
          <div className="space-y-5 text-lg">
            <p>
              <strong>WhatsApp:</strong> 085113177360
            </p>
            <p>
              <strong>Email:</strong> cv.senyumsahabat@gmail.com
            </p>
            <p>
              <strong>Alamat:</strong>
              <br />
              Jl. Griya Candramas Blok FB-17, Pepe,
              <br />
              Kec. Sedati, Kab. Sidoarjo, Jawa Timur
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-white text-red-600 px-6 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>

        {/* Maps */}
        <div className="rounded-3xl overflow-hidden shadow-2xl min-h-[350px]">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Jl.%20Griya%20Candramas%20Blok%20FB-17%20Sedati%20Sidoarjo&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
