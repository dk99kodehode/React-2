import { useState } from "react";
import storestyles from "./Store.module.css";

import { Upgrade } from "../Upgrades/Upgrade.jsx";
import { upgrades } from "../Upgrades/upgrades.jsx";
import Enchantments from "../Enchantments/Enchantments.jsx";

export default function Store({ count, setCount, cps, setCps }) {
  const [upgradeUnits, setUpgradeUnits] = useState(
    upgrades.map((upgrade) => Number(upgrade.units) || 0),
  );

  const getUpgradePrice = (index) => {
    const upgrade = upgrades[index];
    const units = upgradeUnits[index];

    return Math.ceil(upgrade.price * Math.pow(1.15, units));
  };

  const buyUpgrade = (index) => {
    const upgrade = upgrades[index];
    const units = upgradeUnits[index];

    const price = Math.ceil(upgrade.price * Math.pow(1.15, units));

    if (count < price) {
      console.log("Not enough cookies!");
      return;
    }

    // Remove cookies
    setCount((prevCount) => prevCount - price);

    // Add one unit
    setUpgradeUnits((prevUnits) =>
      prevUnits.map((units, i) => (i === index ? units + 1 : units)),
    );

    // Add CPS
    setCps((prevCps) => prevCps + upgrade.cps);
  };

  return (
    <div className={storestyles.store}>
      <div className={storestyles.storeOverhead}>
        <h2>STORE</h2>
      </div>

      <div className={storestyles.Increases}>
        <Enchantments />
        <Enchantments />
        <Enchantments />
        <Enchantments />
        <Enchantments />
        <Enchantments />
      </div>

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          paddingBottom: "5px",
          position: "sticky",
          top: "0",
        }}
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
            price={getUpgradePrice(index)}
            units={upgradeUnits[index]}
            buyUpgrade={() => buyUpgrade(index)}
            description={upgrade.description}
            cps={upgrade.cps}
          />
        ))}
      </div>
    </div>
  );
}
