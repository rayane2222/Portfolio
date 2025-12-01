export const projects = [
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
    documents: []
  },
  {
    id: 2,
    title: "Station Météorologique",
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
        url: "/Portfolio/Rapport_Projet_Station_Meteo.pdf"
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
        url: "/Portfolio/Rapport_Montre_Connectée.pdf"
      }
    ]
  }
];

export const internships = [
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
    image: "/Portfolio/cyber.jpg",
    documents: [
      { id: "i1d1", type: "pdf", title: "Rapport de stage", url: "/Portfolio/STAGE_M1.pdf" },
      { id: "i1d4", type: "link", title: "Vidéo démonstrative", url: "/Portfolio/IMG_2947.mov" },
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
    image: "/Portfolio/luxor.jpg",
    documents: [
      { id: "i2d1", type: "pdf", title: "Rapport de stage", url: "/Portfolio/luxor_rapport.pdf" }
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
    image: "/Portfolio/iconic3d.jpg"
  }
];

export const skills = [
  { icon: "Cpu", name: "Programmation Embarquée", items: ["STM32", "nRF52 SDK (Nordic)", "Arduino", "ESP"] },
  { icon: "CircuitBoard", name: "Électronique", items: ["PCB Design", "Altium", "KiCAD", "Prototypage"] },
  { icon: "Wifi", name: "Protocoles IoT", items: ["MQTT", "HTTP", "BLE", "Wi-Fi"] },
  { icon: "Cloud", name: "Cloud & Backend", items: ["Node.js", "PostgreSQL"] },
  { icon: "Code", name: "Langages", items: ["C/C++", "Python", "HTML"] },
  { icon: "Zap", name: "Data & IA", items: ["Python", "TensorFlow", "Keras", "ThingsBoard"] }
];
