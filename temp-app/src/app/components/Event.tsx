"use client";

import styles from "./Event.module.css";

export default function Event() {
  const handleOpenMap = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="event" className={`${styles.event} reveal`}>
      <div className={styles.container}>
        <div className={styles.introHeader}>
          <span className={styles.introSubtitle}>ACARA PERNIKAHAN</span>
          <h2 className={styles.introTitle}>Waktu & Tempat</h2>
          <p className={styles.introText}>
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud untuk menyelenggarakan acara pernikahan kami pada:
          </p>
        </div>

        <div className={styles.eventGrid}>
          {/* Akad Nikah */}
          <div className={styles.eventCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <i className="fas fa-church"></i>
              </div>
              <h3 className={styles.eventTitle}>Pemberkatan / Akad Nikah</h3>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.dateTimeRow}>
                <div className={styles.dateTimeCol}>
                  <span className={styles.label}>Hari / Tanggal</span>
                  <span className={styles.value}>Minggu, 22 Februari 2027</span>
                </div>
                <div className={styles.dateTimeCol}>
                  <span className={styles.label}>Waktu</span>
                  <span className={styles.value}>08:00 - 10:00 WIB</span>
                </div>
              </div>

              <hr className={styles.divider} />

              <div className={styles.locationBlock}>
                <span className={styles.label}>Tempat</span>
                <span className={styles.venue}>Masjid Agung Al-Azhar</span>
                <span className={styles.address}>
                  Jl. Sisingamangaraja No.1, Selong, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12110
                </span>
              </div>
            </div>

            <button
              onClick={() => handleOpenMap("https://maps.app.goo.gl/uXyvT6f6Cq8jVzE27")}
              className={styles.mapBtn}
            >
              <i className="fas fa-map-marker-alt"></i> LIHAT LOKASI
            </button>
          </div>

          {/* Resepsi */}
          <div className={styles.eventCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <i className="fas fa-glass-cheers"></i>
              </div>
              <h3 className={styles.eventTitle}>Resepsi Pernikahan</h3>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.dateTimeRow}>
                <div className={styles.dateTimeCol}>
                  <span className={styles.label}>Hari / Tanggal</span>
                  <span className={styles.value}>Minggu, 22 Februari 2027</span>
                </div>
                <div className={styles.dateTimeCol}>
                  <span className={styles.label}>Waktu</span>
                  <span className={styles.value}>11:00 - 13:00 WIB</span>
                </div>
              </div>

              <hr className={styles.divider} />

              <div className={styles.locationBlock}>
                <span className={styles.label}>Tempat</span>
                <span className={styles.venue}>Grand Ballroom Hotel Mulia</span>
                <span className={styles.address}>
                  Jl. Asia Afrika No.6, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270
                </span>
              </div>
            </div>

            <button
              onClick={() => handleOpenMap("https://maps.app.goo.gl/bV3XjZ9e3hG6m9Vz5")}
              className={styles.mapBtn}
            >
              <i className="fas fa-map-marker-alt"></i> LIHAT LOKASI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
