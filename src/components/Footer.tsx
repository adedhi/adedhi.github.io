import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
            <div className={styles.footerLink}>
                <a href="#top"><span>☝️</span></a>
            </div>
            <div className={styles.footnote}>
                <span className={styles.footnoteText}>Designed and developed by Adeshvir Dhillon</span>
            </div>
        </>
    );
}