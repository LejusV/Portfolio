// Met à jour la description du slide actif de chaque carousel (appelable globalement)
function updateAllCarouselDescriptions() {
  if (typeof forceUpdateAllCarousels === 'function') {
    forceUpdateAllCarousels();
  }
}
// Simple i18n for EN/FR
const translations = {
  en: {
    cv_name: "Jules Vandeputte",
    cv_role: "French Computer Engineer",
    cv_email: "jul.vandeputte@gmail.com",
    cv_linkedin: "Jules Vandeputte",
    cv_profile_title: "Profile",
    cv_profile: "Born in February 2002, I will graduate in September with a master's degree in computer science from ENSIMAG. Although I love computer science, I am always looking for some creativity in my daily work. That is why I chose to learn Computer Graphics in TUGraz in an amazing ERASMUS+ program.",
    cv_languages_title: "Languages",
    cv_languages_main: "French | English TOEIC B2-C1",
    cv_languages_other: "Spanish, German, Chinese: Beginner",
    cv_skills_title: "Skills",
    cv_skills_hard: "Hard skills:",
    cv_skills_coding: "Coding:",
    cv_skills_c: "C/C++/Assembly",
    cv_skills_java: "Java (Spring), PHP (Symfony)",
    cv_skills_csharp: "C# (Unity)",
    cv_skills_python: "Python, Angular, others",
    cv_skills_rendering: "Rendering (OpenGL, Vulkan)",
    cv_skills_unix: "Unix, Windows, Gitlab, Office",
    cv_skills_sql: "SQL, Networking",
    cv_skills_gamedev: "Knowledge in Game Dev",
    cv_skills_soft: "Soft Skills: CREATIVITY",
    cv_skills_soft1: "Thinking | Autonomy | Kindness",
    cv_skills_soft2: "Video games | Reading | Table Tennis",
    cv_exp_title: "Work experience",
    cv_exp_job1_title: "Work-study web Java developer",
    cv_exp_job1_dates: "September 2022 - August 2025",
    cv_exp_job1_desc: "Tierce Maintenance Multi-Applicative using Java Frameworks and some PHP/Symfony, bug analysis and correction, quoting, support for development",
    cv_exp_job2_title: "End of DUT internship",
    cv_exp_job2_dates: "June 2022 - August 2022",
    cv_exp_job2_desc: "Web development: additional modules for the TYPO3 CMS in a project context using some PHP, SQL, CSS and JavaScript",
    cv_edu_title: "Education",
    cv_edu1_title: "Master’s Winter Semester in Computer Graphics & Game Dev",
    cv_edu1_dates: "Sep. 2024 - Feb. 2025",
    cv_edu1_1: "3D Computer Graphics & Realism",
    cv_edu1_2: "Computer-Aided Geometric Design",
    cv_edu1_3: "Game Design & Development",
    cv_edu2_title: "Engineering master’s degree in Computer Science and Applied Mathematics",
    cv_edu2_dates: "Sep. 2022 - Sep. 2025",
    cv_edu2_1: "Higher level Applied Mathematics",
    cv_edu2_2: "Simple Unix kernel project",
    cv_edu2_3: "Advanced algorithm, C/Java/Assembly programming",
    cv_edu2_4: "Application design",
    cv_edu2_5: "Networks / Databases / Computer systems study",
    cv_edu3_title: "DUT in Computer Science in a fast track year",
    cv_edu3_dates: "2021 - 2022",
    cv_edu3_1: "Learning to code with C/C/C++, Web & SQL",
    cv_edu3_2: "Object Oriented Programming in Unix & Windows",
    cv_edu4_title: "Preparatory class for Grandes Écoles",
    cv_edu4_dates: "2019 - 2020",
    cv_edu4_1: "MPSI (Maths - Physics - Computer Science - Engineering)",
    cgr: "3D Computer Graphics & Realism",
    rtr: "Real-Time Rendering",
    gamedev: "Game Development & Design",
    nav_home: "Home",
    nav_about: "About",
    nav_resume: "Resume",
    nav_portfolio: "Portfolio",
    code_link: "The project code is available on GitHub at ",
    portfolio_title: "My Portfolio",
    project1: "OpenGL 3D Engine & Shading",
    project1_desc: "Using the OpenGL Tutorial, I developed a 3D graphics engine in C++ with advanced shading techniques and different light source types. This project uses GLSL for shader programming, Glad and GLFW for context and window management, and includes features like texture mapping, normal mapping, and shadow mapping.",
    project2: "3DCGR First Path-Tracing Project",
    project2_desc: "This was my first step in the Computer Graphics world. I implemented a basic CPU path-tracer in C++ from almost scratch, using the theory learned in the TUGraz 3DCGR course. I used algorithms and mathematic principles such as the Möller-Trumbore ray-triangle intersection, the Monte Carlo estimation, and even some physics behind the lens model.",
    project3: "3DCGR Second Path-Tracing Project",
    project3_desc: "In this second project from the TUGraz 3DCGR course, I improved my previous path-tracer by using further techniques like Next-Event Estimation (NEE) for direct lighting, multiple importance sampling (MIS), and homogeneous participating media with scattering and absorption. This allowed for more realistic images with better light handling and effects.",
    project4: "Unity 2D Game using a Pokemon Framework",
    project4_desc: "This is a 2D game developed in Unity using a custom Pokemon-like assets framework. The game features exploration, battles, and a day-light cycle, all built with C# scripts and Unity's game development tools.",
    desc_project1_1: '360-degrees view of a 3D scene rendered with OpenGL. We can observe how the different materials (mainly wood and metal) react to various light sources, including directional, point, and spotlight types. The blue specular highlights ont the metal parts show a "Moon" light source with blue specular color. The red-ish light from the cube shows a nice diffuse and specular reflection on the wood.',
    desc_project2_1: "Path-traced image of the first 3DCGR scene rendered that showcases the handling of triangles (Möller-Trumbore ray-triangle intersection algorithm) and sphere primitives. It allows mesh loading from OFF files. It also demonstrates basic lighting with a single light source. Here the helmet reprensents an ideal diffuse reflection, a sphere is an ideal specular reflection, and the other sphere is an ideal dielectric refraction. The model loader also creates a bounding sphere for faster intersection tests.",
    desc_project2_2: "Second path-traced image of another scene, without depth of field nor Bokehs. Here we are still using a pin-hole model for the camera, so there is no depth of field effect.",
    desc_project2_3: "Third path-traced image. This time the camera model uses a lens of finite size, which introduces a depth of field and focus effect. We can observe that objects far from the focus plane (the stars) are blurry, while those in focus (the heart) are sharp. There is no special bokeh shape yet.",
    desc_project2_4: "Same scene but with a custom bokeh shape applied to camera lens. Here, the bokeh shape is a 6-pointed star, which can be seen in the blurred stars.",
    desc_project2_5: "The last image of this scene showcases a different bokeh shape and a subtle vignetting (cat's eye) effect. We can see the stars exterior branches fading out on the edges of the image.",
    desc_project3_1: "Single light scene rendered WITHOUT explicit light source sampling (aka Next-Event Estimation). We can see no bias or error, at the cost of noise.",
    desc_project3_2: "Single light scene rendered WITH explicit light source sampling (aka Next-Event Estimation). We can see a significant reduction in noise, especially in the shadowed areas, at the cost of some errors here and there. This is usually preferred as it can be post-fixed.",
    desc_project3_3: "Multiple light sources scene rendered with Next-Event Estimation. We can see the coloured lights clearly and at full intensity.",
    desc_project3_4: "Multiple light sources scene rendered with Next-Event Estimation. We clearly see a sort of fog, and the light is slightly faded. It is because of the addition of absorption and scattering in the volume rendering. It simulates a dusty or foggy environment.",
    desc_project4_1: "EN Description for Project 4 - 1",
    desc_project4_2: "EN Description for Project 4 - 2",
    desc_project4_3: "EN Description for Project 4 - 3",
    desc_project4_4: "EN Description for Project 4 - 4",
    desc_project4_5: "EN Description for Project 4 - 5",
    desc_project4_6: "EN Description for Project 4 - 6",
    credits: '© 2025 Jules "Lejus" Vandeputte. All rights reserved.'
  },
  fr: {
    cv_name: "Jules Vandeputte",
    cv_role: "Ingénieur informatique français",
    cv_email: "jul.vandeputte@gmail.com",
    cv_linkedin: "Jules Vandeputte",
    cv_profile_title: "Profil",
    cv_profile: "Né en février 2002, je serai diplômé en septembre d'un master en informatique à l'ENSIMAG. Bien que passionné d'informatique, je recherche toujours de la créativité dans mon quotidien. C'est pourquoi j'ai choisi d'étudier l'infographie à TUGraz dans le cadre d'un programme ERASMUS+ exceptionnel.",
    cv_languages_title: "Langues",
    cv_languages_main: "Français | Anglais TOEIC B2-C1",
    cv_languages_other: "Espagnol, Allemand, Chinois : Débutant",
    cv_skills_title: "Compétences",
    cv_skills_hard: "Compétences techniques :",
    cv_skills_coding: "Programmation :",
    cv_skills_c: "C/C++/Assembleur",
    cv_skills_java: "Java (Spring), PHP (Symfony)",
    cv_skills_csharp: "C# (Unity)",
    cv_skills_python: "Python, Angular, autres",
    cv_skills_rendering: "Rendu (OpenGL, Vulkan)",
    cv_skills_unix: "Unix, Windows, Gitlab, Office",
    cv_skills_sql: "SQL, Réseaux",
    cv_skills_gamedev: "Connaissances en Game Dev",
    cv_skills_soft: "Soft Skills : CRÉATIVITÉ",
    cv_skills_soft1: "Réflexion | Autonomie | Bienveillance",
    cv_skills_soft2: "Jeux vidéo | Lecture | Tennis de table",
    cv_exp_title: "Expérience professionnelle",
    cv_exp_job1_title: "Alternant développeur web Java",
    cv_exp_job1_dates: "Septembre 2022 - Août 2025",
    cv_exp_job1_desc: "Tierce Maintenance Multi-Applicative sur des frameworks Java et un peu de PHP/Symfony, analyse et correction de bugs, chiffrage, support au développement",
    cv_exp_job2_title: "Stage de fin de DUT",
    cv_exp_job2_dates: "Juin 2022 - Août 2022",
    cv_exp_job2_desc: "Développement web : modules additionnels pour le CMS TYPO3 dans un contexte projet utilisant PHP, SQL, CSS et JavaScript",
    cv_edu_title: "Formation",
    cv_edu1_title: "Semestre d'hiver en Computer Graphics & Game Dev",
    cv_edu1_dates: "Sept. 2024 - Fév. 2025",
    cv_edu1_1: "3D Computer Graphics & Realism",
    cv_edu1_2: "Conception géométrique assistée par ordinateur",
    cv_edu1_3: "Game Design & Development",
    cv_edu2_title: "Diplôme d'ingénieur en informatique et mathématiques appliquées",
    cv_edu2_dates: "Sept. 2022 - Sept. 2025",
    cv_edu2_1: "Mathématiques appliquées avancées",
    cv_edu2_2: "Projet noyau Unix simplifié",
    cv_edu2_3: "Algorithmique avancée, programmation C/Java/Assembleur",
    cv_edu2_4: "Conception d'applications",
    cv_edu2_5: "Étude des réseaux, bases de données, systèmes",
    cv_edu3_title: "DUT Informatique en année accélérée",
    cv_edu3_dates: "2021 - 2022",
    cv_edu3_1: "Apprentissage du code C/C/C++, Web & SQL",
    cv_edu3_2: "Programmation orientée objet sous Unix & Windows",
    cv_edu4_title: "Classe prépa aux Grandes Écoles",
    cv_edu4_dates: "2019 - 2020",
    cv_edu4_1: "MPSI (Maths - Physique - Informatique - Ingénierie)",
    cgr: "Graphisme & Réalisme 3D",
    rtr: "Rendu en Temps Réel",
    gamedev: "Développement & Design de Jeux Vidéo",
    nav_home: "Accueil",
    nav_about: "Présentation",
    nav_resume: "CV",
    nav_portfolio: "Portfolio",
    code_link: "Le code du projet est disponible sur GitHub à ",
    portfolio_title: "Mon Portfolio",
    project1: "Moteur 3D OpenGL & Ombrage",
    project1_desc: "En utilisant le tutoriel OpenGL, j'ai développé un moteur graphique 3D en C++ avec des techniques d'ombrage avancées et différents types de sources lumineuses. Ce projet utilise GLSL pour la programmation des shaders, Glad et GLFW pour la gestion du contexte et de la fenêtre, et inclut des fonctionnalités comme le mappage de textures, le mappage normal et le mappage d'ombres.",
    project2: "3DCGR Premier Projet de Path-Tracing",
    project2_desc: "Ce projet représente mes premiers pas dans le monde de l'infographie. J'ai implémenté un path-tracer basique en C++ presque de zéro, en utilisant la théorie apprise dans le cours de 3D Computer Graphics & Realism de TUGraz. J'ai utilisé des algorithmes et principes mathématiques tels que l'intersection droite-triangle de Möller-Trumbore, l'estimation de Monte Carlo, et même un peu de physique derrière le modèle de lentille convexe.",
    project3: "3DCGR Second Projet de Path-Tracing",
    project3_desc: "Dans ce deuxième projet du cours 3DCGR de TUGraz, j'ai amélioré mon path-tracer précédent en utilisant des techniques supplémentaires telles que l'estimation du prochain événement (NEE) pour l'éclairage direct et les milieux participants homogènes (brouillard) avec diffusion et absorption. Cela a permis d'obtenir des images plus réalistes avec une meilleure gestion de la lumière et des effets.",
    project4: "Jeu 2D Unity utilisant un Framework Pokémon",
    project4_desc: "Ce projet est un jeu 2D développé dans Unity en utilisant un framework d'assets personnalisé inspiré de Pokémon. Le jeu propose de l'exploration, des combats, et un cycle jour-nuit, le tout construit avec des scripts C# et les outils de développement de jeux d'Unity.",
    desc_project1_1: 'Vue à 360 degrés d\'une scène 3D rendue avec OpenGL. On peut observer comment les différents matériaux (principalement le bois et le métal) réagissent aux diverses sources lumineuses, incluant des types directionnels, ponctuels et projecteurs. Les reflets spéculaires bleus sur les parties métalliques montrent une source lumineuse type "Lune" avec une couleur spéculaire bleue. La lumière rougeâtre provenant du cube montre un joli reflet diffus et spéculaire sur le bois.',
    desc_project2_1: "Première scène 3DCGR rendue à l'aide du path-tracing qui met en avant la gestion de primitives triangles (algorithme Möller-Trumbore d'intersection Triangle-Droite) et sphères, ainsi que le chargement de modèles à partir de fichiers OFF. Elle démontre également l'éclairage de base avec une source lumineuse unique. Ici, le casque représente une réflexion diffuse idéale, une sphère est une réflexion spéculaire idéale, et l'autre sphère est une réfraction diélectrique idéale. L'importation de modèles crée aussi une sphère englobante pour accélérer les tests d'intersection.",
    desc_project2_2: "Deuxième image rendue en path-tracing d'une autre scène, sans profondeur de champ ni Bokehs. Ici, nous utilisons toujours un modèle de caméra avec une lentille infiniment petite (modèle pinhole), donc il n'y a pas d'effet de profondeur de champ.",
    desc_project2_3: "Troisième image rendue en path-tracing. Cette fois-ci le modèle utilise une lentille de taille finie, ce qui introduit un effet de profondeur de champ et de focus. On peut observer que les objets éloignés du plan en focus (les étoiles) sont flous, tandis que ceux focus (le coeur) sont nets. Il n'y a pas encore de forme de bokeh particulière.",
    desc_project2_4: "Même scène mais avec une forme de bokeh personnalisée appliquée à la lentille de la caméra. Ici, la forme de bokeh est une étoile à 6 branches, ce qui peut être vu dans le flou des étoiles.",
    desc_project2_5: "La dernière image de cette scène met en avant une forme de bokeh différente et un subtil effet de vignetage (œil de chat). On peut voir les branches extérieures des étoiles s'estomper sur les bords de l'image.",
    desc_project3_1: "Scène comportant une seule lumière, rendue SANS échantillonnage explicite de la source lumineuse (aussi appelée estimation du prochain événement NEE). On ne voit aucun biais ou erreur, au prix d'un certain bruit.",
    desc_project3_2: "Scène comportant une seule lumière, rendue AVEC échantillonnage explicite de la source lumineuse (aussi appelée estimation du prochain événement NEE). On peut observer une réduction significative du bruit, notamment dans les zones d'ombre, au prix de quelques erreurs par-ci par-là. Cela est généralement préféré car les erreurs peuvent être corrigées par post-traitement.",
    desc_project3_3: "Scène avec plusieurs sources lumineuses, rendue avec l'estimation du prochain événement (NEE). On peut clairement voir les lumières colorées et à pleine intensité.",
    desc_project3_4: "Scène avec plusieurs sources lumineuses, rendue avec l'estimation du prochain événement (NEE). On peut clairement voir une sorte de brouillard, et la lumière est légèrement estompée. Cela est dû à l'absorption et la diffusion de \"l'air\" environnant. Cela simule un environnement poussiéreux ou brumeux.",
    desc_project4_1: "FR Description du Projet 4 - 1",
    desc_project4_2: "FR Description du Projet 4 - 2",
    desc_project4_3: "FR Description du Projet 4 - 3",
    desc_project4_4: "FR Description du Projet 4 - 4",
    desc_project4_5: "FR Description du Projet 4 - 5",
    desc_project4_6: "FR Description du Projet 4 - 6",
    credits: '© 2025 Jules "Lejus" Vandeputte. Tous droits réservés.'
  }
};

let currentLang = 'en';
window.translations = translations;
window.currentLang = currentLang;

function setLang(lang) {
  currentLang = lang;
  window.currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Change le bouton
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';
  // Change le titre principal
  const mainTitle = document.querySelector('.portfolio h1[data-i18n]');
  if (mainTitle) mainTitle.textContent = translations[lang]['portfolio_title'];
  // Change les titres de projets
  document.querySelectorAll('h2[data-i18n]').forEach(h2 => {
    const key = h2.getAttribute('data-i18n');
    if (translations[lang][key]) h2.textContent = translations[lang][key];
  });
    // Met à jour la description du slide actif de chaque carousel
  updateAllCarouselDescriptions();
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      setLang(currentLang === 'en' ? 'fr' : 'en');
    });
  }
  setLang(currentLang);
  updateAllCarouselDescriptions();
});
