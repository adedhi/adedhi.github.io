import { SOCIAL_LINKS } from '../data/links';
import { PageLink, SocialLink } from './Link';
import ThemeToggle from './ThemeToggle';
import GithubLogo from '../assets/github.svg?react';
import LinkedInLogo from '../assets/linkedin.svg?react';
import EmailLogo from '../assets/email.svg?react';
import styles from './Header.module.css';

export default function Header({
    currentTheme,
    toggleTheme
}: {
    currentTheme: string;
    toggleTheme: () => void;
}) {
    const socialLinks = [
        { href: SOCIAL_LINKS.GITHUB, imageSrc: GithubLogo, alt: "GitHub Logo", opensNewTab: true },
        { href: SOCIAL_LINKS.LINKEDIN, imageSrc: LinkedInLogo, alt: "LinkedIn Logo", opensNewTab: true },
        { href: SOCIAL_LINKS.EMAIL, imageSrc: EmailLogo, alt: "Email Logo" }
    ];

    const pageLinks = [
        { href: "#about", text: "About" },
        { href: "#projects", text: "Projects" },
        { href: "/Resume - Adeshvir Dhillon.pdf", text: "Résumé", opensNewTab: true },
    ];

    return (
        <div className={styles.header}>
            <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => (
                    <SocialLink
                        key={index}
                        href={link.href}
                        Icon={link.imageSrc}
                        alt={link.alt}
                        opensNewTab={link.opensNewTab}
                    />
                ))}
            </div>
            <div className={styles.pageLinks}>
                {pageLinks.map((link, index) => (
                    <PageLink
                        key={index}
                        href={link.href}
                        text={link.text}
                        opensNewTab={link.opensNewTab}
                    />
                ))}
                <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} />
            </div>
        </div>
    );
}
