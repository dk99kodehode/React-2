import styles from "./Enchantments.module.css";
import ReinforcedCursor from "../Enchantments/Reinforced.png";
import { useState } from "react";

export default function Enchantments({ title, price }) {
  const [show, setShow] = useState(true);

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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                style={{ width: "1000px" }}
                src={ReinforcedCursor}
                alt={title}
              />
            </div>

            <div style={{ display: "flex" }}>
              <h4>Cursor Upgrade</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
