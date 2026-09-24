import styles from "./Stats.module.css";

export default function Statsheet({ setMiddlePage }) {
  return (
    <div className={styles.page}>
      <button
        className={styles.exit}
        onClick={() => {
          setMiddlePage("farms");
        }}
      >
        X
      </button>
      <h1 className={styles.stats}>Statistics</h1>

      <div className={styles.general}>
        <h1 className={styles.overhead}>General</h1>

        <h2 className={styles.stat}>Cookies in the bank: ___</h2>

        <div>
          <h1 className={styles.overhead}>Upgrades</h1>

          <h2 className={styles.stat}>Upgrades unlocked: 0 / 69</h2>
        </div>

        <div>
          <h1 className={styles.overhead}>Achievements</h1>

          <h2 className={styles.stat}>Achievements Unlocked: 0 / 420 (%)</h2>
        </div>
      </div>
    </div>
  );
}
