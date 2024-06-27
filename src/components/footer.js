import React from 'react';
import styles from '../components/footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footercontainer}>
      <div className={styles.footermain}>
        <img
          src="../images/logo.png"
          alt="Logo"
          className={styles.footerlogo}
        />
        <nav className={styles.footernav}>
          <a href="#" className={styles.navitem}>For designers</a>
          <a href="#" className={styles.navitem}>Hire talent</a>
          <a href="#" className={styles.navitem}>Inspiration</a>
          <a href="#" className={styles.navitem}>Advertising</a>
          <a href="#" className={styles.navitem}>Blog</a>
          <a href="#" className={styles.navitem}>About</a>
          <a href="#" className={styles.navitem}>Careers</a>
          <a href="#" className={styles.navitem}>Support</a>
        </nav>
        <div className={styles.socialicons}>
          <img src="../images/twitter.png" alt="Social 1" className="social-icon" />
          <img src="../images/facebook.png" alt="Social 2" className="social-icon" />
          <img src="../images/insta.png" alt="Social 3" className="social-icon" />
          <img src="../images/print.png" alt="Social 4" className="social-icon" />
        </div>
      </div>
      <div className={styles.footerbottom}>
        <div className={styles.footerlegal}>
          <span>© 2024 Dribbble</span>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
        <div className={styles.footerlinks}>
          <a href="#">Jobs</a>
          <a href="#">Designers</a>
          <a href="#">Freelancers</a>
          <a href="#">Tags</a>
          <a href="#">Places</a>
          <a href="#">Resources</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;