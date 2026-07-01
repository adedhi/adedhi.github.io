import { PROJECT_LINKS } from '../data/links';
import styles from './Projects.module.css';

function Project({
    name,
    href,
    resources,
    points
}: {
    name: string;
    href: string;
    resources: string[];
    points: string[]
}) {
    return (
        <div className={styles.project}>
            <div className={styles.projectHeader}>
                <span className={styles.projectName}>{name}</span>
                <a href={href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    <span>🡪</span>
                </a>
            </div>
            <div className={styles.projectResources}>
                {resources.map((resource, index) => (
                    <div key={index} className={styles.projectResource}>{resource}</div>
                ))}
            </div>
            <ul className={styles.projectDescription}>
                {points.map((point, index) => (
                    <li key={index} className={styles.projectPoint}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Projects() {
    const projectsInfo = [
        {
            name: "Google Sheets Data Analysis and Visualization",
            href: PROJECT_LINKS.DATA_ANALYSIS_AND_VISUALIZATION,
            resources: ["Python", "pandas", "NumPy", "Matplotlib"],
            points: ["Created Python scripts to analyze and visualize survey data from Google Sheets, processing over 100 responses and generating 11 insightful graphs, demonstrating strong skills in data wrangling and statistical analysis"],
        },
        {
            name: "Manga Update Web Scraper",
            href: PROJECT_LINKS.WEB_SCRAPER,
            resources: ["Python", "Selenium", "Requests", "Beautiful Soup", "Datetime"],
            points: ["Developed a Python web scraper using Selenium and Beautiful Soup, automating manga updates tracking with CSV data persistence and a user-friendly interface"],
        },
        {
            name: "Battleship",
            href: PROJECT_LINKS.BATTLESHIP,
            resources: ["Java"],
            points: ["Developed a modular, command-line battleship game in Java, featuring an intelligent algorithm for computer moves that demonstrates strong problem-solving, algorithmic thinking, and object-oriented design skills"],
        },
        {
            name: "Matrix Calculator",
            href: PROJECT_LINKS.MATRIX_CALCULATOR,
            resources: ["C"],
            points: ["Created a C-based Matrix Calculator with efficient matrix operations, including determinant calculation, row echelon form, and inverses, all within a streamlined command-line interface"],
        },
        {
            name: "Personal Website",
            href: PROJECT_LINKS.WEBSITE,
            resources: ["HTML", "CSS", "JavaScript"],
            points: ["Developed a responsive personal website showcasing projects and skills, leveraging HTML for content structure, CSS for modern design and layout, and JavaScript for enhanced interactivity and dynamic visual transitions"],
        },
        {
            name: "Boggle Word Game",
            href: PROJECT_LINKS.BOGGLE,
            resources: ["Rust", "Haskell", "Elixir", "Smalltalk"],
            points: ["Developed the Boggle word game in four different languages, implementing an efficient algorithm to identify valid words from an NxN grid of letters, showcasing versatility in functional and object-oriented programming paradigms"],
        },
        {
            name: "The Odin Project",
            href: PROJECT_LINKS.ODIN_PROJECT,
            resources: ["HTML", "CSS", "JavaScript"],
            points: ["Developed interactive web-based projects, including a calculator and etch-a-sketch, for the Foundations Course in The Odin Project, utilizing HTML for structure, CSS for design, and JavaScript to implement dynamic functionality, demonstrating a strong foundation in front-end web development"],
        }
    ];

    return (
        <div className={styles.projects} id="projects">
            <div className={styles.projectsHeader}><strong>Projects</strong></div>
            <div className={styles.projectsContainer}>
                {projectsInfo.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        href={project.href}
                        resources={project.resources}
                        points={project.points}
                    />
                ))}
            </div>
        </div>
    );
}