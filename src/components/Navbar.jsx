import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menü elemanları (Daha sonra id'lere göre kaydırma yapacağız)
  const navItems = [
    { label: 'Ana Sayfa', href: '#home' },
    { label: 'Hakkımda', href: '#about' },
    { label: 'Projelerim', href: '#projects' },
    { label: 'İletişim', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo Alanı */}
        <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
          <Code2 className="w-8 h-8 text-blue-500" />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Portfolio<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Mobil Menü Butonu (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
        >
          <span className="sr-only">Menüyü aç</span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Masaüstü Menü & Mobil Dropdown */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-slate-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 transition-colors"
                  onClick={() => setIsOpen(false)} // Mobilde tıklandığında menüyü kapat
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;