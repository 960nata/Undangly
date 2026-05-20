"use client";

import styles from "./Event.module.css";

export default function Event() {
  const handleOpenMap = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const calendarAkad = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Kila+%26+Arnold&dates=20270222T010000Z/20270222T030000Z&details=Selamat+datang+di+pernikahan+Kila+dan+Arnold&location=Masjid+Agung+Al-Azhar,+Jakarta";
  
  const calendarResepsi = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Kila+%26+Arnold&dates=20270222T040000Z/20270222T060000Z&details=Selamat+datang+di+pernikahan+Kila+dan+Arnold&location=Ballroom+Hotel+Mulia,+Jakarta";

  return (
    <section id="event" className={`${styles.event} reveal`}>
      <div className={styles.container}>
        <div className={styles.introHeader}>
          <span className={styles.introSubtitle}>ACARA PERNIKAHAN</span>
          <h2 className={styles.introTitle}>Waktu &amp; Tempat</h2>
          <p className={styles.introText}>
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud untuk menyelenggarakan acara pernikahan kami pada:
          </p>
        </div>

        <div className={styles.eventGrid}>
          {/* Akad Nikah */}
          <div className={styles.eventCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <i className="fas fa-heart"></i>
              </div>
              <h3 className={styles.eventTitle}>Akad Nikah / Pemberkatan</h3>
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
                  Jl. Sisingamangaraja No.1, Selong, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta 12110
                </span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <a
                href={calendarAkad}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.calendarBtn}
              >
                <i className="far fa-calendar-alt"></i> SIMPAN KE KALENDER
              </a>
              
              <button
                onClick={() => handleOpenMap("https://maps.app.goo.gl/uXyvT6f6Cq8jVzE27")}
                className={styles.mapBtn}
              >
                <i className="fas fa-map-marked-alt"></i> BUKA GOOGLE MAPS
              </button>
            </div>
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
                  Jl. Asia Afrika No.6, Gelora, Kec. Tanah Abang, Kota Jakarta Pusat, DKI Jakarta 10270
                </span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <a
                href={calendarResepsi}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.calendarBtn}
              >
                <i className="far fa-calendar-alt"></i> SIMPAN KE KALENDER
              </a>
              
              <button
                onClick={() => handleOpenMap("https://maps.app.goo.gl/bV3XjZ9e3hG6m9Vz5")}
                className={styles.mapBtn}
              >
                <i className="fas fa-map-marked-alt"></i> BUKA GOOGLE MAPS
              </button>
            </div>
          </div>
        </div>

        {/* Sec 6: Google Maps Embed (Mandatory) */}
        <div className={styles.mapsEmbedContainer}>
          <h3 className={styles.embedTitle}>Peta Lokasi Pernikahan</h3>
          <div className={styles.mapsGrid}>
            <div className={styles.mapWrapper}>
              <span className={styles.mapLabel}>Masjid Agung Al-Azhar (Akad)</span>
              <iframe
                title="Google Maps Al-Azhar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2731175653456!2d106.79796067455866!3d-6.227670760986927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e3dbb9087%3A0x6b2b516cd7ca623c!2sMasjid%20Agung%20Al-Azhar!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={styles.mapWrapper}>
              <span className={styles.mapLabel}>Hotel Mulia Senayan (Resepsi)</span>
              <iframe
                title="Google Maps Hotel Mulia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.304523315664!2d106.79743437455853!3d-6.223522260950346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1484b3cdcb9%3A0x1d58af85ee66c8b!2sHotel%20Mulia%20Ballroom!5e0!3m2!1sid!2sid!4v1700000000001!5m2!1sid!2sid"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: "16px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
