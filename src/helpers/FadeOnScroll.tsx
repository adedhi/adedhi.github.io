import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import styles from './FadeInSection.module.css';

export default function FadeOnScroll({
    children,
    threshold = 300
}: {
    children: ReactNode;
    threshold?: number
}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY >= threshold);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return (
        <div className={`${styles.fadeInSection} ${isVisible ? styles.visible : ''}`}>
            {children}
        </div>
    );
}