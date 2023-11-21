import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className={styles.backBtn}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </button>
  );
}
