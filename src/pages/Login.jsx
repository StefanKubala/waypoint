import Navbar from "../components/Navbar";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <main className={styles.login}>
      <Navbar />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div>
          <button className={styles.btnLogin}>Login</button>
        </div>
      </form>
    </main>
  );
}
