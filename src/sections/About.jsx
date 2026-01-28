import { Code2, Globe, Cpu } from 'lucide-react';
import { skills } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-slate-900/30">
      <div className="max-w-screen-xl mx-auto px-4 w-full">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Sol Taraf: Hakkımda Metni */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hakkımda & <span className="text-blue-500">Misyonum</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Merhaba! Ben teknolojiye tutkulu bir Frontend Geliştiriciyim. 
              Web dünyasındaki yolculuğum HTML ve CSS ile başladı, şimdi ise React ekosistemi ile 
              modern ve etkileşimli kullanıcı arayüzleri geliştiriyorum.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              Her projede temiz kod yazmaya, performanslı yapılar kurmaya ve kullanıcı deneyimini 
              en üst düzeye çıkarmaya odaklanıyorum. Sürekli öğreniyor ve yeni teknolojileri 
              projelerime entegre ediyorum.
            </p>

            {/* İstatistikler / Özet Kartları */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 rounded-lg border border-white/5">
                <Code2 className="text-blue-500 mb-2" size={24} />
                <h4 className="text-xl font-bold text-white">3+</h4>
                <p className="text-sm text-gray-400">Tamamlanan Proje</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-white/5">
                <Globe className="text-purple-500 mb-2" size={24} />
                <h4 className="text-xl font-bold text-white">1 Yıl</h4>
                <p className="text-sm text-gray-400">Kodlama Deneyimi</p>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Yetenekler (Skills) */}
          <div className="space-y-8">
            {skills.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu size={20} className="text-blue-500" />
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;