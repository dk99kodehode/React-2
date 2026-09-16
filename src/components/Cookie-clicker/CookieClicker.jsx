import { useState } from "react";

import styles from "./Cookie.module.css";

// components og styling
import Cookie from "../../assets/cookie.png";
import Store from "./Store";
import Farms from "./Farms";

export default function CookieClicker() {
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
          <input
            className={styles.bakery}
            type="text"
            placeholder="Daniels bakery"
          />
          <div className={styles.cookiepersecond}>
            <p className={styles.counter}>
              <span>{count}</span>
              <span>cookies</span>
            </p>
            <p className={styles.counterps}>per second:____</p>
          </div>
          <div className={styles.CCcontainer}>
            <img
              className={styles.cookie}
              src={Cookie}
              onClick={() => {
                increaseCount;
              }}
              alt="cookie-png"
            />
          </div>
        </div>

        <Farms />

        <Store />
      </div>
    </>
  );
}
