import styles from "./Farms.module.css";
import XpBar from "./XpBar.jsx";

export default function Farms() {
  return (
    <div className={styles.farms}>
      <div className={styles.settings}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              gap: "20px",
              marginLeft: "2px",
              marginTop: "5px",
            }}
          >
            <button className={styles.Buttons}>Options</button>
            <button className={styles.Buttons}>Stats</button>
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <p>random cat fact</p>
          </div>

          <div
            style={{
              flexDirection: "column",
              display: "flex",
              gap: "20px",
              marginTop: "5px",
            }}
          >
            <button className={styles.Buttons}>Info</button>
            <button className={styles.Buttons}>Legacy</button>
          </div>
        </div>

        <XpBar />
      </div>

      <div className={styles.farmBorder}>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
      </div>
    </div>
  );
}
