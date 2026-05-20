"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.thankYou}>TERIMA KASIH</span>
        <h2 className={styles.names}>Kila &amp; Arnold</h2>
        <p className={styles.text}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami berdua.
        </p>
        
        <hr className={styles.divider} />
        
        <div className={styles.creditBlock}>
          <p className={styles.creditText}>
            © 2027 Kila &amp; Arnold. All Rights Reserved.
          </p>
          <p className={styles.undanglyCredit}>
            Created with <i className="fas fa-heart text-red-500"></i> by <span className={styles.brand}>Undangly</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
