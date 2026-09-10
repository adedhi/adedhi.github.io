import { EXPERIENCE_LINKS } from '../data/links';
import styles from './Experiences.module.css';

type ExperiencePoint = {
    title: string;
    text: string;
};

function Experience({
    roleName,
    companyName,
    companyLink,
    dateRange,
    resources,
    description,
    points
}: {
    roleName: string
    companyName: string;
    companyLink: string;
    dateRange: string;
    resources: string[];
    description: string;
    points: ExperiencePoint[]
}) {
    return (
        <div className={styles.experience}>
            <div className={styles.experienceHeader}>
                <div className={styles.experienceTitle}>
                    <span className={styles.experienceRoleName}>{roleName}</span>
                    <div className={styles.experienceMetadata}>
                        <a href={companyLink} className={styles.experienceLink} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${companyName}'s website`}>
                            <span className={styles.experienceCompanyName}>{companyName}</span>
                        </a>
                        <span className={styles.experienceDateRange}>{dateRange}</span>
                    </div>
                </div>
                <div className={styles.experienceResources}>
                    {resources.map((resource, index) => (
                        <div key={index} className={styles.experienceResource}>{resource}</div>
                    ))}
                </div>
            </div>
            <div className={styles.experienceDescription}>
                <span className={styles.experienceDescriptionParagraph}>{description}</span>
                <ul className={styles.experiencePoints}>
                    {points.map((point, index) => (
                        <li key={index} className={styles.experiencePoint}>
                            <strong>{point.title}</strong>: {point.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Experiences() {
    const experiencesInfo = [
        {
            roleName: "Software Developer",
            companyName: "YuJa Canada Inc.",
            companyLink: EXPERIENCE_LINKS.YUJA,
            dateRange: "Jan. 2025 - Apr. 2026",
            resources: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Java", "AWS", "Kubernetes"],
            description: "At YuJa, I worked on the Verity product team, building YuJa's test proctoring platform used by 200+ higher-education and K-12 institutions. I worked in an agile environment with weekly scrum, collaborating across UI/UX, testing, and marketing teams, and progressed from frontend fixes to full-stack features spanning the product's frontend, backend, and access-control services, primarily in TypeScript, React, Node.js, and Java.",
            points: [
                {
                    title: "Institution Management Portal",
                    text: "Built a role-based portal that consolidated several internal tools into a single self-service page, with strict per-institution data scoping enforced at both the database and API layers so each client only ever sees their own data."
                },
                {
                    title: "AI-Driven Proctoring Summaries",
                    text: "Designed a feature that aggregates flags and session metadata from proctoring sessions, routes them through an LLM, and returns plain-language reports, so instructors can review flagged sessions without digging through raw logs."
                },
                {
                    title: "Platform Infrastructure Refactor",
                    text: "Refactored the Java access-control service to route domain provisioning through an internal platform API instead of calling a third-party provider directly, aligning the product with company-wide platform standards."
                }
            ]
        }
    ];
    
    return (
        <div className={styles.experiences} id="experience">
            <div className={styles.experiencesHeader}><strong>Experience</strong></div>
            <div className={styles.experiencesContainer}>
                {experiencesInfo.map((experience, index) => (
                    <Experience
                        key={index}
                        {...experience}
                    />
                ))}
            </div>
        </div>
    )
}
