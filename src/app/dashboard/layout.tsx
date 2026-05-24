"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./dashboard.module.css";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={styles.dashboardWrapper}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <Link href="/">
            <span className={styles.logoText}>Undangly</span>
            <span className={styles.logoDot}>.</span>
          </Link>
        </div>

        <nav className={styles.sidebarNav}>
          <Link href="/dashboard" className={`${styles.navItem} ${pathname === "/dashboard" ? styles.navActive : ""}`}>
            <i className="fa-solid fa-chart-pie"></i> Ringkasan
          </Link>
          <Link href="/dashboard/buat-undangan" className={`${styles.navItem} ${pathname.includes("/buat-undangan") ? styles.navActive : ""}`}>
            <i className="fa-solid fa-wand-magic-sparkles"></i> Buat Undangan
          </Link>
          <Link href="/dashboard/tamu" className={`${styles.navItem} ${pathname === "/dashboard/tamu" ? styles.navActive : ""}`}>
            <i className="fa-solid fa-users"></i> Daftar Tamu
          </Link>
          <Link href="/dashboard/pengaturan" className={`${styles.navItem} ${pathname === "/dashboard/pengaturan" ? styles.navActive : ""}`}>
            <i className="fa-solid fa-gear"></i> Pengaturan
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.logoutBtn}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Keluar
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.topHeader}>
          <div className={styles.headerTitle}>
            <h2>{pathname.includes("/buat-undangan") ? "Buat Undangan Baru" : "Dashboard"}</h2>
            <p>Selamat datang kembali, Pasangan Berbahagia!</p>
          </div>
          <div className={styles.headerProfile}>
            <div className={styles.notificationIcon}>
              <i className="fa-regular fa-bell"></i>
              <span className={styles.badge}>2</span>
            </div>
            <div className={styles.avatar}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" alt="Profile" />
            </div>
          </div>
        </header>

        <div className={styles.contentArea}>
          {children}
        </div>
      </main>
    </div>
  );
}
