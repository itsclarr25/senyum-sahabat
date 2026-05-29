import logo from'../assets/cvsenyumsahabat.jpg'
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="CV Senyum Sahabat"
            className="w-12 h-12 rounded-full object-cover bg-gray-200"
          />
          <div>
            <h1 className="font-bold text-xl text-blue-900">CV. Senyum Sahabat</h1>
            <p className="text-sm text-gray-500">Mechanical & Electrical</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#home"     className="hover:text-red-600 transition-colors">Home</a>
          <a href="#about"    className="hover:text-red-600 transition-colors">Tentang</a>
          <a href="#services" className="hover:text-red-600 transition-colors">Layanan</a>
          <a href="#gallery"  className="hover:text-red-600 transition-colors">Galeri</a>
          <a href="#contact"  className="hover:text-red-600 transition-colors">Kontak</a>
        </nav>
      </div>
    </header>
  );
}
