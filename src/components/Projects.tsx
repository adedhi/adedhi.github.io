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
            name: "Job Tracker",
            href: PROJECT_LINKS.JOB_TRACKER,
            resources: ["React", "Typescript", "Node.js", "Express", "PostgreSQL", "Prisma", "MUI"],
            points: ["Architected and built a full-stack job application tracker from the ground up, featuring a normalized PostgreSQL schema, session-based authentication built from scratch, and a responsive React/TypeScript dashboard, deployed as an npm-workspaces monorepo across Vercel and Render"],
        },
        {
            name: "stashd",
            href: PROJECT_LINKS.STASHD,
            resources: ["Rust"],
            points: ["Engineered a Redis-compatible key-value store server from scratch in Rust, implementing the RESP wire protocol for compatibility with real Redis clients like redis-cli, thread-per-connection concurrency over mutex-guarded shared state, and crash-safe persistence via a compacting write-ahead log"],
        },
        {
            name: "resumatch",
            href: PROJECT_LINKS.RESUMATCH,
            resources: ["Python", "sentence-transformers", "KeyBERT", "spaCy", "Streamlit"],
            points: ["Constructed a resume-to-job-description matching tool using sentence embeddings and cosine similarity to score how well a resume covers a posting's requirements, showing which required skills are already covered and which are missing"],
        },
        {
            name: "Google Sheets Data Analysis and Visualization",
            href: PROJECT_LINKS.DATA_ANALYSIS_AND_VISUALIZATION,
            resources: ["Python", "pandas", "NumPy", "Matplotlib"],
            points: ["Authored Python scripts to analyze and visualize survey data from Google Sheets, processing over 100 responses and generating 11 insightful graphs, demonstrating strong skills in data wrangling and statistical analysis"],
        },
        {
            name: "Manga Update Web Scraper",
            href: PROJECT_LINKS.WEB_SCRAPER,
            resources: ["Python", "Selenium", "Requests", "Beautiful Soup", "Datetime"],
            points: ["Programmed a Python web scraper using Selenium and Beautiful Soup, automating manga updates tracking with CSV data persistence and a user-friendly interface"],
        },
        {
            name: "Battleship",
            href: PROJECT_LINKS.BATTLESHIP,
            resources: ["Java"],
            points: ["Devised a modular, command-line battleship game in Java, featuring an intelligent algorithm for computer moves that demonstrates strong problem-solving, algorithmic thinking, and object-oriented design skills"],
        },
        {
            name: "Matrix Calculator",
            href: PROJECT_LINKS.MATRIX_CALCULATOR,
            resources: ["C"],
            points: ["Implemented a C-based Matrix Calculator with efficient matrix operations, including determinant calculation, row echelon form, and inverses, all within a streamlined command-line interface"],
        },
        {
            name: "Personal Portfolio",
            href: PROJECT_LINKS.WEBSITE,
            resources: ["TypeScript", "React", "Vite", "CSS"],
            points: ["Designed and deployed a modern, responsive personal portfolio using React and Vite, featuring a component-driven architecture, modular styling, and an automated CI/CD pipeline"],
        },
        {
            name: "Boggle Word Game",
            href: PROJECT_LINKS.BOGGLE,
            resources: ["Rust", "Haskell", "Elixir", "Smalltalk"],
            points: ["Coded the Boggle word game in four different languages, implementing an efficient algorithm to identify valid words from an NxN grid of letters, showcasing versatility in functional and object-oriented programming paradigms"],
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