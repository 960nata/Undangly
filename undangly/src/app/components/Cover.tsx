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
      <div className={styles.flowerTopLeft} />
      <div className={styles.flowerBottomRight} />
      
      <div className={styles.content}>
        <span className={styles.subtitle}>THE WEDDING OF</span>
        <h1 className={styles.coupleName}>Kila &amp; Arnold</h1>
        
        <div className={styles.floralDivider}>
          <i className="fas fa-heart"></i>
        </div>
        
        <p className={styles.date}>22 . 02 . 2027</p>
        
        <div className={styles.toBox}>
          <p className={styles.toLabel}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h3 className={styles.guestName}>{guestName}</h3>
          <p className={styles.inviteNote}>*Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda</p>
        </div>
        
        <button onClick={handleOpen} className={styles.btnOpen}>
          <i className="fas fa-envelope-open-text"></i> BUKA UNDANGAN
        </button>
      </div>
    </section>
  );
}
