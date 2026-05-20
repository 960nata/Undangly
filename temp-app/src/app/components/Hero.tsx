"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: February 22, 2027
    const targetDate = new Date("2027-02-22T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.content}>
        <span className={styles.greeting}>WALK WITH US IN LOVE</span>
        <h1 className={styles.title}>Kila & Arnold</h1>
        <p className={styles.subtitle}>Kami mengundang Anda untuk merayakan pernikahan kami</p>
        
        <div className={styles.countdownContainer}>
          <div className={styles.countdownBox}>
            <span className={styles.number}>{timeLeft.days}</span>
            <span className={styles.label}>Hari</span>
          </div>
          <div className={styles.countdownBox}>
            <span className={styles.number}>{timeLeft.hours}</span>
            <span className={styles.label}>Jam</span>
          </div>
          <div className={styles.countdownBox}>
            <span className={styles.number}>{timeLeft.minutes}</span>
            <span className={styles.label}>Menit</span>
          </div>
          <div className={styles.countdownBox}>
            <span className={styles.number}>{timeLeft.seconds}</span>
            <span className={styles.label}>Detik</span>
          </div>
        </div>

        <div className={styles.scrollDown}>
          <span className={styles.scrollText}>GULIR KE BAWAH</span>
          <div className={styles.arrowIcon}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
