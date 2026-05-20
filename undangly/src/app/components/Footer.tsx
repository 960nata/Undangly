"use client";

import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [shareName, setShareName] = useState("");
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const handleShare = () => {
    if (!shareName.trim()) return;
    
    const invitationUrl = `${origin}?to=${encodeURIComponent(shareName.trim())}`;
    const message = `Kepada Yth. *${shareName.trim()}*\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami (Kila & Arnold).\n\nBerikut link undangan digital kami:\n${invitationUrl}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\nTerima kasih,\n*Kila & Arnold*`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className={`${styles.footer} reveal`}>
      <div className={styles.container}>
        {/* Pre-wed Closing Image Frame */}
        <div className={styles.imageFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" 
            alt="Kila &amp; Arnold" 
            className={styles.closingImage}
          />
          <div className={styles.imageOverlay} />
        </div>

        <span className={styles.thankYou}>TERIMA KASIH</span>
        <h2 className={styles.names}>Kila &amp; Arnold</h2>
        
        <p className={styles.text}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami berdua.
        </p>

        {/* WhatsApp Share Card */}
        <div className={styles.shareCard}>
          <h3 className={styles.shareTitle}>Bagikan Undangan</h3>
          <p className={styles.shareSubtitle}>Buat link undangan khusus untuk kerabat &amp; teman Anda:</p>
          <div className={styles.shareForm}>
            <input
              type="text"
              value={shareName}
              onChange={(e) => setShareName(e.target.value)}
              placeholder="Nama Tamu (misal: Budi Santoso)"
              className={styles.shareInput}
            />
            <button 
              onClick={handleShare}
              disabled={!shareName.trim()}
              className={styles.shareBtn}
            >
              Bagikan ke WhatsApp
            </button>
          </div>
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.creditBlock}>
          <p className={styles.creditText}>
            © 2027 Kila &amp; Arnold. All Rights Reserved.
          </p>
          <p className={styles.undanglyCredit}>
            Created with <span style={{ color: "var(--accent)" }}>♥</span> by <span className={styles.brand}>Undangly</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
