import { useState } from "react";
import styles from "./Cookie.module.css";

function DropCookie() {
  const [left, setLeft] = useState(Math.random() * 90);

  const handleAnimationEnd = () => {
    setLeft(Math.random() * 90);
  };

  return (
    <img
      className={styles.cookieFalling}
      src="/cookie.png"
      style={{ left: `${left}vw` }}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}
