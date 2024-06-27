import React, { useState } from "react";
import styles from "../components/navbar.module.css";
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0b12b3e7f846a8801a1d24ba284e390ac2b9ea3acb7ca868b941ffbbf65945?apiKey=2f2eb34cd53e4191a5ea7a2743444e09&"
            className={styles.img}
            alt="Logo"
          />
        </div>
        <div className={styles.navMenu}>
          <div className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemText}>Find designers</div>
            <FiChevronDown className={styles.icon} />
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemText}>Inspiration</div>
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemText}>Courses</div>
            <FiChevronDown className={styles.icon} />
          </div>
          <div className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemText}>Jobs</div>
            <div className={styles.menuItemText}>Go Pro</div>
          </div>
        </div>
        <div className={styles.navActions}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <button className={styles.loginButton}>Log in</button>
          <button className={styles.signupButton}>Sign up</button>
        </div>
        <div className={styles.hamburgerMenu} onClick={handleMenuToggle}>
          <div className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`} />
          <div className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`} />
          <div className={`${styles.hamburgerLine} ${menuOpen ? styles.open : ""}`} />
        </div>
      </div>
      {/* Responsive Menu */}
      {menuOpen && (
        <div className={styles.responsiveMenu}>
          <div className={styles.responsiveMenuItem} onClick={closeMenu}>Find designers</div>
          <div className={styles.responsiveMenuItem} onClick={closeMenu}>Inspiration</div>
          <div className={styles.responsiveMenuItem} onClick={closeMenu}>Courses</div>
          <div className={styles.responsiveMenuItem} onClick={closeMenu}>Jobs</div>
          <div className={styles.responsiveMenuItem} onClick={closeMenu}>Go Pro</div>
          <input
            type="text"
            placeholder="Search..."
            className={styles.responsiveSearchInput}
          />
          <button className={styles.responsiveLoginButton}>Log in</button>
          <button className={styles.responsiveSignupButton}>Sign up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
