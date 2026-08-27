import { useState } from "react";

// components og styling
import Cookie from "../../assets/cookie.png";
import styles from "./Cookieclicker.module.css";

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
      <div className={styles.container}>
        <img
          className={styles.cookie}
          src={Cookie}
          onClick={increaseCount}
          alt="cookie-png"
        />
        <p className={styles.counter}>Cookies: {count}</p>
      </div>

      <div className="milk">
        <p>Milk</p>
        <p>Strawberry Milk</p>
        <p>Chocolate Milk</p>
        <p>Banana Milk</p>
      </div>
    </>
  );
}
