/**
 * Valores permitidos para el estado y tipo de cada proyecto
 * Estos tipos ayudan a comprobar los datos desde JavaScript
 *
 * @typedef {"completed" | "inDevelopment" | "onHold" | "prototype" | "planned" | "cancelled"} ProjectStatus
 * @typedef {"personal" | "academic" | "client"} ProjectType
 *
 * Estructura de los datos que necesita ProjectCard.astro
 *
 * @typedef {Object} Project
 * @property {string} image
 * @property {ProjectStatus} status
 * @property {string} category
 * @property {ProjectType} type
 * @property {string} title
 * @property {string} subtitle
 * @property {str-ing} description
 * @property {string[]} technologies
 * @property {string} [url]
 */

/**
 * Información de los proyectos que aparecen en la sección "Nuestro Trabajo"
 * Cada objeto contiene los datos necesarios para generar una tarjeta
 *
 * @type {Project[]}
 */
export const projects = [
    {
        // Ruta de la imagen representativa del proyecto
        image: "/assets/images/projects/coffee-blog.png",

        // Estado actual: "completed" (Completado), "inDevelopment" (En Desarrollo)
        status: "completed",

        // Categoría del proyecto: Desarrollo Web, Desarrollo de software, E-commerce, etc
        category: "Desarrollo Web",

        // Tipo de proyecto: "personal", "academic", "client".
        type: "personal",

        // Nombre principal del proyecto.
        title: "Coffee Blog",

        // Descripción breve que aparece debajo del título.
        subtitle: "Blog editorial especializado en café",

        // Descripción detallada del proyecto.
        description:
            "Sitio web editorial dedicado a explorar la cultura, historia, variedades y métodos de preparación del café mediante artículos y guías para los amantes del café.",

        // Tecnologías utilizadas en el desarrollo.
        technologies: ["Astro", "HTML", "Tailwind CSS", "JavaScript"],

        // Dirección web del proyecto. Propiedad opcional.
        url: "https://coffee-blog-codeva-studio.netlify.app/",
    },
    {
        image: "/assets/images/projects/backgrounds/abstract-violet.png",
        status: "inDevelopment",
        category: "Desarrollo Web",
        type: "personal",
        title: "Vitrae",
        subtitle: "E-commerce de espejos y vidrio grabados a mano",
        description:
            "Plataforma web para presentar y comercializar piezas de vidrio y espejo grabadas a mano, con catálogo y compras en línea.",
        technologies: ["Astro", "HTML", "Tailwind CSS", "JavaScript"],
    },
];
