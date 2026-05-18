import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Services     from './components/Services'
import Gallery      from './components/Gallery'
import ProductCatalog from './components/ProductCatalog'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

const WA_NUMBER = '6285113177360';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <ProductCatalog />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="wa-float fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl z-50 hover:scale-110 transition font-semibold"
      >
        WhatsApp
      </a>
    </div>
  );
}
