import styles from './ThemeToggle.module.css';

export default function ThemeToggle({
    currentTheme,
    toggleTheme
}: {
    currentTheme: string;
    toggleTheme: () => void;
}) {
    return (
        <label className={styles.switch} aria-label="Toggle dark mode">
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={currentTheme === "dark"}
                onChange={toggleTheme}
            />
            <span className={styles.slider}>
                {currentTheme === "dark" ? "Dark" : "Light"}
            </span>
        </label>
    );
}