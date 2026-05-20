"use client";

import { useState } from "react";
import styles from "./Gift.module.css";

export default function Gift() {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const handleCopy = (text: string, bankName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bankName);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  return (
    <section id="gift" className={`${styles.gift} reveal`}>
      <div className={styles.container}>
        <div className={styles.introHeader}>
          <span className={styles.introSubtitle}>KADO DIGITAL</span>
          <h2 className={styles.introTitle}>Hadiah Pernikahan</h2>
          <p className={styles.introText}>
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih secara digital, Anda dapat mengirimkannya melalui:
          </p>
        </div>

        <div className={styles.giftGrid}>
          {/* Bank Account 1 */}
          <div className={styles.giftCard}>
            <div className={styles.bankLogo}>BCA</div>
            <div className={styles.cardDetails}>
              <span className={styles.label}>Nomor Rekening</span>
              <div className={styles.accountRow}>
                <span className={styles.accountNumber}>1234567890</span>
                <button
                  onClick={() => handleCopy("1234567890", "BCA")}
                  className={styles.copyBtn}
                >
                  {copiedBank === "BCA" ? "Tersalin!" : "Salin"}
                </button>
              </div>
              <span className={styles.label}>Atas Nama</span>
              <span className={styles.accountName}>Kila Putri Wardhana</span>
            </div>
          </div>

          {/* Bank Account 2 */}
          <div className={styles.giftCard}>
            <div className={styles.bankLogo}>MANDIRI</div>
            <div className={styles.cardDetails}>
              <span className={styles.label}>Nomor Rekening</span>
              <div className={styles.accountRow}>
                <span className={styles.accountNumber}>9876543210</span>
                <button
                  onClick={() => handleCopy("9876543210", "Mandiri")}
                  className={styles.copyBtn}
                >
                  {copiedBank === "Mandiri" ? "Tersalin!" : "Salin"}
                </button>
              </div>
              <span className={styles.label}>Atas Nama</span>
              <span className={styles.accountName}>Arnold Christian</span>
            </div>
          </div>
        </div>

        <div className={styles.addressSection}>
          <div className={styles.addressIcon}>
            <i className="fas fa-home"></i>
          </div>
          <h3 className={styles.addressTitle}>Kirim Kado Fisik</h3>
          <p className={styles.addressText}>
            Komplek Perumahan Indah, Blok A5 No. 12, Kebayoran Baru, Jakarta Selatan, 12110
          </p>
          <button
            onClick={() => handleCopy("Komplek Perumahan Indah, Blok A5 No. 12, Kebayoran Baru, Jakarta Selatan, 12110", "Alamat")}
            className={styles.copyAddressBtn}
          >
            {copiedBank === "Alamat" ? "Alamat Tersalin!" : "Salin Alamat Pengiriman"}
          </button>
        </div>
      </div>
    </section>
  );
}
