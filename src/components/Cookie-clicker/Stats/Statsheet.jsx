import styles from "./Stats.module.css";

export default function Statsheet({ setMiddlePage }) {
  return (
    <div>
      <button
        className={styles.exit}
        onClick={() => {
          setMiddlePage("farms");
        }}
      >
        X
      </button>
      <h1>Statistics</h1>

      <div>
        <h1>General</h1>

        <h2>Cookies in the bank:</h2>
      </div>

      <div>
        <h1>Upgrades</h1>

        <h2>Upgrades unlocked</h2>
      </div>

      <div>
        <h1>Achievements</h1>

        <h2>Achievements Unlocked: 0 / 420 (%)</h2>
      </div>
    </div>
  );
}
