"use client";

import Navbar from "../components/Navbar";
import MarketingFooter from "../components/MarketingFooter";
import styles from "./page.module.css";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.headerSection}>
            <h1 className={styles.title}>Layanan Kami</h1>
            <div className="floral-divider">
              <i className="fa-solid fa-gem"></i>
            </div>
            <p className={styles.description}>
              Kami menyediakan berbagai layanan digital untuk melengkapi hari istimewa Anda. Pilih layanan yang paling sesuai dengan kebutuhan perayaan Anda.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Service 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h2 className={styles.serviceTitle}>Website Undangan</h2>
              <p className={styles.serviceDesc}>
                Layanan utama kami. Buat undangan digital berbasis website yang elegan, interaktif, dan mudah dibagikan ke semua tamu Anda.
              </p>
              <ul className={styles.serviceFeatures}>
                <li><i className="fa-solid fa-check"></i> 50+ Pilihan Tema Premium</li>
                <li><i className="fa-solid fa-check"></i> RSVP & Buku Tamu Real-time</li>
                <li><i className="fa-solid fa-check"></i> Galeri Foto & Musik Latar</li>
                <li><i className="fa-solid fa-check"></i> Navigasi Google Maps</li>
              </ul>
              <Link href="/templates" className={styles.btnPrimary}>
                Lihat Tema <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </Link>
            </div>

            {/* Service 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <h2 className={styles.serviceTitle}>Jasa Terima Beres</h2>
              <p className={styles.serviceDesc}>
                Tidak ada waktu untuk mengatur undangan? Tim kami siap membantu membuatkan dan memasukkan semua data undangan Anda dari awal hingga siap sebar.
              </p>
              <ul className={styles.serviceFeatures}>
                <li><i className="fa-solid fa-check"></i> Dikerjakan oleh Tim Profesional</li>
                <li><i className="fa-solid fa-check"></i> Proses Cepat (1-2 Hari Kerja)</li>
                <li><i className="fa-solid fa-check"></i> Bantuan Penulisan Ejaan & Gelar</li>
                <li><i className="fa-solid fa-check"></i> Support Prioritas via WA</li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=628123456789" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                Konsultasi Gratis
              </a>
            </div>

            {/* Service 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <h2 className={styles.serviceTitle}>Custom Desain Eksklusif</h2>
              <p className={styles.serviceDesc}>
                Ingin undangan yang 100% berbeda dari yang lain? Kami bisa membuatkan desain website undangan khusus yang disesuaikan persis dengan tema pernikahan Anda.
              </p>
              <ul className={styles.serviceFeatures}>
                <li><i className="fa-solid fa-check"></i> Desain UI/UX Eksklusif</li>
                <li><i className="fa-solid fa-check"></i> Animasi Custom</li>
                <li><i className="fa-solid fa-check"></i> Request Fitur Khusus</li>
                <li><i className="fa-solid fa-check"></i> Revisi Tanpa Batas</li>
              </ul>
              <a href="https://api.whatsapp.com/send?phone=628123456789" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                Hubungi Desainer
              </a>
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
