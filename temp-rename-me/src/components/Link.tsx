import type { ElementType } from 'react';
import styles from './Link.module.css';

export function SocialLink({
    href,
    Icon,
    alt,
    size = 35,
    opensNewTab = false
}: {
    href: string;
    Icon: ElementType;
    alt: string;
    size?: number;
    opensNewTab?: boolean
}) {
    return (
        <a
            href={href}
            className={styles.socialLink}
            target={opensNewTab ? "_blank" : undefined}
            rel={opensNewTab ? "noopener noreferrer" : undefined}
            aria-label={alt}
        >
            <Icon width={size} height={size} />
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