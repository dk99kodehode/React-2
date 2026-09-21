import WaveImage from "./CookieAssets/Wave.png";
import styles from "./Cookie.module.css";

export default function Wave() {
  return (
    <div
      className={styles.wave}
      style={{ backgroundImage: `url(${WaveImage})` }}
    />
  );
}
