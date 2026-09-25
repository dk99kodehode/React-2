import { useState } from "react";
import { upgrades } from "../Upgrades/upgrades.jsx";
import storestyles from "./Store.module.css";
import { Upgrade } from "../Upgrades/Upgrade.jsx";

export default function Store() {
  const [upgradeUnits, setUpgradeUnits] = useState(
    upgrades.map((upgrade) => upgrade.units),
  );

  // increases units by 1
  const increaseUnits = (index) => {
    setUpgradeUnits((prevUnits) =>
      prevUnits.map((units, i) => (i === index ? units + 1 : units)),
    );
  };

  // decrease units by 1
  const decreaseUnits = (index) => {
    setUpgradeUnits((prevUnits) =>
      prevUnits.map((units, i) => (i === index ? units - 1 : units)),
    );
  };

  return (
    <div className={storestyles.store}>
      <div className={storestyles.storeOverhead}>
        <h2>STORE</h2>
      </div>

      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", paddingBottom: "5px" }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "22px",
            padding: "5px",
            gap: "10px",
            textAlign: "center",
          }}
        >
          <button className={storestyles.buynsell}>Buy</button>
          <button className={storestyles.buynsell}>Sell</button>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              marginLeft: "10px",
            }}
          >
            <button className={storestyles.buynsell}>1</button>
            <button className={storestyles.buynsell}>10</button>
            <button className={storestyles.buynsell}>100</button>
          </div>
        </div>
      </div>

      <div>
        {upgrades.map((upgrade, index) => (
          <Upgrade
            key={index}
            title={upgrade.name}
            image={upgrade.image}
            price={upgrade.price}
            units={upgradeUnits[index]}
            increaseUnits={() => increaseUnits(index)}
            decreaseUnits={() => decreaseUnits(index)}
          />
        ))}
      </div>
    </div>
  );
}
