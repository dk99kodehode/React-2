import styles from "./Farms.module.css";
import XpBar from "../Skilltree/XpBar.jsx";

// change pages
import { useState } from "react";
import Statsheet from "../Stats/Statsheet.jsx";

export default function Farms() {
  const [middlePage, setMiddlePage] = useState("farms");

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
            <button
              onClick={() => {
                setMiddlePage("stats");
              }}
              className={styles.Buttons}
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

      {/* MIDDLE */}
      <div className={styles.farmBorder}>
        {middlePage === "farms" && (
          <>
            <div className={styles.unit}></div>
            <div className={styles.unit}></div>
            <div className={styles.unit}></div>
            <div className={styles.unit}></div>
            <div className={styles.unit}></div>
          </>
        )}

        {middlePage === "stats" && <Statsheet setMiddlePage={setMiddlePage} />}
      </div>
    </div>
  );
}
