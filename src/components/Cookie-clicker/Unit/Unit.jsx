import styles from "./Unit.module.css";

export default function UnitContainer({ backgroundImage }) {
  return (
    <div className={styles.unit}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
