import styles from './Link.module.css';

export function SocialLink({
    href,
    imageSrc,
    alt,
    height = 35,
    opensNewTab = false
}: {
    href: string;
    imageSrc: string;
    alt: string;
    height?: number;
    opensNewTab?: boolean
}) {
    return (
        <a
            href={href}
            className={styles.socialLink}
            target={opensNewTab ? "_blank" : undefined}
            rel={opensNewTab ? "noopener noreferrer" : undefined}
        >
            <img src={imageSrc} alt={alt} height={height} />
        </a>
    );
}

export function PageLink({
    href,
    text,
    opensNewTab = false
}: {
    href: string;
    text: string;
    opensNewTab?: boolean
}) {
    return (
        <a
            href={href}
            className={styles.pageLink}
            target={opensNewTab ? "_blank" : undefined}
            rel={opensNewTab ? "noopener noreferrer" : undefined}
        >
            <span>{text}</span>
        </a>
    );
}