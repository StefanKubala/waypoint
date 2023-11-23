import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageNotFound}>
      <Navbar />
      <div>
        <h1>The page you’re looking for can’t be found.</h1>
        <button className={styles.notFoundBtn} onClick={() => navigate("/")}>
          Back to homepage
        </button>
      </div>
    </div>
  );
}
