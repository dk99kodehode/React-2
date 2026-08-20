import { useState } from "react";
import Cookie from "../assets/cookie.png";
import styles from "./Cookieclicker.module.css";

export default function CookieCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.cookie}
          src={Cookie}
          onClick={increaseCount}
          alt="cookie-png"
        />
        <p className={styles.counter}>Cookies: {count}</p>
      </div>
    </>
  );
}
