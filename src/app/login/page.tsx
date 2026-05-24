"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Simulate login delay, then redirect to the form
      setTimeout(() => {
        router.push("/dashboard/buat-undangan");
      }, 1500);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.splitLeft}>
        <div className={styles.imageOverlay}>
          <div className={styles.quoteBox}>
            <p>"Cinta tidak berupa tatapan satu sama lain, tetapi memandang ke luar bersama ke arah yang sama."</p>
            <span>— Antoine de Saint-Exupéry</span>
          </div>
        </div>
      </div>
      
      <div className={styles.splitRight}>
        <div className={styles.loginContainer}>
          <div className={styles.brand}>
            <Link href="/">
              Undangly<span className={styles.dot}>.</span>
            </Link>
          </div>
          
          <div className={styles.loginHeader}>
            <h1>Mulai Perjalanan Anda</h1>
            <p>Masukkan email Anda untuk masuk atau mendaftar. Kami akan mengirimkan tautan ajaib tanpa perlu kata sandi.</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.inputField} 
                  placeholder=" " 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email" className={styles.inputLabel}>Alamat Email</label>
              </div>
              
              <button type="submit" className={styles.btnSubmit}>
                Lanjutkan <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          ) : (
            <div className={styles.successState}>
              <div className={styles.successIcon}>
                <i className="fa-regular fa-envelope-open"></i>
              </div>
              <h3>Periksa Email Anda</h3>
              <p>Kami telah mengirimkan tautan masuk ke <strong>{email}</strong>. Tunggu sebentar, Anda akan dialihkan...</p>
              <div className={styles.loader}></div>
            </div>
          )}
          
          <div className={styles.footerInfo}>
            <p>Dengan melanjutkan, Anda menyetujui <a href="#">Syarat Ketentuan</a> dan <a href="#">Kebijakan Privasi</a> kami.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
