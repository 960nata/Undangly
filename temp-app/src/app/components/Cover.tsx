"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Cover.module.css";

interface CoverProps {
  onOpen: () => void;
}

export default function Cover({ onOpen }: CoverProps) {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const to = searchParams.get("to");
    if (to) {
      setGuestName(to);
    }
  }, [searchParams]);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(() => {
      onOpen();
    }, 1000); // Match animation duration
  };

  return (
    <section className={`${styles.cover} ${isClosing ? styles.slideUp : ""}`}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.subtitle}>THE WEDDING OF</span>
        <h1 className={styles.coupleName}>Kila & Arnold</h1>
        <p className={styles.date}>22 . 02 . 2025</p>
        
        <div className={styles.toBox}>
          <p className={styles.toLabel}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h3 className={styles.guestName}>{guestName}</h3>
        </div>
        
        <button onClick={handleOpen} className={styles.btnOpen}>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5"
            />
          </svg>
          BUKA UNDANGAN
        </button>
      </div>
    </section>
  );
}
