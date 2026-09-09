import storestyles from "./Store.module.css";
import { milk, chocolateMilk, strawberryMilk } from "./CookieAssets/milkassets";

export default function Store() {
  return (
    <div className={storestyles.store}>
      <div className={storestyles.storeOverhead}>
        <h2>STORE</h2>
      </div>
      <div className={storestyles.milk}>
        <p>
          <img src={milk} alt="milk-img" />
          Milk
        </p>
        <p>
          <img src={strawberryMilk} alt="strawberryMilk-img" />
          Strawberry Milk
        </p>
        <p>
          <img src={chocolateMilk} alt="chocolateMilk-img" />
          Chocolate Milk
        </p>
      </div>
    </div>
  );
}
