import styles from "./Farms.module.css";

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
            }}
          >
            <button
              style={{
                padding: "10px",
                backgroundColor: "brown",
                borderRadius: "20px",
              }}
            >
              Options
            </button>
            <button
              style={{
                padding: "10px",
                backgroundColor: "brown",
                borderRadius: "20px",
              }}
            >
              Stats
            </button>
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
            style={{ flexDirection: "column", display: "flex", gap: "20px" }}
          >
            <button
              style={{
                padding: "10px",
                backgroundColor: "brown",
                borderRadius: "20px",
              }}
            >
              Info
            </button>
            <button
              style={{
                padding: "10px",
                backgroundColor: "brown",
                borderRadius: "20px",
              }}
            >
              Legacy
            </button>
          </div>
        </div>
      </div>

      <div className={styles.farmBorder}>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
      </div>
    </div>
  );
}
