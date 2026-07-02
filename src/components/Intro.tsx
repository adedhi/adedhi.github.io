import styles from './Intro.module.css';

export default function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.hello}>Hello! 👋</div>
            <div className={styles.biography}>I'm <strong>Adeshvir</strong>, a fourth-year Computer Science student at Toronto Metropolitan University with a passion for problem-solving and technology.</div>
        </div>
    );
}