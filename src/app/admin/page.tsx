import Link from "next/link";
import styles from "./admin.module.css";

export default function AdminOverview() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Ikhtisar Bisnis</h1>
        <p>Ringkasan performa platform Undangly hari ini.</p>
      </div>

      {/* KPI Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statTitle}>Total Pendapatan</div>
            <div className={`${styles.statIcon} ${styles.iconGreen}`}>
              <i className="fa-solid fa-rupiah-sign"></i>
            </div>
          </div>
          <div className={styles.statValue}>Rp 4.5M</div>
          <div className={`${styles.statTrend} ${styles.trendUp}`}>
            <i className="fa-solid fa-arrow-trend-up"></i> +12.5% bulan ini
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statTitle}>Klien Aktif</div>
            <div className={`${styles.statIcon} ${styles.iconBlue}`}>
              <i className="fa-solid fa-users"></i>
            </div>
          </div>
          <div className={styles.statValue}>124</div>
          <div className={`${styles.statTrend} ${styles.trendUp}`}>
            <i className="fa-solid fa-arrow-trend-up"></i> +8 klien baru
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statTitle}>Undangan Live</div>
            <div className={`${styles.statIcon} ${styles.iconPurple}`}>
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>
          <div className={styles.statValue}>89</div>
          <div className={`${styles.statTrend} ${styles.trendUp}`}>
            <i className="fa-solid fa-arrow-trend-up"></i> +15 terpublikasi
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statTitle}>Pending Payment</div>
            <div className={`${styles.statIcon} ${styles.iconOrange}`}>
              <i className="fa-regular fa-clock"></i>
            </div>
          </div>
          <div className={styles.statValue}>12</div>
          <div className={`${styles.statTrend} ${styles.trendDown}`}>
            <i className="fa-solid fa-arrow-trend-down"></i> -3 dari kemarin
          </div>
        </div>
      </div>

      {/* Tables Area */}
      <div className={styles.tablesGrid}>
        {/* Klien Terbaru */}
        <div className={styles.tableCard}>
          <div className={styles.cardHeader}>
            <h3>Pendaftaran Terbaru</h3>
            <Link href="/admin/clients" className={styles.viewAllBtn}>Lihat Semua</Link>
          </div>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Klien</th>
                <th>Paket / Tema</th>
                <th>Tanggal</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.clientInfo}>
                    <div className={styles.clientAvatar}>DA</div>
                    <span>Dimas & Ayu</span>
                  </div>
                </td>
                <td>Dusty Rose</td>
                <td>Hari ini, 09:41</td>
                <td><span className={`${styles.statusBadge} ${styles.statusActive}`}>Lunas</span></td>
              </tr>
              <tr>
                <td>
                  <div className={styles.clientInfo}>
                    <div className={styles.clientAvatar}>RK</div>
                    <span>Rizky & Kanya</span>
                  </div>
                </td>
                <td>Midnight Minimalist</td>
                <td>Kemarin, 14:20</td>
                <td><span className={`${styles.statusBadge} ${styles.statusPending}`}>Menunggu</span></td>
              </tr>
              <tr>
                <td>
                  <div className={styles.clientInfo}>
                    <div className={styles.clientAvatar}>BP</div>
                    <span>Bima & Putri</span>
                  </div>
                </td>
                <td>Sweet Sakura</td>
                <td>22 Mei 2026</td>
                <td><span className={`${styles.statusBadge} ${styles.statusActive}`}>Lunas</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Aktivitas Terkini */}
        <div className={styles.tableCard}>
          <div className={styles.cardHeader}>
            <h3>Log Aktivitas</h3>
          </div>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <i className="fa-solid fa-check"></i>
              </div>
              <div className={styles.activityDetails}>
                <h4>Undangan Dimas & Ayu dipublikasi</h4>
                <p>Baru saja</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <i className="fa-solid fa-money-bill-wave"></i>
              </div>
              <div className={styles.activityDetails}>
                <h4>Pembayaran diterima Rp 150.000</h4>
                <p>1 Jam yang lalu via QRIS</p>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <i className="fa-regular fa-user"></i>
              </div>
              <div className={styles.activityDetails}>
                <h4>User baru mendaftar (Bima)</h4>
                <p>2 Jam yang lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
