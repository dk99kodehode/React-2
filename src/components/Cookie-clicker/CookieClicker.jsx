import { useState, useEffect } from "react";

import styles from "./Cookie.module.css";

// components og styling
import Cookie from "../../assets/cookie.png";
import Store from "./Store/Store.jsx";
import Farms from "./Farms/Farms.jsx";

export default function CookieClicker() {
  const [count, setCount] = useState(0);
  const [cps, setCps] = useState(0);

  // Later, these can come from your Store/Farms components
  const [farmCps, setFarmCps] = useState(0);
  const [factoryCps, setFactoryCps] = useState(0);

  useEffect(() => {
    setCps(farmCps + factoryCps);
  }, [farmCps, factoryCps]);

  // Calculate CPS from clicks
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
              <span>{count.toFixed(0)}</span>
              <span>cookies</span>
            </p>
            <p className={styles.counterps}>per second: {cps.toFixed(2)}</p>
          </div>
          <div className={styles.CCcontainer}>
            <div className={styles.Radiant}>
              <img
                className={styles.cookie}
                src={Cookie}
                onClick={increaseCount}
                alt="cookie-png"
              />
            </div>

            <div className={styles.wave}></div>
          </div>
        </div>

        <Farms />

        <Store />
      </div>
    </>
  );
}
