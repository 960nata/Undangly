"use client";

import Link from "next/link";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <>
      <div className={styles.overviewGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconRose}`}>
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className={styles.statInfo}>
            <h4>Undangan Aktif</h4>
            <p>0</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconBlue}`}>
            <i className="fa-solid fa-eye"></i>
          </div>
          <div className={styles.statInfo}>
            <h4>Total Pengunjung</h4>
            <p>0</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.iconGreen}`}>
            <i className="fa-solid fa-envelope-open-text"></i>
          </div>
          <div className={styles.statInfo}>
            <h4>RSVP Masuk</h4>
            <p>0</p>
          </div>
        </div>
      </div>

      <div className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h3>Undangan Terakhir</h3>
          <Link href="/dashboard/buat-undangan" className={styles.viewAll}>Lihat Semua</Link>
        </div>
        
        <div className={styles.emptyState}>
          <i className="fa-regular fa-folder-open"></i>
          <h4>Belum ada undangan</h4>
          <p>Mulai bagikan momen kebahagiaan Anda dengan membuat undangan digital pertama.</p>
          <Link href="/dashboard/buat-undangan" className={styles.btnEmpty}>
            <i className="fa-solid fa-plus"></i> Buat Undangan Sekarang
          </Link>
        </div>
      </div>
    </>
  );
}
