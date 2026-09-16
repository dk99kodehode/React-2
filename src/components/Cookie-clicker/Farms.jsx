import styles from "./Farms.module.css";

export default function Farms() {
  return (
    <div className={styles.farms}>
      <div className={styles.farmBorder}>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
      </div>
    </div>
  );
}
