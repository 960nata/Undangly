"use client";

import Link from "next/link";
import styles from "./MarketingFooter.module.css";

export default function MarketingFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              Undangly<span>.</span>
            </Link>
            <p className={styles.tagline}>
              Mewujudkan undangan pernikahan digital premium, elegan, dan romantis untuk hari istimewa Anda.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">IG</a>
              <a href="#" className={styles.socialIcon} aria-label="TikTok">TT</a>
              <a href="#" className={styles.socialIcon} aria-label="WhatsApp">WA</a>
            </div>
          </div>

          {/* Links 1 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Layanan</h4>
            <ul className={styles.linksList}>
              <li><Link href="/templates">Katalog Tema</Link></li>
              <li><Link href="/pricing">Daftar Harga</Link></li>
              <li><a href="#">Fitur Premium</a></li>
              <li><a href="#">Custom Domain</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Bantuan</h4>
            <ul className={styles.linksList}>
              <li><Link href="/faq">FAQ</Link></li>
              <li><a href="#">Hubungi Kami</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Syarat &amp; Ketentuan</a></li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Undangly. All rights reserved.
          </p>
          <p className={styles.craftedBy}>
            Crafted with <span style={{ color: "var(--accent)" }}>♥</span> in Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
