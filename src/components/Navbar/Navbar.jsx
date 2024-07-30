import { useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import logo from "../../../assets/nav/logow.png";
import menu from "../../../assets/nav/menu.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 6) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      role="navigation"
    >
      <div className={styles.container}>
        <div className={styles.navbarHeader}>
          <a className={styles.navbarBrand} href="#">
            <img src={logo} height={20} width={30} alt="SOWMYA AYILAM S" />
            SOWMYA AYILAM S
          </a>
          <button className={styles.navbarToggle} onClick={toggleMenu}>
            <img src={menu} height={24} width={24} alt="menu icon" />
          </button>
        </div>
        <div
          className={`${styles.collapse} ${
            menuOpen ? styles.navbarMainCollapseOpen : ""
          }`}
        >
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <a href="#about" onClick={closeMenu}>
                {" "}
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#blogs" onClick={closeMenu}>
                Blogs
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
