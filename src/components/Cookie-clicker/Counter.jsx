import { useState } from "react";

// components og styling
import Cookie from "../../assets/cookie.png";
import styles from "./Cookieclicker.module.css";
import { milk, chocolateMilk, strawberryMilk } from "./CookieAssets/milkassets";

export default function CookieCounter() {
  const [count, setCount] = useState(0);

  // usestate 0
  // function til arrow function som sjekker previous count også + 1
  // returner en div med bilde også som kan trykkes for også added count på paragraphen med {count}
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <div className={styles.cookiecontainer}>
        <div className={styles.cookieclicker}>
          <img
            className={styles.cookie}
            src={Cookie}
            onClick={increaseCount}
            alt="cookie-png"
          />

          <p className={styles.counter}>Cookies: {count}</p>
        </div>

        <div className={styles.milk}>
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
    </>
  );
}
