import { useState } from "react";

import styles from "./Cookie.module.css";
import storestyles from "./Store.module.css";

// components og styling
import Cookie from "../../assets/cookie.png";
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
          <div className={styles.cookiepersecond}>
            <p className={styles.counter}>Cookies: {count}</p>
            <p className={styles.counterps}>Cookies per second:____</p>
          </div>
          <div className={styles.CCcontainer}>
            <img
              className={styles.cookie}
              src={Cookie}
              onClick={increaseCount}
              alt="cookie-png"
            />
          </div>
        </div>

        <div className={storestyles.store}>
          <h2>STORE</h2>
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
      </div>
    </>
  );
}
