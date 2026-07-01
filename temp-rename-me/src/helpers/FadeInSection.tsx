import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './FadeInSection.module.css';

export default function FadeInSection({
    children,
    triggerOnce = true
}: {
    children: ReactNode;
    triggerOnce?: boolean
}) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce && sectionRef.current) {
                        observer.unobserve(sectionRef.current);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            });
        }, {
            threshold: 0.15
        });

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [triggerOnce]);

    return (
        <div
            ref={sectionRef}
            className={`${styles.fadeInSection} ${isVisible ? styles.visible : ''}`}
        >
            {children}
        </div>
    );
}
