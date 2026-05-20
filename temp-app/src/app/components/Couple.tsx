"use client";

import Image from "next/image";
import styles from "./Couple.module.css";

export default function Couple() {
  return (
    <section id="couple" className={`${styles.couple} reveal`}>
      <div className={styles.container}>
        <div className={styles.introHeader}>
          <span className={styles.introSubtitle}>MEMPELAI</span>
          <h2 className={styles.introTitle}>Mempelai Pria &amp; Wanita</h2>
          <p className={styles.introText}>
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami menikahkan putra-putri kami:
          </p>
        </div>

        <div className={styles.coupleGrid}>
          {/* Groom Block */}
          <div className={styles.coupleCard}>
            <div className={styles.imgWrapper}>
              <Image
                src="/assets/groom.png"
                alt="Arnold Christian"
                width={260}
                height={320}
                className={styles.profileImg}
                priority
              />
              <div className={styles.imgBorder} />
            </div>
            <h3 className={styles.coupleName}>Arnold Christian</h3>
            <p className={styles.birthOrder}>Putra Pertama</p>
            <p className={styles.parentage}>
              Dari pasangan <br />
              <strong>Bpk. Christian</strong> &amp; <strong>Ibu Maria</strong>
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              <i className="fab fa-instagram"></i> @arnold_c
            </a>
          </div>

          {/* Elegant Divider */}
          <div className={styles.divider}>
            <span>&amp;</span>
          </div>

          {/* Bride Block */}
          <div className={styles.coupleCard}>
            <div className={styles.imgWrapper}>
              <Image
                src="/assets/bride.png"
                alt="Kila Putri Wardhana"
                width={260}
                height={320}
                className={styles.profileImg}
                priority
              />
              <div className={styles.imgBorder} />
            </div>
            <h3 className={styles.coupleName}>Kila Putri Wardhana</h3>
            <p className={styles.birthOrder}>Putri Bungsu</p>
            <p className={styles.parentage}>
              Dari pasangan <br />
              <strong>Bpk. Wardhana</strong> &amp; <strong>Ibu Lastri</strong>
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              <i className="fab fa-instagram"></i> @kila_wardhana
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
