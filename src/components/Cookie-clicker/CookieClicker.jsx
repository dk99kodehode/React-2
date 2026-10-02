import { useState, useEffect } from "react";

import styles from "./Cookie.module.css";

// components and styling
import Cookie from "../Cookie-clicker/CookieAssets/cookie.png";
import Store from "./Store/Store.jsx";
import Farms from "./Farms/Farms.jsx";

export default function CookieClicker() {
  // Current spendable cookies
  const [count, setCount] = useState(0);
  const [cps, setCps] = useState(0);

  // Total cookies earned during the game
  const [totalCookies, setTotalCookies] = useState(0);

  // XP should be based on lifetime cookies
  const xp = Math.floor(totalCookies / 1);

  const [clicked, setClicked] = useState(false);

  const [clickTimes, setClickTimes] = useState([]);

  // Increases Cookie Count from clicks
  const increaseCount = () => {
    const now = Date.now();

    setClicked(true);

    // Purchase power cookies
    setCount((prevCount) => prevCount + 100);

    // Lifetime cookies or Total cookies
    setTotalCookies((prevTotal) => prevTotal + 1);

    setClickTimes((prevTimes) => [
      ...prevTimes.filter((time) => now - time < 1000),
      now,
    ]);
  };

  // Calculates cookies generated per second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      setClickTimes((prevTimes) => {
        const recentClicks = prevTimes.filter((time) => now - time < 1000);

        setCps(recentClicks.length);

        return recentClicks;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
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

          {clicked && <div className={styles.clicked}>+1</div>}

          <div className={styles.wave}></div>
        </div>
      </div>

      <Farms xp={xp} />

      <Store count={count} setCount={setCount} cps={cps} setCps={setCps} />
    </div>
  );
}
