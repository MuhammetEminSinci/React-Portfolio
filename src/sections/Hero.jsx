import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Karşılama Rozeti */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Çalışmaya Hazır
        </div>

        {/* Ana Başlık */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Merhaba, Ben <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Muhammet Emin Sinci
          </span>
        </h1>

        {/* Açıklama Yazısı */}
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Modern web teknolojileri ile kullanıcı dostu, performanslı ve estetik arayüzler tasarlıyorum. 
          React, Tailwind CSS ve modern frontend araçlarıyla fikirleri hayata geçiriyorum.
        </p>

        {/* Butonlar Grubu */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2"
          >
            Projelerimi İncele
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://github.com/MuhammetEminSinci" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-700 hover:border-gray-500 hover:bg-white/5 text-white rounded-full font-medium transition-all flex items-center gap-2"
          >
            <Github size={20} />
            GitHub Profilim
          </a>
        </div>

        {/* Sosyal İkonlar (Opsiyonel alt kısım) */}
        <div className="mt-12 flex items-center justify-center gap-6 text-gray-500">
            <a href=" https://www.linkedin.com/in/muhammet-emin-sinci-46901b365/" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="https://github.com/MuhammetEminSinci" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="mailto:muhammeteminsinci@gmail.com" className="hover:text-red-400 transition-colors"><Mail size={24} /></a>
        </div>

      </div>
    </section>
  );
};

export default Hero;