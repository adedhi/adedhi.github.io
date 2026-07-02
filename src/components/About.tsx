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
                As a fourth-year <strong>Computer Science</strong> student at <strong>Toronto Metropolitan University</strong>, I find great satisfaction in working with technology to solve complex challenges. My academic journey includes 12 years of <strong>French</strong> Immersion and consistent recognition on the <strong>Dean's List</strong>, reflecting my dedication and work ethic.<br /><br />

                Beyond academics, I've applied my coding skills to practical <strong>projects</strong>, such as a Python-based web scraper and a data analysis program utilizing pandas, NumPy, and Matplotlib. You can explore my recent work on <strong>GitHub</strong>{" "}
                <SocialLink href={SOCIAL_LINKS.GITHUB} Icon={GithubLogo} alt="GitHub Logo" size={20} opensNewTab />{" "}
                to see how I bring concepts to life through code.<br /><br />

                I'm currently pursuing an <strong>Honours BSc</strong> in <strong>Computer Science</strong> and am eager to connect with professionals in Software Development, Data Science, Cybersecurity, and Machine Learning. Please reach out to me by sending an email{" "}
                <SocialLink href={SOCIAL_LINKS.EMAIL} Icon={EmailLogo} alt="Email Logo" size={20} />{" "}
                or contacting me through LinkedIn{" "}
                <SocialLink href={SOCIAL_LINKS.LINKEDIN} Icon={LinkedInLogo} alt="LinkedIn Logo" size={20} opensNewTab />
                .<br /><br />

                When I'm not coding or studying, you can find me reading books, playing video games, or observing the stars through my telescope.
            </div>
        </div>
    );
}