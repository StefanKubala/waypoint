import { Link } from "react-router-dom";
import styles from "./MobileLogo.module.css";

export default function MobileLogo() {
  return (
    <Link to="/" className={styles.logoContainer}>
      <img src="/logo.png" alt="Waypoint logo" className={styles.logo} />
    </Link>
  );
}
