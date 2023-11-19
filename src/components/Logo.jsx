import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logoContainer}>
      <img src="/logo.png" alt="Waypoint logo" className={styles.logo} />
      <p>Waypoint</p>
    </Link>
  );
}
