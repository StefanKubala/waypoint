import Navbar from "../components/Navbar";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <main className={styles.pricing}>
      <Navbar />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          className={styles.imgPricing}
          src="pricing.jpeg"
          alt="overview of a large city with skyscrapers"
        />
      </section>
    </main>
  );
}
