document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const navbar = document.getElementById('navbar');
    const langToggle = document.getElementById('lang-toggle');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const yearSpan = document.getElementById('year');
    
    // --- State ---
    let currentLang = 'en';

    // --- Translations ---
    const translations = {
        en: {
            'nav-home': 'Home',
            'nav-services': 'Services',
            'nav-about': 'About',
            'nav-contact': 'Contact',
            'hero-title': 'Transforming Outdoor Spaces',
            'hero-subtitle': 'Professional landscaping you can trust',
            'btn-call': 'Call Now',
            'btn-view-services': 'Our Services',
            'about-title': 'Why Choose Us?',
            'about-p1': 'At Bonilla Landscaping, we believe your outdoor space is an extension of your home. With years of experience and a passion for excellence, we provide high-quality landscaping services that combine beauty with functionality.',
            'about-p2': 'Reliability, quality, and professional integrity are the pillars of our business. Whether it\'s a small yard refresh or a major transformation, we treat every project with the same level of care and precision.',
            'stat-experience': 'Years Experience',
            'stat-projects': 'Projects Done',
            'services-title': 'Our Premium Services',
            'services-subtitle': 'Comprehensive solutions for all your landscaping needs',
            's-fences-t': 'Fences',
            's-fences-d': 'High-quality wood and metal fencing to secure and beautify your property.',
            's-concrete-t': 'Concrete',
            's-concrete-d': 'Durable driveways, walkways, and patios designed to last.',
            's-drain-t': 'Drain',
            's-drain-d': 'Professional drainage systems to protect your landscape from water damage.',
            's-playground-t': 'Playground',
            's-playground-d': 'Safe and fun outdoor play areas for families and communities.',
            's-mulch-t': 'Mulch',
            's-mulch-d': 'Premium mulching services to improve soil health and aesthetic appeal.',
            's-trim-t': 'Trim',
            's-trim-d': 'Expert tree and hedge trimming for a clean and healthy look.',
            's-yardwork-t': 'Yard Work',
            's-yardwork-d': 'General maintenance to keep your yard looking its best year-round.',
            's-pressure-t': 'Pressure Washing',
            's-pressure-d': 'Deep cleaning for surfaces to restore their original beauty.',
            's-stone-t': 'Stone',
            's-stone-d': 'Elegant stonework for walls, paths, and decorative features.',
            's-brick-t': 'Brick',
            's-brick-d': 'Classic brick masonry for a timeless and sturdy landscape design.',
            'contact-title': 'Ready to Transform Your Landscape?',
            'contact-subtitle': 'Contact us today for a free estimate and professional advice.',
            'footer-desc': 'Professional landscaping services focused on quality and reliability.',
            'footer-contact-h': 'Contact',
            'footer-rights': 'All rights reserved.',
            'lang-btn': 'ES'
        },
        es: {
            'nav-home': 'Inicio',
            'nav-services': 'Servicios',
            'nav-about': 'Nosotros',
            'nav-contact': 'Contacto',
            'hero-title': 'Transformamos Espacios Exteriores',
            'hero-subtitle': 'Jardinería profesional en la que puedes confiar',
            'btn-call': 'Llamar Ahora',
            'btn-view-services': 'Nuestros Servicios',
            'about-title': '¿Por qué elegirnos?',
            'about-p1': 'En Bonilla Landscaping, creemos que su espacio exterior es una extensión de su hogar. Con años de experiencia y pasión por la excelencia, brindamos servicios de jardinería de alta calidad que combinan belleza con funcionalidad.',
            'about-p2': 'La confiabilidad, la calidad y la integridad profesional son los pilares de nuestro negocio. Ya sea un pequeño refresco de jardín o una transformación importante, tratamos cada proyecto con el mismo nivel de cuidado y precisión.',
            'stat-experience': 'Años de Experiencia',
            'stat-projects': 'Proyectos Realizados',
            'services-title': 'Nuestros Servicios Premium',
            'services-subtitle': 'Soluciones integrales para todas sus necesidades de jardinería',
            's-fences-t': 'Cercas',
            's-fences-d': 'Cercas de madera y metal de alta calidad para asegurar y embellecer su propiedad.',
            's-concrete-t': 'Concreto',
            's-concrete-d': 'Entradas, caminos y patios duraderos diseñados para durar.',
            's-drain-t': 'Drenaje',
            's-drain-d': 'Sistemas de drenaje profesionales para proteger su paisaje de daños por agua.',
            's-playground-t': 'Áreas de Juego',
            's-playground-d': 'Áreas de juego al aire libre seguras y divertidas para familias y comunidades.',
            's-mulch-t': 'Mantillo (Mulch)',
            's-mulch-d': 'Servicios de mantillo premium para mejorar la salud del suelo y el atractivo estético.',
            's-trim-t': 'Poda',
            's-trim-d': 'Poda experta de árboles y setos para una apariencia limpia y saludable.',
            's-yardwork-t': 'Trabajo de Jardín',
            's-yardwork-d': 'Mantenimiento general para que su jardín luzca lo mejor posible durante todo el año.',
            's-pressure-t': 'Lavado a Presión',
            's-pressure-d': 'Limpieza profunda de superficies para restaurar su belleza original.',
            's-stone-t': 'Piedra',
            's-stone-d': 'Elegante trabajo en piedra para paredes, caminos y elementos decorativos.',
            's-brick-t': 'Ladrillo',
            's-brick-d': 'Albañilería de ladrillo clásica para un diseño de paisaje atemporal y resistente.',
            'contact-title': '¿Listo para transformar su paisaje?',
            'contact-subtitle': 'Contáctenos hoy para un presupuesto gratuito y asesoramiento profesional.',
            'footer-desc': 'Servicios profesionales de jardinería enfocados en la calidad y confiabilidad.',
            'footer-contact-h': 'Contacto',
            'footer-rights': 'Todos los derechos reservados.',
            'lang-btn': 'EN'
        }
    };

    // --- Functions ---

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        langToggle.textContent = translations[lang]['lang-btn'];
        document.documentElement.lang = lang;
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll Reveal
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }

    // --- Event Listeners ---

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateLanguage(currentLang);
    });

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    window.addEventListener('scroll', handleScroll);

    // Initial calls
    yearSpan.textContent = new Date().getFullYear();
    handleScroll(); // Trigger reveal on load
    
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
