import { useState, useEffect } from "react";

import styles from "./Cookie.module.css";

// components og styling
import Cookie from "../../assets/cookie.png";
import Store from "./Store";
import Farms from "./Farms";
import Wave from "./Wave";

export default function CookieClicker() {
  const [count, setCount] = useState(0);
  const [cps, setCps] = useState(0);
  const [clickTimes, setClickTimes] = useState([]);

  // Automatically generate cookies based on CPS
  useEffect(() => {
    let lastTime = Date.now();

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - lastTime) / 1000;

      setCount((prevCount) => prevCount + cps * elapsedTime);

      lastTime = currentTime;
    }, 100);

    return () => clearInterval(interval);
  }, [cps]);

  // Calculate CPS from clicks
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);

    const now = Date.now();

    setClickTimes((prevTimes) => {
      // Only keep clicks from the last 5 seconds
      const recentClicks = prevTimes.filter((time) => now - time < 5000);

      const newClickTimes = [...recentClicks, now];

      // Calculate clicks per second
      setCps(newClickTimes.length / 5);

      return newClickTimes;
    });
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
            <img
              className={styles.cookie}
              src={Cookie}
              onClick={increaseCount}
              alt="cookie-png"
            />

            <Wave />
          </div>
        </div>

        <Farms />

        <Store />
      </div>
    </>
  );
}
