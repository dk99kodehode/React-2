import XpBar from "../Skilltree/XpBar.jsx";
import CatFact from "../../CatAPI/RandomCat.jsx";

// styling and button assets
import styles from "./Farms.module.css";
import { upgrades } from "../Upgrades/upgrades.jsx";

import UnitContainer from "../Unit/Unit.jsx";

// change pages
import { useState } from "react";
import Statsheet from "../Stats/Statsheet.jsx";

export default function Farms({ xp }) {
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
            <CatFact />
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

        <XpBar xp={xp} />
      </div>

      {/* MIDDLE */}
      <div className={styles.farmBorder}>
        {middlePage === "farms" && (
          <>
            {upgrades
              .filter((upgrade) => upgrade.background)
              .map((upgrade, index) => (
                <UnitContainer
                  key={index}
                  backgroundImage={upgrade.background}
                />
              ))}
          </>
        )}

        {middlePage === "stats" && <Statsheet setMiddlePage={setMiddlePage} />}
      </div>
    </div>
  );
}
