const sharedContent = {
  brand: {
    name: "LuxDrive Detailing CR",
    phone: "+506 0000 0000",
    phoneHref: "+50600000000",
    whatsapp: "50600000000",
    email: "agenda@luxdrivecr.com",
    location: "San Ramon de Alajuela, Costa Rica",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proceso", href: "/proceso" },
    { label: "Galeria", href: "/galeria" },
    { label: "Testimonios", href: "/testimonios" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/contacto", isCta: true },
  ],
  hero: {
    label: "Detallado automotriz en Costa Rica",
    title: "Proteccion premium para autos en clima tropical",
    subtitle:
      "En San Ramon de Alajuela restauramos y protegemos tu vehiculo contra sol fuerte, lluvia frecuente y contaminacion de carretera.",
    primaryAction: {
      text: "Reservar evaluacion",
      href: "/contacto",
    },
    secondaryAction: {
      text: "Ver servicios",
      href: "/servicios",
    },
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  },
  stats: [
    { value: "7+", label: "Anios de experiencia" },
    { value: "1,900+", label: "Autos detallados" },
    { value: "4.9/5", label: "Calificacion promedio" },
  ],
  homeHighlights: [
    {
      label: "Servicios",
      title: "Paquetes por necesidad",
      description: "Opciones desde mantenimiento estetico hasta correccion y recubrimiento ceramico.",
      href: "/servicios",
    },
    {
      label: "Proceso",
      title: "Metodo claro y seguro",
      description: "Cada servicio sigue una metodologia documentada para asegurar calidad consistente.",
      href: "/proceso",
    },
    {
      label: "Galeria",
      title: "Resultados verificables",
      description: "Resultados reales en autos de uso diario en rutas de Alajuela y zonas de montana.",
      href: "/galeria",
    },
    {
      label: "Contacto",
      title: "Agenda inmediata",
      description: "Google Forms para solicitudes y WhatsApp directo para cotizacion rapida.",
      href: "/contacto",
    },
  ],
  ctaStrip: {
    title: "Listo para reservar tu detallado?",
    description: "Agenda en San Ramon y recibe recomendacion personalizada segun uso y kilometraje.",
    actionText: "Ir a contacto",
    actionHref: "/contacto",
  },
  pricingNote:
    "Los precios son estimados y pueden variar segun estado actual del vehiculo, tamano y nivel de correccion requerido.",
  services: [
    {
      name: "Brillo Tico",
      description:
        "Lavado tecnico, descontaminacion y pulido de realce con sellado para epoca seca y lluviosa.",
      duration: "5 a 6 horas",
      basePriceCrc: 45000,
      from: "CRC 45,000",
    },
    {
      name: "Ceramic Shield Tropical",
      description:
        "Correccion de pintura y recubrimiento ceramico de alta durabilidad contra UV, lluvia y barro.",
      duration: "1 a 2 dias",
      basePriceCrc: 220000,
      from: "CRC 220,000",
    },
    {
      name: "Interior Total",
      description:
        "Limpieza interior profunda con vapor, hidratacion y eliminacion de olores por humedad.",
      duration: "4 horas",
      basePriceCrc: 38000,
      from: "CRC 38,000",
    },
    {
      name: "Rines & Calipers",
      description:
        "Descontaminado y proteccion para rines, llantas y calipers en uso urbano y carretera.",
      duration: "2 horas",
      basePriceCrc: 28000,
      from: "CRC 28,000",
    },
  ],
  vehicleTypes: [
    {
      id: "sedan",
      label: "Sedan / Hatchback",
      multiplier: 1,
    },
    {
      id: "suv",
      label: "SUV / Crossover",
      multiplier: 1.15,
    },
    {
      id: "pickup",
      label: "Pickup Doble Cabina",
      multiplier: 1.22,
    },
    {
      id: "fullsize",
      label: "4x4 Grande / Lujo",
      multiplier: 1.32,
    },
  ],
  process: [
    {
      step: "01",
      title: "Diagnostico visual",
      detail:
        "Evaluamos pintura e interiores considerando desgaste por sol, lluvia y uso diario en Alajuela.",
    },
    {
      step: "02",
      title: "Preparacion segura",
      detail:
        "Prelavado, metodo de dos cubetas y descontaminacion con productos pH neutro seguros para barniz.",
    },
    {
      step: "03",
      title: "Correccion y proteccion",
      detail:
        "Pulido por etapas y aplicacion de sellantes o ceramico segun presupuesto y tipo de uso.",
    },
    {
      step: "04",
      title: "Entrega documentada",
      detail:
        "Entregamos recomendaciones para mantener el acabado durante temporada lluviosa y verano.",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Sedan negro detallado en estudio de San Ramon",
    },
    {
      src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
      alt: "Auto deportivo rojo con acabado espejo despues de pulido",
    },
    {
      src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
      alt: "Detalle de limpieza interior premium en asientos de piel",
    },
    {
      src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
      alt: "Rines limpios y tratados con acabado satinado",
    },
    {
      src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80",
      alt: "Vehiculo gris con proteccion hidrofobica para lluvia tropical",
    },
    {
      src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
      alt: "Auto blanco en cabina de detallado automotriz",
    },
  ],
  testimonials: [
    {
      author: "Jose M., San Ramon",
      text:
        "Mi carro aguanta mucho mejor la lluvia y el barro. El brillo se mantiene por semanas.",
    },
    {
      author: "Daniela Q., Palmares",
      text:
        "El interior quedo impecable y sin olor a humedad. Atencion puntual y profesional.",
    },
    {
      author: "Andres V., Naranjo",
      text:
        "Buen precio para el nivel de detalle. Explican cada etapa y cumplen lo prometido.",
    },
  ],
  faq: [
    {
      question: "Cuanto dura un tratamiento ceramico?",
      answer:
        "Dependiendo del uso del vehiculo y del mantenimiento, puede durar entre 12 y 36 meses.",
    },
    {
      question: "Trabajan con autos de uso diario y carretera?",
      answer:
        "Si. Ajustamos cada plan para autos de uso diario, rutas de montana, SUVs y pickups.",
    },
    {
      question: "Que metodos de pago reciben en Costa Rica?",
      answer: "Aceptamos SINPE Movil, transferencia bancaria y efectivo.",
    },
    {
      question: "El precio cambia segun tipo de vehiculo?",
      answer:
        "Si. El precio se ajusta segun el tamano del vehiculo. Puedes estimarlo en tiempo real en la pagina de servicios.",
    },
  ],
  googleForm: {
    viewUrl: "https://docs.google.com/forms/d/e/TU_FORM_ID/viewform",
    actionUrl: "https://docs.google.com/forms/d/e/TU_FORM_ID/formResponse",
    fields: {
      name: "entry.1000000001",
      phone: "entry.1000000002",
      service: "entry.1000000003",
      message: "entry.1000000004",
    },
  },
};

const pageConfigs = {
  home: {
    path: "/",
    meta: {
      title: "LuxDrive Detailing CR | Detallado Automotriz en San Ramon",
      description:
        "Detallado automotriz profesional en San Ramon de Alajuela, Costa Rica. Proteccion de pintura, interiores premium y mantenimiento estacional.",
    },
  },
  services: {
    path: "/servicios",
    meta: {
      title: "Servicios y Precios en CRC | LuxDrive Detailing CR",
      description: "Conoce nuestros servicios de detallado en Costa Rica con precios en colones (CRC).",
    },
    pageHeader: {
      eyebrow: "Servicios",
      title: "Paquetes de detallado con enfoque tecnico",
      description:
        "Selecciona el nivel de intervencion ideal para tu auto y agenda por WhatsApp en segundos.",
    },
  },
  process: {
    path: "/proceso",
    meta: {
      title: "Proceso de Trabajo | LuxDrive Detailing CR",
      description: "Nuestro flujo de trabajo en San Ramon para proteger tu auto del clima tropical.",
    },
    pageHeader: {
      eyebrow: "Proceso",
      title: "Metodo transparente de principio a fin",
      description:
        "Estandarizamos cada etapa para proteger tu vehiculo y entregar resultados consistentes.",
    },
  },
  gallery: {
    path: "/galeria",
    meta: {
      title: "Galeria de Trabajos | LuxDrive Detailing CR",
      description: "Resultados reales de detallado automotriz en San Ramon de Alajuela.",
    },
    pageHeader: {
      eyebrow: "Galeria",
      title: "Resultados reales, acabados medibles",
      description: "Cada imagen representa un trabajo entregado con control de calidad y detalle fino.",
    },
  },
  testimonials: {
    path: "/testimonios",
    meta: {
      title: "Testimonios | LuxDrive Detailing CR",
      description: "Opiniones de clientes de San Ramon, Palmares y Naranjo sobre nuestros servicios.",
    },
    pageHeader: {
      eyebrow: "Testimonios",
      title: "Confianza construida en cada entrega",
      description:
        "La mejor validacion de nuestro trabajo es la satisfaccion de quienes regresan cada temporada.",
    },
  },
  faq: {
    path: "/faq",
    meta: {
      title: "FAQ | LuxDrive Detailing CR",
      description: "Preguntas frecuentes sobre detallado automotriz, precios en CRC y citas en San Ramon.",
    },
    pageHeader: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes antes de agendar",
      description: "Resolvemos las dudas mas comunes para que elijas el servicio correcto con seguridad.",
    },
  },
  contact: {
    path: "/contacto",
    meta: {
      title: "Contacto | LuxDrive Detailing CR",
      description: "Agenda en San Ramon por Google Forms o WhatsApp del negocio.",
    },
    pageHeader: {
      eyebrow: "Contacto",
      title: "Agenda tu cita en minutos",
      description: "Envia tu solicitud y recibe seguimiento personalizado para cotizacion y fecha disponible.",
    },
  },
};

function buildPageContent(pageKey) {
  const selectedPage = pageConfigs[pageKey] || pageConfigs.home;

  return {
    ...sharedContent,
    meta: selectedPage.meta,
    pageHeader: selectedPage.pageHeader || null,
    currentPath: selectedPage.path,
  };
}

module.exports = {
  buildPageContent,
};
