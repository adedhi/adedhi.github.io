import { SOCIAL_LINKS } from '../data/links';
import { PageLink, SocialLink } from './Link';
import githubLogo from '../assets/github.svg';
import linkedInLogo from '../assets/linkedin.svg';
import emailLogo from '../assets/email.svg';
import styles from './Header.module.css';

export default function Header() {
    const socialLinks = [
        { href: SOCIAL_LINKS.GITHUB, imageSrc: githubLogo, alt: "GitHub Logo", opensNewTab: true },
        { href: SOCIAL_LINKS.LINKEDIN, imageSrc: linkedInLogo, alt: "LinkedIn Logo", opensNewTab: true },
        { href: SOCIAL_LINKS.EMAIL, imageSrc: emailLogo, alt: "Email Logo" }
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
                        imageSrc={link.imageSrc}
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
            </div>
        </div>
    );
}
