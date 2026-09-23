import { data } from "react-router-dom";
import { upgrades } from "./CookieAssets/upgrades";
import storestyles from "./Store.module.css";
import { Upgrade } from "./Upgrade";

export default function Store() {
  return (
    <div className={storestyles.store}>
      <div className={storestyles.storeOverhead}>
        <h2>STORE</h2>
      </div>

      <div style={{ backgroundColor: "black", paddingBottom: "5px" }}>
        <div
          style={{
            display: "flex",
            marginLeft: "22px",
            padding: "5px",
            gap: "10px",
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
            units={upgrade.units}
          />
        ))}
      </div>
    </div>
  );
}
