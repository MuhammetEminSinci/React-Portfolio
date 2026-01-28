import { useForm, ValidationError } from '@formspree/react';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle } from 'lucide-react';

const Contact = () => {
  // Formspree Hook'u: 'BURAYA_FORMSPREE_ID_GELECEK' kısmını kendi ID'n ile değiştir
  const [state, handleSubmit] = useForm("mreqnkeg");

  // Eğer form başarıyla gönderildiyse bu ekran görünür
  if (state.succeeded) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center bg-slate-900/50 p-10 rounded-2xl border border-green-500/30">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-2">Teşekkürler!</h2>
          <p className="text-gray-400">Mesajınız bana ulaştı. En kısa sürede dönüş yapacağım.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
          >
            Forma Dön
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-screen-xl mx-auto px-4 w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            İletişime <span className="text-blue-500">Geç</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bir proje fikriniz mi var veya sadece tanışmak mı istiyorsunuz? 
            Aşağıdaki formdan bana doğrudan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Sol Taraf: İletişim Bilgileri */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <a href="mailto:muhammeteminsinci@gmail.com" className="flex items-start gap-4 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-sm">muhammeteminsinci@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-gray-400">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <MapPin size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Konum</h4>
                    <p className="text-sm">İzmir, Türkiye</p>
                    <p className="text-xs text-gray-500 mt-1">(Remote Çalışabilir)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
            <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-semibold text-white mb-6">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/muhammet-emin-sinci-46901b365/" className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white text-gray-400 transition-all">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/MuhammetEminSinci" className="p-3 bg-slate-800 rounded-lg hover:bg-gray-700 hover:text-white text-gray-400 transition-all">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Taraf: Formspree Formu */}
          <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-xl border border-white/5 space-y-6">
            
            {/* İsim Alanı */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">İsim Soyisim</label>
              <input 
                id="name"
                type="text" 
                name="name"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                placeholder="Adınız..."
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>
            
            {/* Email Alanı */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-posta Adresi</label>
              <input 
                id="email"
                type="email" 
                name="email"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
                placeholder="ornek@mail.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Mesaj Alanı */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mesajınız</label>
              <textarea 
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500 resize-none"
                placeholder="Projenizden bahsedin..."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Gönder Butonu */}
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
              {!state.submitting && <Send size={18} />}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;