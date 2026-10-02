import styles from "./Enchantments.module.css";
import ReinforcedCursor from "./Reinforced.png";
import { useState } from "react";

export default function Enchantments({ title, price }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={styles.border}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => setShow(false)}
    >
      <img src={ReinforcedCursor} alt={title} />

      {show && (
        <>
          <div className={styles.description}>
            <div className={styles.upgradeRow}>
              <img src={ReinforcedCursor} alt={title} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className={styles.Icon}>Cursor</p>
                <p className={styles.upgrade}>Upgrade</p>
              </div>
              <p className={styles.price}>30🍪</p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "16px",
                }}
              >
                The mouse and cursors are twice as efficient.
              </p>
              <p
                style={{
                  fontSize: "12px",
                }}
              >
                "Prod Prod"
              </p>
            </div>

            <div>
              <p style={{ fontSize: "10px" }}>Click to purchase</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
