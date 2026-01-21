// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Theme (dark/light) =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") || "light";
        setTheme(current === "dark" ? "light" : "dark");
    });
}

// ===== i18n (EN/FR) =====
const langToggle = document.getElementById("langToggle");

// EN is default (as requested)
const translations = {
    en: {
        "brand.name": "Seifeddine",

        "nav.about": "About",
        "nav.process": "How I Work",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.contact": "Contact",

        "hero.kicker": "Computer Science • Systems • Web",
        "hero.name": "Seifeddine Reguige",
        "hero.subtitle":
            "Computer Science student focused on building reliable, clean web and systems solutions — from backend logic and databases to troubleshooting and performance debugging.",
        "hero.cta.projects": "View Projects",
        "hero.cta.contact": "Contact",
        "hero.tag.backend": "Backend",
        "hero.tag.ml": "Data/ML",
        "hero.tag.cyber": "Cybersecurity",
        "hero.tag.net": "Networking",

        "about.title": "About",
        "about.p1":
            "I’m a Computer Science student at the University of Ottawa, focused on backend and systems work: Linux troubleshooting, database engineering, and building maintainable web solutions.",
        "about.p2":
            "I enjoy debugging complex issues using logs, system metrics, and structured workflows — then turning fixes into clean documentation and repeatable processes.",

        "process.title": "How I Work",
        "process.s1.title": "1) Understand",
        "process.s1.desc": "Clarify goals, users, constraints, and success criteria.",
        "process.s2.title": "2) Design",
        "process.s2.desc": "Sketch structure, define UI flow, and plan data/models if needed.",
        "process.s3.title": "3) Build",
        "process.s3.desc": "Implement in small, testable components with clean code.",
        "process.s4.title": "4) Validate",
        "process.s4.desc": "Test edge cases, responsiveness, performance, and accessibility.",
        "process.s5.title": "5) Iterate",
        "process.s5.desc": "Refine based on feedback, document decisions, and polish.",

        "projects.title": "Projects",
        "projects.subtitle": "4 case studies",
        "projects.p1.title": "Movie Recommendation System",
        "projects.p1.desc":
            "Built data-processing pipelines, implemented similarity algorithms, and handled large dataset parsing across multi-language components.",
        "projects.p2.title": "e-Hotels Reservation Platform",
        "projects.p2.desc":
            "Engineered a multi-hotel backend with normalized schemas, SQL triggers, indexing strategies, secure transactions, and end-to-end reservation logic.",
        "projects.p3.title": "Secure PC Service App (Android)",
        "projects.p3.desc":
            "Designed schemas and CRUD workflows, implemented validation and UI/data integration backed by a local database engine.",
        "projects.p4.title": "C++ Card Game",
        "projects.p4.desc":
            "Built a C++ object-oriented card game using core OOP principles (classes, inheritance, polymorphism), with clean game logic, input handling, and structured design.",
        "projects.view": "View case study",

        "experience.title": "Experience",
        "experience.ta.title": "Technical Assistant — Adapted Exams Centre (uOttawa)",
        "experience.ta.meta": "Ottawa, ON • Sep 2025 – Apr 2026",
        "experience.ta.b1":
            "Diagnosed and resolved 95% of incidents across 100+ Linux/Windows workstations (OS crashes, driver faults, network stack issues, configuration errors).",
        "experience.ta.b2":
            "Performed low-level troubleshooting through logs, system metrics, process monitoring, and resource utilization analysis.",
        "experience.ta.b3":
            "Automated environment preparation and validation checks to ensure stability during high-load exam sessions.",
        "experience.ta.b4":
            "Maintained documented workflows, system procedures, and debug playbooks for operational reliability.",

        "experience.wa.title": "Web Administrator — Faculty of Health Sciences (uOttawa)",
        "experience.wa.meta": "Ottawa, ON • Oct 2024 – Apr 2025",
        "experience.wa.b1":
            "Used GA4/Siteimprove analytics to monitor user behavior, optimize traffic flow, and improve key engagement metrics by 15%.",
        "experience.wa.b2":
            "Cleaned and restructured data-driven pages, improving SEO consistency, content health, and accessibility compliance.",
        "experience.wa.b3":
            "Managed structured content updates, metadata, and user permissions within Drupal/WordPress environments.",

        "contact.title": "Contact",
        "contact.lead": "Want to collaborate or discuss an internship? Send me a message.",
        "contact.emailLabel": "Email:",
        "contact.phoneLabel": "Phone:",
        "contact.githubNote": "(replace with your real link)",
        "contact.noteTitle": "Quick note",
        "contact.noteBody":
            "This portfolio is built for SEG3525 and will evolve into a long-term professional site with detailed case studies, screenshots, and design rationale.",

        "case.back": "Back to projects",
        "case.card.title": "C++ Card Game",
        "case.card.subtitle": "An object-oriented card game in C++ with clean architecture, game rules engine, and structured design.",
        "case.skill": "Design",

        "case.overview.title": "Overview",
        "case.overview.p1": "This project demonstrates strong object-oriented design using C++: classes, encapsulation, inheritance, and polymorphism, with a clear separation between game logic, player actions, and I/O.",
        "case.overview.p2": "The goal was to build a maintainable game core that is easy to extend (new card types, rules, or game modes).",

        "case.problem.title": "Problem",
        "case.problem.b1": "Design a card game with clear rules and predictable game flow.",
        "case.problem.b2": "Keep the codebase extensible (new cards/rules) without rewriting everything.",
        "case.problem.b3": "Avoid spaghetti logic by structuring responsibilities properly.",

        "case.solution.title": "Solution",
        "case.solution.p1": "I designed the game using an OOP architecture: a base Card type, specialized derived cards, and a Game engine that controls turns, state, and rule validation.",
        "case.solution.b1": "Core entities: Game, Player, Deck, Hand, Card (base) + derived cards.",
        "case.solution.b2": "A rules/validation layer to ensure legal moves and consistent state updates.",
        "case.solution.b3": "Separated I/O from logic (so you can swap CLI later if needed).",

        "case.features.title": "Key features",
        "case.features.f1.title": "Clean game loop",
        "case.features.f1.desc": "Turns, phases, and end conditions handled by a single game engine.",
        "case.features.f2.title": "OOP extensibility",
        "case.features.f2.desc": "Add new card types without changing existing logic (polymorphism).",
        "case.features.f3.title": "Validation & state safety",
        "case.features.f3.desc": "Moves are validated to avoid invalid states and edge case bugs.",
        "case.features.f4.title": "Readable structure",
        "case.features.f4.desc": "Clear folder/class responsibilities and documentation-friendly flow.",

        "case.arch.title": "Architecture",
        "case.arch.p1": "High-level structure (example):",
        "case.arch.p2": "The game engine controls the flow; cards encapsulate behavior; players interact through validated actions.",

        "case.next.title": "Next improvements",
        "case.next.b1": "Add unit tests for rule validation and edge cases.",
        "case.next.b2": "Add a GUI later (or web version) using the same game engine.",
        "case.next.b3": "Add save/load game state.",

        "case.summary.title": "Project summary",
        "case.summary.roleLabel": "Role",
        "case.summary.role": "Solo developer",
        "case.summary.stackLabel": "Tech stack",
        "case.summary.skillsLabel": "Skills shown",
        "case.summary.skills": "Architecture, OOP, clean logic, debugging",
        "case.summary.ctaContact": "Contact",
        "case.summary.ctaRepo": "View code",
    },

    fr: {
        "brand.name": "Seifeddine",

        "nav.about": "À propos",
        "nav.process": "Ma méthode",
        "nav.projects": "Projets",
        "nav.experience": "Expérience",
        "nav.contact": "Contact",

        "hero.kicker": "Informatique • Systèmes • Web",
        "hero.name": "Seifeddine Reguige",
        "hero.subtitle":
            "Étudiant en informatique, orienté vers des solutions web et systèmes fiables — du backend et des bases de données jusqu’au diagnostic et à l’optimisation des performances.",
        "hero.cta.projects": "Voir les projets",
        "hero.cta.contact": "Me contacter",
        "hero.tag.backend": "Backend",
        "hero.tag.ml": "Data/ML",
        "hero.tag.cyber": "Cybersécurité",
        "hero.tag.net": "Réseaux",

        "about.title": "À propos",
        "about.p1":
            "Je suis étudiant en informatique à l’Université d’Ottawa, avec un focus sur le backend et les systèmes : troubleshooting Linux, ingénierie des bases de données et développement de solutions web maintenables.",
        "about.p2":
            "J’aime résoudre des problèmes complexes via les logs, les métriques système et une méthode structurée — puis transformer les correctifs en documentation claire et procédures reproductibles.",

        "process.title": "Ma méthode",
        "process.s1.title": "1) Comprendre",
        "process.s1.desc": "Clarifier objectifs, utilisateurs, contraintes et critères de réussite.",
        "process.s2.title": "2) Concevoir",
        "process.s2.desc": "Esquisser la structure, définir le flow UI, et planifier les données/modèles si nécessaire.",
        "process.s3.title": "3) Construire",
        "process.s3.desc": "Implémenter par petites étapes testables, avec du code propre et modulaire.",
        "process.s4.title": "4) Valider",
        "process.s4.desc": "Tester les cas limites, le responsive, la performance et l’accessibilité.",
        "process.s5.title": "5) Améliorer",
        "process.s5.desc": "Itérer, documenter les décisions, et polir le rendu final.",

        "projects.title": "Projets",
        "projects.subtitle": "4 études de cas",
        "projects.p1.title": "Système de recommandation de films",
        "projects.p1.desc":
            "Création de pipelines de traitement de données, implémentation d’algorithmes de similarité et gestion d’un dataset volumineux dans un projet multi-langage.",
        "projects.p2.title": "Plateforme de réservation e-Hotels",
        "projects.p2.desc":
            "Conception d’un backend multi-hôtels avec schémas normalisés, triggers SQL, indexation, transactions et logique complète de réservation.",
        "projects.p3.title": "Application Android (Service PC sécurisé)",
        "projects.p3.desc":
            "Conception de schémas et workflows CRUD, validation des entrées, et intégration UI/données avec une base locale.",
        "projects.p4.title": "Jeu de cartes en C++",
        "projects.p4.desc":
            "Développement d’un jeu de cartes en C++ orienté objet (classes, héritage, polymorphisme), avec une logique de jeu propre, gestion des entrées, et une conception structurée.",
        "projects.view": "Voir l’étude de cas",

        "experience.title": "Expérience",
        "experience.ta.title": "Assistant technique — Adapted Exams Centre (uOttawa)",
        "experience.ta.meta": "Ottawa, ON • Sep 2025 – Avr 2026",
        "experience.ta.b1":
            "Diagnostic et résolution de 95% des incidents sur 100+ postes Linux/Windows (crash OS, drivers, réseau, erreurs de configuration).",
        "experience.ta.b2":
            "Troubleshooting bas niveau via logs, métriques système, monitoring de processus et analyse d’utilisation des ressources.",
        "experience.ta.b3":
            "Automatisation de checks de préparation/validation pour assurer la stabilité pendant les sessions d’examens à forte charge.",
        "experience.ta.b4":
            "Maintien de procédures documentées, workflows et playbooks de debug pour la fiabilité opérationnelle.",

        "experience.wa.title": "Administrateur Web — Faculté des sciences de la santé (uOttawa)",
        "experience.wa.meta": "Ottawa, ON • Oct 2024 – Avr 2025",
        "experience.wa.b1":
            "Utilisation de GA4/Siteimprove pour analyser le comportement utilisateur, optimiser le trafic et améliorer des métriques d’engagement de 15%.",
        "experience.wa.b2":
            "Nettoyage et restructuration de pages data-driven : meilleure cohérence SEO, santé du contenu et conformité accessibilité.",
        "experience.wa.b3":
            "Gestion des mises à jour de contenu, métadonnées et permissions utilisateurs dans des environnements Drupal/WordPress.",

        "contact.title": "Contact",
        "contact.lead": "Tu veux collaborer ou discuter d’un stage ? Envoie-moi un message.",
        "contact.emailLabel": "Email :",
        "contact.phoneLabel": "Téléphone :",
        "contact.githubNote": "(remplace par ton vrai lien)",
        "contact.noteTitle": "Note rapide",
        "contact.noteBody":
            "Ce portfolio est réalisé pour SEG3525 et deviendra un site professionnel long terme (études de cas détaillées, captures, justification de design).",

        "case.back": "Retour aux projets",
        "case.card.title": "Jeu de cartes en C++",
        "case.card.subtitle": "Un jeu de cartes orienté objet en C++ avec une architecture propre, un moteur de règles et une conception structurée.",
        "case.skill": "Conception",

        "case.overview.title": "Aperçu",
        "case.overview.p1": "Ce projet démontre une forte conception orientée objet en C++ : classes, encapsulation, héritage et polymorphisme, avec une séparation claire entre la logique de jeu, les actions des joueurs et les entrées/sorties.",
        "case.overview.p2": "L’objectif était de construire un cœur de jeu maintenable et facile à étendre (nouveaux types de cartes, règles ou modes).",

        "case.problem.title": "Problématique",
        "case.problem.b1": "Concevoir un jeu de cartes avec des règles claires et un déroulement prévisible.",
        "case.problem.b2": "Garder le code extensible (nouvelles cartes/règles) sans tout réécrire.",
        "case.problem.b3": "Éviter une logique “spaghetti” en structurant correctement les responsabilités.",

        "case.solution.title": "Solution",
        "case.solution.p1": "J’ai conçu le jeu avec une architecture OOP : un type Card de base, des cartes dérivées, et un moteur Game qui gère les tours, l’état, et la validation des règles.",
        "case.solution.b1": "Entités principales : Game, Player, Deck, Hand, Card (base) + cartes dérivées.",
        "case.solution.b2": "Couche de règles/validation pour assurer des coups légaux et un état cohérent.",
        "case.solution.b3": "Séparation des I/O et de la logique (permet de remplacer la CLI plus tard).",

        "case.features.title": "Fonctionnalités clés",
        "case.features.f1.title": "Boucle de jeu propre",
        "case.features.f1.desc": "Tours, phases et conditions de fin gérés par un moteur unique.",
        "case.features.f2.title": "Extensibilité OOP",
        "case.features.f2.desc": "Ajouter des cartes sans modifier la logique existante (polymorphisme).",
        "case.features.f3.title": "Validation & sécurité d’état",
        "case.features.f3.desc": "Validation des actions pour éviter états invalides et bugs de cas limites.",
        "case.features.f4.title": "Structure lisible",
        "case.features.f4.desc": "Responsabilités claires par classe/dossier, facile à documenter.",

        "case.arch.title": "Architecture",
        "case.arch.p1": "Structure haut niveau (exemple) :",
        "case.arch.p2": "Le moteur contrôle le flow ; les cartes encapsulent le comportement ; les joueurs interagissent via des actions validées.",

        "case.next.title": "Améliorations futures",
        "case.next.b1": "Ajouter des tests unitaires pour la validation des règles et les cas limites.",
        "case.next.b2": "Ajouter une interface graphique plus tard (ou une version web) avec le même moteur.",
        "case.next.b3": "Ajouter la sauvegarde/chargement de partie.",

        "case.summary.title": "Résumé du projet",
        "case.summary.roleLabel": "Rôle",
        "case.summary.role": "Développeur solo",
        "case.summary.stackLabel": "Technos",
        "case.summary.skillsLabel": "Compétences démontrées",
        "case.summary.skills": "Architecture, OOP, logique propre, debugging",
        "case.summary.ctaContact": "Contact",
        "case.summary.ctaRepo": "Voir le code",
    }
};

function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = translations[lang]?.[key];
        if (value) el.textContent = value;
    });

    localStorage.setItem("lang", lang);
    if (langToggle) langToggle.textContent = lang === "fr" ? "EN" : "FR";
}

// Default language = English
const savedLang = localStorage.getItem("lang") || "en";
applyLang(savedLang);

if (langToggle) {
    langToggle.addEventListener("click", () => {
        const current = localStorage.getItem("lang") || "en";
        applyLang(current === "fr" ? "en" : "fr");
    });
}