import * as React from "react";
import styles from '../components/hero.module.css'

export function Hero() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.div2}>Witt - Personal Organizer Web Design</div>
        <div className={styles.container1}>
    <div className={styles.profileSection}>
      <div className={styles.profileInfo}>
        <img src="../images/profile.png" className={styles.profileImage} alt="Profile" />
        <div className={styles.profileDetails}>
          <h2 className={styles.profileName}>Shivam Rai</h2>
          <div className={styles.profileStatus}>
            <div className={styles.statusIndicator}>
              <div className={styles.statusDot} />
            </div>
            <span className={styles.statusText}>Available for work</span>
            <button className={styles.followButton}>Follow</button>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d035fd6acc479e3b886c04af0b7d16a628776465b1c4b083c116804859f8a3d4?apiKey=2f2eb34cd53e4191a5ea7a2743444e09&" className={styles.actionIcon} alt="Action 1" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8bb0d84eee9188cdf50cfd2ec9bc0689d725595dbd66199f026ff1358cbd25?apiKey=2f2eb34cd53e4191a5ea7a2743444e09&" className={styles.actionIcon} alt="Action 2" />
        <button className={styles.contactButton}>Get in touch</button>
      </div>
    </div>
  </div>
    <div className={styles.container}>
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <img src="../images/mainpic.png" alt="Main" className={styles.mainImage} />
        <h1 className={styles.title}>Hola Designers :)</h1>
        <p className={styles.description}>
          Concept Design for a personal organizer and a tracker for all your work (kinda like Notion :p )
        </p>
        <p className={styles.subDescription}>
          Designed this as a 30-minute UI design challenge. Feel free to share your thoughts 🤘😁
        </p>
        <div className={styles.contact}>
          <span>Reach out at </span>
          <span className={styles.website}>shivamrai.xyz</span>
        </div>
      </div>

      <div className={styles.profileSection}>
        <hr className={styles.divider} />
        <div className={styles.profile}>
          <img src="../images/profile.png" alt="Profile" className={styles.profileImage} />
          <h2 className={styles.profileName}>Shivam Rai</h2>
        </div>
        <hr className={styles.divider} />
      </div>

      <button className={styles.contactButton}>Get in touch</button>

      <div className={styles.moreSection}>
        <h3 className={styles.moreTitle}>More by Shivam Rai</h3>
        <span className={styles.viewProfile}>View profile</span>
      </div>

      <div className={styles.gallery}>
        <img src="../images/pic1.png" alt="Work 1" className={styles.galleryImage} />
        <img src="../images/pic2.png" alt="Work 2" className={styles.galleryImage} />
        <img src="../images/pic3.png" alt="Work 3" className={styles.galleryImage} />
        <img src="../images/pic4.png" alt="Work 4" className={styles.galleryImage} />
    </div>
    </div>

    <div className={styles.sidebar}>
      <img src="../images/not1.png" alt="Icon 1" className={styles.icon} />
      <img src="../images/not2.png" alt="Icon 2" className={styles.icon} />
      <img src="../images/not3.png" alt="Icon 3" className={styles.icon} />
    </div>
  </div>
      </div>

    </>
  );
}

