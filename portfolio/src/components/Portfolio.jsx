import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, X, ChevronRight, Cpu, Code, Cloud, Zap, Wifi,
  CircuitBoard, Briefcase, Calendar, MapPin, FileDown, PlayCircle, Eye, EyeOff
} from 'lucide-react';

const Modal = ({ children, onClose, title }) => {
  return (
    <div
      className="fixed inset-0 z-[100] px-4 py-8 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 animate-scaleIn">
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-700/60">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-100">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="rounded-full p-2 bg-slate-700/60 hover:bg-slate-600 transition-colors"
          >
            <X className="w-5 h-5 text-slate-200" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const DocsList = ({ docs, isInternship = false, internshipId = null }) => {
  const [pdfFullscreen, setPdfFullscreen] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(null);

  const pdfDocs = docs.filter(d => d.type === 'pdf');
  const videoDocs = docs.filter(d => d.type === 'video');
  const linkDocs = docs.filter(d => d.type === 'link');

  const isFirstInternship = isInternship && internshipId === 1;
  const isSecondInternship = isInternship && internshipId === 2;

  return (
    <div className="p-5 sm:p-6">
      {linkDocs.length > 0 && (
        <div className="mb-5">
          <h4 className="text-slate-100 font-semibold mb-3 flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-sky-400" />
            Liens externes
          </h4>
          <ul className="space-y-3">
            {linkDocs.map((d) => (
              <li key={d.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-800/60 px-4 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <ExternalLink className="w-5 h-5 text-sky-300 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-slate-100 font-medium truncate">{d.title}</p>
                  </div>
                </div>
                <a href={d.url} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors">
                  Ouvrir
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isFirstInternship && (
        <>
          {pdfDocs.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-slate-100 font-semibold flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-sky-400" />
                  Rapport de stage (PDF)
                </h4>
                <div className="flex gap-2">
                  <a href={pdfDocs[0].url} download className="text-sm px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors flex items-center gap-2">
                    <FileDown className="w-4 h-4" />
                    Télécharger
                  </a>
                  <button onClick={() => setPdfFullscreen(pdfDocs[0])} className="text-sm px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Plein écran
                  </button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/40">
                <iframe src={`${pdfDocs[0].url}#view=FitH&toolbar=1&navpanes=1`} className="w-full h-[500px]" title={pdfDocs[0].title}></iframe>
              </div>
            </div>
          )}

          {videoDocs.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-slate-100 font-semibold flex items-center gap-2">
                  <PlayCircle className="w-4 h-4 text-sky-400" />
                  Démonstration vidéo
                </h4>
                {!videoPlaying && (
                  <button onClick={() => setVideoPlaying(videoDocs[0])} className="text-sm px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    Lire la vidéo
                  </button>
                )}
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/40">
                {videoPlaying ? (
                  videoDocs[0].url.includes('youtube.com') || videoDocs[0].url.includes('youtu.be') ? (
                    <iframe className="w-full h-[500px]" src={videoDocs[0].url} title={videoDocs[0].title} allowFullScreen></iframe>
                  ) : (
                    <video className="w-full h-[500px]" controls autoPlay src={videoDocs[0].url}></video>
                  )
                ) : (
                  <div className="w-full h-[500px] flex flex-col items-center justify-center bg-slate-800/40">
                    <PlayCircle className="w-16 h-16 text-slate-600 mb-4" />
                    <p className="text-slate-400 mb-4">Cliquez sur "Lire la vidéo" pour démarrer</p>
                    <button onClick={() => setVideoPlaying(videoDocs[0])} className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors flex items-center gap-2">
                      <PlayCircle className="w-5 h-5" />
                      Lire la vidéo
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {isSecondInternship && pdfDocs.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-slate-100 font-semibold flex items-center gap-2">
              <FileDown className="w-4 h-4 text-sky-400" />
              Rapport de stage (PDF)
            </h4>
            <div className="flex gap-2">
              <a href={pdfDocs[0].url} download className="text-sm px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                Télécharger
              </a>
              <button onClick={() => setPdfFullscreen(pdfDocs[0])} className="text-sm px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Plein écran
              </button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/40">
            <iframe src={`${pdfDocs[0].url}#view=FitH&toolbar=1&navpanes=1`} className="w-full h-[600px]" title={pdfDocs[0].title}></iframe>
          </div>
        </div>
      )}

      {!isInternship && (
        <>
          <ul className="space-y-3 mb-5">
            {docs.map((d) => (
              <li key={d.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-700/60 bg-slate-800/60 px-4 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  {d.type === 'pdf' && <FileDown className="w-5 h-5 text-sky-300 shrink-0" />}
                  {d.type === 'video' && <PlayCircle className="w-5 h-5 text-sky-300 shrink-0" />}
                  {d.type === 'link' && <ExternalLink className="w-5 h-5 text-sky-300 shrink-0" />}
                  <div className="min-w-0">
                    <p className="text-slate-100 font-medium truncate">{d.title}</p>
                  </div>
                </div>
                <a href={d.url} target={d.type === 'link' ? "_blank" : undefined} className="text-sm px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors" rel="noreferrer">
                  {d.type === 'pdf' ? 'Télécharger' : d.type === 'video' ? 'Visionner' : 'Ouvrir'}
                </a>
              </li>
            ))}
          </ul>

          <div className="grid lg:grid-cols-2 gap-4">
            {pdfDocs.slice(0, 1).map(d => (
              <div key={d.id} className="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/40">
                <div className="px-4 py-2 text-slate-300 text-sm border-b border-slate-700/60">Aperçu PDF</div>
                <iframe src={`${d.url}#view=FitH`} className="w-full h-[420px]" title={d.title}></iframe>
              </div>
            ))}
            {videoDocs.slice(0, 1).map(d => (
              <div key={d.id} className="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/40">
                <div className="px-4 py-2 text-slate-300 text-sm border-b border-slate-700/60">Aperçu vidéo</div>
                {d.url.includes('youtube.com') || d.url.includes('youtu.be') ? (
                  <iframe className="w-full h-[420px]" src={d.url} title={d.title} allowFullScreen></iframe>
                ) : (
                  <video className="w-full h-[420px]" controls src={d.url}></video>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {pdfFullscreen && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex flex-col animate-fadeIn">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-700">
            <h3 className="text-lg font-semibold text-white">{pdfFullscreen.title}</h3>
            <div className="flex items-center gap-3">
              <a href={pdfFullscreen.url} download className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                Télécharger
              </a>
              <button onClick={() => setPdfFullscreen(null)} className="rounded-full p-2 bg-slate-700 hover:bg-slate-600 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          <iframe src={`${pdfFullscreen.url}#view=FitH&toolbar=1&navpanes=1`} className="flex-1 w-full" title={pdfFullscreen.title}></iframe>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [pdfFullscreenProject, setPdfFullscreenProject] = useState(null);
  const [docsInternship, setDocsInternship] = useState(null);
  const [cvOpen, setCvOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCvPreview, setShowCvPreview] = useState(true);
  const [cvLoading, setCvLoading] = useState(true);

  const anyModalOpen = Boolean(selectedProject || docsInternship || cvOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (anyModalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [anyModalOpen]);

  useEffect(() => {
    if (cvOpen) {
      setCvLoading(true);
      setShowCvPreview(true);
    }
  }, [cvOpen]);

  const projects = [
  {
    id: 1,
    title: "Edge-AI STM32",
    category: "Computer Vision embarquée",
    status: "En cours",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    description:
      "Les nouvelles plateformes STM32 (STM32N6570 et STM32MP257F) intègrent un NPU permettant d’exécuter localement des modèles de Machine Learning pour la vision et l’audio. L’objectif est d’exploiter ces capacités pour développer des applications Edge-AI optimisées et comparées entre MCU et MPU.",
    technologies: ["STM32", "Edge-AI", "OpenCV-lite"],
    github: null,
    documents: [] // PAS DE DOCUMENTS POUR EDGE AI
  },

  {
    id: 2,
    title: "Station Météo Météorologique",
    category: "Station météo",
    status: "Terminé",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&q=80",
    description:
      "Une station météorologique embarquée a été développée sur STM32F746G-Discovery afin de mesurer et visualiser localement diverses grandeurs : température, humidité, pression, vent et pluie. Le système s’inspire du Weather Shield SparkFun et vise à fournir un suivi météorologique fiable et autonome.",
    technologies: ["STM32", "Capteurs"],
    github: null,
    documents: [
      {
        id: "p2pdf",
        type: "pdf",
        title: "Rapport du projet",
        url: "/public/Rapport_Projet_Station_Meteo.pdf"
      }
    ]
  },

  {
    id: 3,
    title: "Montre Connectée",
    category: "Montre connectée",
    status: "Terminé",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    description:
      "Le projet consiste à concevoir une montre connectée autonome, capable de mesurer en continu plusieurs données et de les transmettre via BLE à une application mobile. La solution repose sur un système embarqué basse consommation et sur l'utilisation de plusieurs capteurs intégrés.",
    technologies: ["nRF52", "BLE", "Capteurs"],
    github: null,
    demo: null,
    documents: [
      {
        id: "p3pdf",
        type: "pdf",
        title: "Rapport du projet",
        url: "/public/Rapport_Montre_Connectée.pdf"
      }
    ]
  }
];


  const internships = [
    {
      id: 1,
      company: "Université de Poitiers",
      position: "Stage M1 — IoT & Cybersécurité",
      duration: "2 mois",
      period: "Mai 2025 - Juillet 2025",
      location: "Poitiers, France",
      description: "Conception d’une maquette IoT dédiée à la cybersécurité : réseau de capteurs/actionneurs piloté par STM32 et nRF5340+nRF7002 (Wi-Fi/BLE), supervision ThingsBoard sur Raspberry Pi, scénarios d’attaque/défense et mise en place de TrustZone.",
      tasks: [
        "Réseau local autonome : Raspberry Pi en point d’accès WPA2, services Mosquitto, PostgreSQL et ThingsBoard opérationnels.",
        "Acquisition & télémetrie : envoi de données capteurs vers ThingsBoard en HTTP puis MQTT, affichage temps réel.",
        "Cybersécurité : démonstration de sniffing BLE (données en clair) → justification et intégration TrustZone/TF-M pour le chiffrement côté sécurisé. ",
        "Conception maquette : schéma I/O, placement capteurs/actionneurs et modélisation 3D (Fusion 360) "
      ],
      technologies: ["STM32", "nRF5340/nRF7002", "Zephyr RTOS", "BLE", "Wi-Fi", "MQTT", "HTTP", "ThingsBoard", "PostgreSQL", "Mosquitto", "Raspberry Pi", "TrustZone", "TF-M", "Fusion 360"],
      image: "public/cyber.jpg",
      documents: [
        { id: "i1d1", type: "pdf", title: "Rapport de stage", url: "/public/STAGE_M1.pdf" },
        { id: "i1d2", type: "pdf", title: "Présentation finale", url: "/docs/stage-poitiers-presentation.pdf" },
        { id: "i1d3", type: "video", title: "Démonstration système IoT", url: "/public/IMG_2947.mov" },
        { id: "i1d4", type: "link", title: "Vidéo démonstrative", url: "/public/IMG_2947.mov" },
      ]
    },
    {
      id: 2,
      company: "Luxor Lighting",
      position: "Stage Développeur Électronique — Éclairage Automobile",
      duration: "4 mois",
      period: "Mars 2024 - Juin 2024",
      location: "Angoulême, France",
      description: "Amélioration de modules d'éclairage auto et réalisation d'un prototype d'éclairage de calandre pour Mercedes.",
      tasks: [
        "Analyse et optimisation de modules d'éclairage (performance, homogénéité, coûts).",
        "Conception et prototypage d'un nouveau module pour Mercedes.",
      ],
      technologies: ["LTSpice", "KiCad"],
      image: "/luxor.jpg",
      documents: [
        { id: "i2d1", type: "pdf", title: "Rapport de stage", url: "/public/luxor_rapport.pdf" }
      ]
    },
    {
      id: 3,
      company: "ICONIC 3D",
      position: "Stage Développeur Embarqué — Imprimante 3D",
      duration: "2 mois",
      period: "Janvier 2023 - Mars 2023",
      location: "Angoulême, France",
      description: "Amélioration d'une imprimante 3D professionnelle (CreatBot F430) : ajout d'un dispositif de sécurité et stabilisation automatique par capteurs.",
      tasks: [
        "Système de sécurité pour une imprimante 3D (CreatBot F430)",
        "Dispositif de stabilisation pour une imprimante 3D",
      ],
      technologies: ["Arduino", "C/C++", "Marlin Firmware", "Capteurs"],
      image: "/iconic3d.jpg"
    }
  ];

  const skills = [
    { icon: <Cpu className="w-8 h-8" />, name: "Programmation Embarquée", items: ["STM32", "nRF52 SDK (Nordic)", "Arduino", "ESP"] },
    { icon: <CircuitBoard className="w-8 h-8" />, name: "Électronique", items: ["PCB Design", "Altium", "KiCAD", "Prototypage"] },
    { icon: <Wifi className="w-8 h-8" />, name: "Protocoles IoT", items: ["MQTT", "HTTP", "BLE", "Wi-Fi"] },
    { icon: <Cloud className="w-8 h-8" />, name: "Cloud & Backend", items: ["Node.js", "PostgreSQL"] },
    { icon: <Code className="w-8 h-8" />, name: "Langages", items: ["C/C++", "Python", "HTML"] },
    { icon: <Zap className="w-8 h-8" />, name: "Data & IA", items: ["Python", "TensorFlow", "Keras", "ThingsBoard"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/85 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <div className="hidden md:flex gap-6 text-sm font-medium items-center">
            <a href="#accueil" className="hover:text-sky-300 transition-colors">Accueil</a>
            <a href="#projets" className="hover:text-sky-300 transition-colors">Projets</a>
            <a href="#stages" className="hover:text-sky-300 transition-colors">Stages</a>
            <a href="#competences" className="hover:text-sky-300 transition-colors">Compétences</a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
            <button onClick={() => setCvOpen(true)} className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors">
              Voir mon CV
            </button>
          </div>
          <button onClick={() => setCvOpen(true)} className="md:hidden px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors">
            Mon CV
          </button>
        </div>
      </nav>

      <div className={`${anyModalOpen ? 'blur-sm md:blur-md' : ''} transition-all duration-200`}>
        <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.12),transparent_40%)]"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="mb-8 inline-block">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-[0_10px_30px_rgba(2,132,199,0.35)] mx-auto">
                RD
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Rayane DJENADOU
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-3">
              Ingénieur en Objets Connectés & Systèmes Embarqués
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Je conçois des systèmes fiables et élégants, de l'électronique au cloud, avec une attention particulière
              à la sécurité, la performance et l'expérience utilisateur.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="#projets" className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                Découvrir mes projets
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#stages" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-xl font-medium transition-all duration-200 border border-slate-700 flex items-center gap-2">
                Mes expériences
                <Briefcase className="w-5 h-5" />
              </a>
              <button onClick={() => setCvOpen(true)} className="px-6 py-3 bg-transparent text-sky-300 rounded-xl font-medium transition-all duration-200 border border-sky-700/60 hover:bg-sky-950/40">
                Voir mon CV
              </button>
            </div>
          </div>
        </section>

        <section id="projets" className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Mes Projets</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg">Sélection de travaux IoT & embarqué</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-colors shadow-[0_10px_30px_rgba(2,6,23,0.4)]"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-sky-200 bg-slate-900/70 backdrop-blur px-2 py-1 rounded">
                      {project.category}
                    </span>
                    {project.status && (
                      <span
                        className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm
                          ${project.status === 'En cours'
                            ? 'bg-amber-400/90 text-slate-900'
                            : 'bg-emerald-400/90 text-slate-900'
                          }`}
                      >
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 text-slate-100">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-sky-950/40 text-sky-300 rounded-full text-xs border border-sky-900/60">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.id === 1 ? (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-colors"
                        >
                          Voir les détails
                        </button>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-colors"
                        >
                          Voir les détails et les documents
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stages" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Mes Expériences</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg">Parcours professionnel et stages</p>
            </div>

            <div className="space-y-7">
              {internships.map((internship) => (
                <div key={internship.id} className="group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-colors">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
                      <img
                        src={internship.image}
                        alt={internship.company}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-sky-900/20"></div>
                    </div>
                    <div className="md:col-span-3 p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4 gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-100 mb-1">{internship.position}</h3>
                          <p className="text-slate-300">{internship.company}</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold">
                          {internship.duration}
                        </div>
                      </div>

                      <div className="flex gap-4 mb-4 text-slate-400 text-sm flex-wrap">
                        <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{internship.period}</span></div>
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>{internship.location}</span></div>
                      </div>

                      <p className="text-slate-300 mb-4 leading-relaxed">{internship.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-200 mb-2">Missions principales :</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {internship.tasks.map((task, idx) => (
                            <li key={idx} className="flex items-start text-slate-400 text-sm">
                              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {internship.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-200 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {internship.documents && (
                        <button
                          onClick={() => setDocsInternship(internship)}
                          className="w-full px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                          <FileDown className="w-4 h-4" />
                          Voir les détails et documents
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="competences" className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Compétences Techniques</span>
              </h2>
            <p className="text-slate-400 text-base md:text-lg">IoT, embarqué, cloud & data</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {skills.map((skill, idx) => (
                <div key={idx} className="rounded-2xl p-7 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-all duration-200 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white mb-5">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-100">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
              <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">Restons en Contact</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-10">
              Ouvert aux collaborations et opportunités IoT / embarqué
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <a href="mailto:djenadourayane@gmail.com" className="group rounded-2xl p-7 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-all hover:-translate-y-1">
                <Mail className="w-10 h-10 text-sky-400 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-100 mb-1">Email</h3>
                <p className="text-slate-400 text-sm">djenadourayane@gmail.com</p>
              </a>

              <a href="https://github.com/rayane2222" className="group rounded-2xl p-7 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-all hover:-translate-y-1">
                <Github className="w-10 h-10 text-slate-200 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-100 mb-1">GitHub</h3>
                <p className="text-slate-400 text-sm">@rayane2222</p>
              </a>

              <a href="https://linkedin.com/in/rayane-d-a25366252/" className="group rounded-2xl p-7 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-all hover:-translate-y-1">
                <Linkedin className="w-10 h-10 text-sky-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-100 mb-1">LinkedIn</h3>
                <p className="text-slate-400 text-sm">Rayane DJENADOU</p>
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 text-slate-300 py-10 px-6 border-t border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Rayane DJENADOU</span>
            </h3>
            <p className="text-slate-500 mb-5">Ingénieur en Objets Connectés & Systèmes Embarqués</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="mailto:djenadourayane@gmail.com" className="hover:text-sky-300 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="https://github.com/rayane2222" className="hover:text-sky-300 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/rayane-d-a25366252/" className="hover:text-sky-300 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
            <p className="text-slate-600 text-xs">© 2025 Rayane DJENADOU. Tous droits réservés.</p>
          </div>
        </footer>
      </div>

      {selectedProject && (
  <Modal onClose={() => setSelectedProject(null)} title={selectedProject.title}>

    <div className="relative h-60">
      <img src={selectedProject.image} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>

      <span className="absolute bottom-3 left-4 text-xs font-medium text-sky-200 bg-slate-900/70 backdrop-blur px-2 py-1 rounded">
        {selectedProject.status}
      </span>
    </div>

    <div className="p-6 sm:p-7">
      <p className="text-slate-300 text-base mb-5">{selectedProject.description}</p>

      <h4 className="font-semibold text-slate-100 mb-2">Technologies</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedProject.technologies.map((t, i) => (
          <span key={i} className="px-3 py-1.5 bg-sky-950/40 text-sky-300 rounded-lg text-xs border border-sky-900/60">
            {t}
          </span>
        ))}
      </div>

      {/* DOCUMENTS */}
      {selectedProject.documents.length > 0 && (
        <div className="mt-6">
          <h4 className="text-slate-100 font-semibold mb-3 flex items-center gap-2">
            Rapport du projet (PDF)
          </h4>

          <div className="flex gap-2 mb-3">
            <a
              href={selectedProject.documents[0].url}
              download
              className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white flex items-center gap-2"
            >
              Télécharger
            </a>

            <button
              onClick={() => setPdfFullscreenProject(selectedProject.documents[0])}
              className="px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-2"
            >
              Plein écran
            </button>
          </div>

          <iframe
            src={`${selectedProject.documents[0].url}#view=FitH`}
            className="w-full h-[550px] rounded-lg border border-slate-700"
          />
        </div>
      )}
    </div>
  </Modal>
)}
      {pdfFullscreenProject && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex flex-col animate-fadeIn">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-700">
            <h3 className="text-lg font-semibold text-white">{pdfFullscreenProject.title}</h3>

            <div className="flex items-center gap-3">
              <a
                href={pdfFullscreenProject.url}
                download
                className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Télécharger
              </a>

              <button
                onClick={() => setPdfFullscreenProject(null)}
                className="rounded-full p-2 bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <iframe
            src={`${pdfFullscreenProject.url}#view=FitH&toolbar=1&navpanes=1`}
            className="flex-1 w-full"
            title={pdfFullscreenProject.title}
          />
        </div>
      )}


      {docsInternship && (
        <Modal onClose={() => setDocsInternship(null)} title={`${docsInternship.position} · ${docsInternship.company}`}>
          <div className="p-5 sm:p-6">
            <div className="mb-6 p-4 rounded-lg bg-slate-800/40 border border-slate-700/40">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-sky-400" />
                <h4 className="font-semibold text-slate-100">Informations du stage</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{docsInternship.period}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{docsInternship.location}</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{docsInternship.description}</p>
            </div>

            <DocsList 
              docs={docsInternship.documents} 
              isInternship={true} 
              internshipId={docsInternship.id} 
            />
          </div>
        </Modal>
      )}

      {cvOpen && (
        <Modal onClose={() => setCvOpen(false)} title="Curriculum Vitae">
          <div className="p-4 sm:p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4 sticky top-0 bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-lg z-10 border border-slate-700/40">
              <a
                href="/cv.pdf"
                download
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <FileDown className="w-5 h-5" />
                Télécharger le CV (PDF)
              </a>
              
              <button
                onClick={() => setShowCvPreview(!showCvPreview)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium transition-colors border border-slate-600"
              >
                {showCvPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                {showCvPreview ? 'Masquer l\'aperçu' : 'Afficher l\'aperçu'}
              </button>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium transition-colors border border-slate-700"
              >
                <ExternalLink className="w-5 h-5" />
                Ouvrir dans un nouvel onglet
              </a>
            </div>

            {showCvPreview && (
              <div className="rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900/40 relative">
                {cvLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90 z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                      <p className="text-slate-300">Chargement du CV...</p>
                    </div>
                  </div>
                )}
                
                <div className="px-4 py-3 text-slate-300 text-sm border-b border-slate-700/60 bg-slate-800/60 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                    Aperçu du CV
                  </span>
                  <span className="text-xs text-slate-400">
                    Le PDF peut prendre quelques secondes à charger
                  </span>
                </div>
                
                <iframe 
                  src="/cv.pdf#view=FitH" 
                  className="w-full h-[60vh] sm:h-[70vh]" 
                  title="CV PDF"
                  onLoad={() => setCvLoading(false)}
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            )}

            {!showCvPreview && (
              <div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-12 text-center">
                <FileDown className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 mb-4">
                  L'aperçu est masqué pour améliorer les performances
                </p>
                <button
                  onClick={() => setShowCvPreview(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  Afficher l'aperçu
                </button>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-slate-700/40">
              <a
                href="/cv.pdf"
                download
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-lg transition-all shadow-lg hover:shadow-sky-500/50 hover:-translate-y-0.5"
              >
                <FileDown className="w-6 h-6" />
                Télécharger mon CV (PDF)
              </a>
              <p className="text-center text-slate-500 text-xs mt-3">
                Format PDF • Optimisé pour l'impression
              </p>
            </div>
          </div>
        </Modal>
      )}

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .animate-fadeIn { animation: fadeIn .2s ease }
        @keyframes scaleIn { from { transform: scale(.98); opacity: .9 } to { transform: scale(1); opacity: 1 } }
        .animate-scaleIn { animation: scaleIn .18s ease }
        ::selection { background: rgba(56, 189, 248, 0.25); color: #e2e8f0 }
        
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: rgba(56, 189, 248, 0.3) transparent;
        }
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: rgba(56, 189, 248, 0.3);
          border-radius: 20px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: rgba(56, 189, 248, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
