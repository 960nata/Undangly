"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./admin.module.css";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={styles.adminWrapper}>
      {/* Admin Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
          <Link href="/">
            <span className={styles.logoText}>Undangly</span>
            <span className={styles.logoBadge}>ADMIN</span>
          </Link>
        </div>

        <nav className={styles.sidebarNav}>
          <div className={styles.navGroup}>
            <span className={styles.navLabel}>MENU UTAMA</span>
            <Link href="/admin" className={`${styles.navItem} ${pathname === "/admin" ? styles.navActive : ""}`}>
              <i className="fa-solid fa-chart-line"></i> Ikhtisar Bisnis
            </Link>
            <Link href="/admin/clients" className={`${styles.navItem} ${pathname.includes("/admin/clients") ? styles.navActive : ""}`}>
              <i className="fa-solid fa-users-gear"></i> Daftar Klien
            </Link>
            <Link href="/admin/orders" className={`${styles.navItem} ${pathname.includes("/admin/orders") ? styles.navActive : ""}`}>
              <i className="fa-solid fa-file-invoice-dollar"></i> Transaksi
            </Link>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>SISTEM</span>
            <Link href="/admin/templates" className={`${styles.navItem} ${pathname.includes("/admin/templates") ? styles.navActive : ""}`}>
              <i className="fa-solid fa-layer-group"></i> Kelola Template
            </Link>
            <Link href="/admin/settings" className={`${styles.navItem} ${pathname.includes("/admin/settings") ? styles.navActive : ""}`}>
              <i className="fa-solid fa-sliders"></i> Pengaturan Web
            </Link>
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.adminProfile}>
            <div className={styles.adminAvatar}>
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <div className={styles.adminInfo}>
              <p className={styles.adminName}>Super Admin</p>
              <p className={styles.adminRole}>Owner</p>
            </div>
          </div>
          <button className={styles.logoutBtn}>
            <i className="fa-solid fa-power-off"></i>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.topHeader}>
          <div className={styles.headerSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Cari klien, invoice, atau template..." />
          </div>
          <div className={styles.headerActions}>
            <button className={styles.actionBtn}>
              <i className="fa-regular fa-bell"></i>
              <span className={styles.badge}>5</span>
            </button>
            <a href="/" target="_blank" className={styles.viewSiteBtn}>
              Lihat Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </header>

        <div className={styles.contentArea}>
          {children}
        </div>
      </main>
    </div>
  );
}
