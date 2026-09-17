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

      <div>
        {upgrades.map((upgrade, index) => (
          <Upgrade
            key={index}
            title={upgrade.name}
            image={upgrade.image}
            price={upgrade.price}
          />
        ))}
      </div>
    </div>
  );
}
