"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isLinkActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Undangly<span>.</span>
        </Link>

        <nav className={styles.nav}>
          <Link 
            href="/templates" 
            className={`${styles.navLink} ${isLinkActive("/templates") ? styles.active : ""}`}
          >
            Templates
          </Link>
          <Link 
            href="/services" 
            className={`${styles.navLink} ${isLinkActive("/services") ? styles.active : ""}`}
          >
            Layanan
          </Link>
          <Link 
            href="/pricing" 
            className={`${styles.navLink} ${isLinkActive("/pricing") ? styles.active : ""}`}
          >
            Harga
          </Link>
          <Link 
            href="/faq" 
            className={`${styles.navLink} ${isLinkActive("/faq") ? styles.active : ""}`}
          >
            FAQ
          </Link>
        </nav>

        <div className={styles.actions}>
          <a 
            href="https://api.whatsapp.com/send?phone=628123456789&text=Halo%20Undangly,%20saya%20tertarik%20untuk%20membuat%20undangan%20digital%20premium." 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Buat Undangan
          </a>
        </div>
      </div>
    </header>
  );
}
