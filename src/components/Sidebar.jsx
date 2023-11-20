import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/" className={styles.sidebarLogo}>
        <img src="/logo.png" alt="Waypoint logo" className={styles.logo} />
        <p className={styles.logoText}>Waypoint</p>
      </Link>
      <AppNav />
      <Outlet />
    </div>
  );
}
