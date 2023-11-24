/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { useState } from "react";
import MobileLogo from "./MobileLogo";

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  function handleClick() {
    setDisplayMenu((cur) => !cur);
  }

  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.mobile}>
        <MobileLogo />
        <div className={styles.headerBurger} onClick={handleClick}>
          <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#1D1C1E" fillRule="evenodd">
              <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"></path>
            </g>
          </svg>
        </div>
      </div>

      {displayMenu ? (
        <ul className={styles.headerMenu}>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
