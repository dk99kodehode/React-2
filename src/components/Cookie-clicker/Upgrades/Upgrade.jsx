import { useState } from "react";
import UnitBackground from "../Unit/Buildings/UnitBackground.png";
import styles from "./Upgrade.module.css";

export function Upgrade({
  title,
  image,
  price,
  units,
  buyUpgrade,
  description,
  cps,
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={buyUpgrade}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{
        backgroundImage: `url(${UnitBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        height: "55px",
        paddingBottom: "20px",
        alignItems: "center",
        marginTop: "2px",
        cursor: "pointer",
        position: "relative",
        overflow: "visible",

        filter: show ? "brightness(1.2)" : "brightness(1)",
      }}
    >
      {/* IMAGE */}
      <img
        style={{
          objectFit: "contain",
          width: "70px",
          height: "auto",
          paddingTop: "20px",
          opacity: "0.8",
          flexShrink: 0,
          marginLeft: "0px",
        }}
        src={image}
        alt={title}
      />

      {/* TITLE + PRICE */}
      <div
        style={{
          marginLeft: "55px",
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            color: "white",
            margin: "0 0 5px 0",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "gold",
            margin: 0,
            fontSize: "18px",
          }}
        >
          🍪{price}
        </p>
      </div>

      {/* COUNTER */}
      <div
        style={{
          position: "absolute",
          right: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "150px",
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        <p
          style={{
            fontSize: "80px",
            fontFamily: "Gobits",
            margin: 0,
            color: "#9ba5b5",
          }}
        >
          {units}
        </p>
      </div>

      {/* DESCRIPTION */}
      {show && (
        <div className={styles.container}>
          <div className={styles.upgradeRow}>
            <img src={image} alt={title} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className={styles.upgrade}>Owned: {units}</p>
            </div>

            <p className={styles.price}>${price}🍪</p>
          </div>

          <p className={styles.description}>{description}</p>

          <div style={{ display: "Flex", flexDirection: "column", gap: "2px" }}>
            <div className={styles.stats}>
              <p className={styles.statText}>
                Each {title} produces {cps} cookies per second
              </p>
            </div>

            <div className={styles.stats}>
              <p className={styles.statText}>
                {units} {title} producing {cps * units} per second
              </p>
            </div>

            <div className={styles.stats}>
              <p className={styles.statText}>
                __ , __ cookies harvested so far
              </p>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "10px" }}>Click to purchase.</p>
          </div>
        </div>
      )}
    </div>
  );
}
