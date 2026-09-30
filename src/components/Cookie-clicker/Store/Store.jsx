import { useState } from "react";
import storestyles from "./Store.module.css";

import { Upgrade } from "../Upgrades/Upgrade.jsx";
import { upgrades } from "../Upgrades/upgrades.jsx";

export default function Store({ count, setCount }) {
  const [upgradeUnits, setUpgradeUnits] = useState(
    upgrades.map((upgrade) => Number(upgrade.units) || 0),
  );

  const [upgradePrices, setUpgradePrices] = useState(
    upgrades.map((upgrade) => upgrade.price),
  );

  const buyUpgrade = (index) => {
    const price = upgradePrices[index];

    // Make sure price is actually a number
    if (typeof price !== "number" || Number.isNaN(price)) {
      console.error("Invalid price:", price);
      return;
    }

    // Not enough cookies
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

    // Increase price by 30% can be changed with with percentile increase to desire, main goal is to increas by 1.15 + Number of Units = "1.15 + N"
    setUpgradePrices((prevPrices) =>
      prevPrices.map((currentPrice, i) =>
        i === index ? Math.ceil(currentPrice * 1.3) : currentPrice,
      ),
    );
  };

  return (
    <div className={storestyles.store}>
      <div className={storestyles.storeOverhead}>
        <h2>STORE</h2>
      </div>

      {/*-- tiny increases , upgrades--*/}
      <div className={storestyles.Increases}>
        <div className={storestyles.border}></div>
        <div className={storestyles.border}></div>
        <div className={storestyles.border}></div>
        <div className={storestyles.border}></div>
        <div className={storestyles.border}></div>
        <div className={storestyles.border}></div>
        <div className={storestyles.border}></div>
      </div>

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
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

      {/*-- units */}
      <div>
        {upgrades.map((upgrade, index) => (
          <Upgrade
            key={index}
            title={upgrade.name}
            image={upgrade.image}
            price={upgradePrices[index]}
            units={upgradeUnits[index]}
            buyUpgrade={() => buyUpgrade(index)}
          />
        ))}
      </div>
    </div>
  );
}
