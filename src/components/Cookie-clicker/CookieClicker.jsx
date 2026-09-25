import { useState, useEffect } from "react";

import styles from "./Cookie.module.css";

// components og styling
import Cookie from "../../assets/cookie.png";
import Store from "./Store/Store.jsx";
import Farms from "./Farms/Farms.jsx";

export default function CookieClicker() {
  const [count, setCount] = useState(0);
  const [clickTimes, setClickTimes] = useState([]);
  const [cps, setCps] = useState(0);

  // Increases Cookie Count from clicks
  const increaseCount = () => {
    const now = Date.now();

    setCount((prevCount) => prevCount + 1);

    setClickTimes((prevTimes) => [
      ...prevTimes.filter((time) => now - time < 1000),
      now,
    ]);
  };

  // calculates the cookies generated
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      setClickTimes((prevTimes) => {
        const recentClicks = prevTimes.filter((time) => now - time < 1000);

        setCps(recentClicks.length || cps);

        return recentClicks;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
              <span>{count.toFixed()}</span>
              <span>cookies</span>
            </p>
            <p className={styles.counterps}>per second: {cps.toFixed(0)}</p>
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
