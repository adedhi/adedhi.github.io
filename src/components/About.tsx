import { SOCIAL_LINKS } from '../data/links';
import { SocialLink } from './Link';
import GithubLogo from '../assets/github.svg?react';
import LinkedInLogo from '../assets/linkedin.svg?react';
import EmailLogo from '../assets/email.svg?react';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.about} id="about">
            <div className={styles.header}>
                <strong>About Me</strong>
            </div>
            <div className={styles.body}>
                As a fourth-year <strong>Computer Science</strong> student at Toronto Metropolitan University, I find great satisfaction in working with technology to solve complex challenges. My academic journey includes consistent Dean's List recognition and a 4.15/4.33 CGPA, maintained while balancing coursework with co-op terms.<br /><br />

                I've applied my skills professionally through a 16-month Software Developer internship at YuJa, building full-stack features for a platform used by 200+ institutions, and through my own projects, which you can explore below or on my GitHub{" "}
                <span className={styles.iconTrail}><SocialLink href={SOCIAL_LINKS.GITHUB} Icon={GithubLogo} alt="GitHub Logo" size={20} opensNewTab />.</span>
                <br /><br />

                I'm eager to connect with professionals in software development and engineering, as well as machine learning, across any industry. Please reach out to me by sending an email{" "}
                <SocialLink href={SOCIAL_LINKS.EMAIL} Icon={EmailLogo} alt="Email Logo" size={20} />{" "}
                or contacting me through LinkedIn{" "}
                <span className={styles.iconTrail}><SocialLink href={SOCIAL_LINKS.LINKEDIN} Icon={LinkedInLogo} alt="LinkedIn Logo" size={20} opensNewTab />.</span>
                <br /><br />

                When I'm not coding or studying, you can find me reading books, playing video games, or observing the stars through my telescope.
            </div>
        </div>
    );
}