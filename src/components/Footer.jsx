const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-8">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} <span className="text-white font-medium">Portfolio</span>. Tüm hakları saklıdır.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          React, Tailwind CSS ve Vite ile tasarlandı. ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;