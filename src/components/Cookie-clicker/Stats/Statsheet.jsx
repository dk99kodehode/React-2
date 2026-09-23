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

      <div>
        <h1 className={styles.overhead}>General</h1>

        <h2>Cookies in the bank:</h2>
      </div>

      <div>
        <h1 className={styles.overhead}>Upgrades</h1>

        <h2>Upgrades unlocked</h2>
      </div>

      <div>
        <h1 className={styles.overhead}>Achievements</h1>

        <h2>Achievements Unlocked: 0 / 420 (%)</h2>
      </div>
    </div>
  );
}
