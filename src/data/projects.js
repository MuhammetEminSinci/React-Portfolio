import proje1 from '../assets/e-commerce.png'; 
import proje2 from '../assets/todo-app.png';
import proje3 from '../assets/landing-page.png';

export const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Kullanıcıların ürünleri filtreleyebildiği, sepete ekleyebildiği ve sipariş özeti görüntüleyebildiği modern bir alışveriş arayüzü.",
    tech: ["React", "Context API", "Tailwind CSS"],
    githubLink: "https://github.com/MuhammetEminSinci/React-E-Commerce-App",
    demoLink: "https://react-e-commerce-app-three.vercel.app/",
    image: proje1
  },
  {
    id: 2,
    title: "Task / Todo Uygulaması",
    description: "Günlük görevlerin yönetildiği, CRUD (Ekle, Sil, Güncelle) işlemlerini içeren ve LocalStorage kullanan verimli bir görev takipçisi.",
    tech: ["React", "JavaScript", "CSS3"],
    githubLink: "https://github.com/MuhammetEminSinci/react-todo-app",
    demoLink: "https://react-todo-app-two-kappa.vercel.app/",
    image: proje2
  },
  {
    id: 3,
    title: "Kurumsal Landing Page",
    description: "Responsive tasarım prensiplerine uygun, modern UI elementleri ve animasyonlar içeren tanıtım sayfası.",
    tech: ["React", "Vite", "Responsive Design"],
    githubLink: "https://github.com/MuhammetEminSinci/react-landing-page",
    demoLink: "https://react-landing-page-seven-dun.vercel.app/",
    image: proje3
  }
];