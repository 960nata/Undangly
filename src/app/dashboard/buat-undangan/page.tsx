"use client";

import { useState } from "react";
import styles from "./form.module.css";

export default function BuatUndanganPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className={styles.formContainer}>
      <div className={styles.stepperHeader}>
        <div className={`${styles.stepIndicator} ${step >= 1 ? styles.active : ""}`}>
          <div className={styles.stepCircle}>1</div>
          <span>Mempelai</span>
        </div>
        <div className={styles.stepLine}></div>
        <div className={`${styles.stepIndicator} ${step >= 2 ? styles.active : ""}`}>
          <div className={styles.stepCircle}>2</div>
          <span>Acara</span>
        </div>
        <div className={styles.stepLine}></div>
        <div className={`${styles.stepIndicator} ${step >= 3 ? styles.active : ""}`}>
          <div className={styles.stepCircle}>3</div>
          <span>Kisah & Galeri</span>
        </div>
        <div className={styles.stepLine}></div>
        <div className={`${styles.stepIndicator} ${step >= 4 ? styles.active : ""}`}>
          <div className={styles.stepCircle}>4</div>
          <span>Review</span>
        </div>
      </div>

      <div className={styles.formCard}>
        {step === 1 && (
          <div className={styles.stepContent}>
            <div className={styles.stepTitle}>
              <h3>Data Mempelai</h3>
              <p>Mari mulai dengan menceritakan siapa bintang utama di acara ini.</p>
            </div>
            
            <div className={styles.formGrid}>
              {/* Mempelai Pria */}
              <div className={styles.formColumn}>
                <h4 className={styles.columnTitle}><i className="fa-solid fa-mars"></i> Mempelai Pria</h4>
                <div className={styles.inputGroup}>
                  <input type="text" id="groomName" className={styles.inputField} placeholder=" " />
                  <label htmlFor="groomName" className={styles.inputLabel}>Nama Lengkap</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="groomNickName" className={styles.inputField} placeholder=" " />
                  <label htmlFor="groomNickName" className={styles.inputLabel}>Nama Panggilan</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="groomFather" className={styles.inputField} placeholder=" " />
                  <label htmlFor="groomFather" className={styles.inputLabel}>Nama Ayah</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="groomMother" className={styles.inputField} placeholder=" " />
                  <label htmlFor="groomMother" className={styles.inputLabel}>Nama Ibu</label>
                </div>
              </div>

              {/* Divider */}
              <div className={styles.columnDivider}>
                <div className={styles.heartIcon}><i className="fa-solid fa-heart"></i></div>
              </div>

              {/* Mempelai Wanita */}
              <div className={styles.formColumn}>
                <h4 className={styles.columnTitle}><i className="fa-solid fa-venus"></i> Mempelai Wanita</h4>
                <div className={styles.inputGroup}>
                  <input type="text" id="brideName" className={styles.inputField} placeholder=" " />
                  <label htmlFor="brideName" className={styles.inputLabel}>Nama Lengkap</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="brideNickName" className={styles.inputField} placeholder=" " />
                  <label htmlFor="brideNickName" className={styles.inputLabel}>Nama Panggilan</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="brideFather" className={styles.inputField} placeholder=" " />
                  <label htmlFor="brideFather" className={styles.inputLabel}>Nama Ayah</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="brideMother" className={styles.inputField} placeholder=" " />
                  <label htmlFor="brideMother" className={styles.inputLabel}>Nama Ibu</label>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContent}>
            <div className={styles.stepTitle}>
              <h3>Jadwal & Lokasi Acara</h3>
              <p>Tentukan kapan dan di mana momen kebahagiaan ini akan dilangsungkan.</p>
            </div>
            
            <div className={styles.formGrid}>
              {/* Akad Nikah */}
              <div className={styles.formColumn}>
                <h4 className={styles.columnTitle}>Akad Nikah / Pemberkatan</h4>
                <div className={styles.inputGroup}>
                  <input type="date" id="akadDate" className={styles.inputField} placeholder=" " />
                  <label htmlFor="akadDate" className={styles.inputLabel}>Tanggal</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="time" id="akadTime" className={styles.inputField} placeholder=" " />
                  <label htmlFor="akadTime" className={styles.inputLabel}>Waktu</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="akadLocation" className={styles.inputField} placeholder=" " />
                  <label htmlFor="akadLocation" className={styles.inputLabel}>Nama Lokasi/Gedung</label>
                </div>
                <div className={styles.inputGroup}>
                  <textarea id="akadAddress" className={styles.textareaField} placeholder=" " rows={3}></textarea>
                  <label htmlFor="akadAddress" className={styles.inputLabel}>Alamat Lengkap</label>
                </div>
              </div>

              <div className={styles.columnDivider}></div>

              {/* Resepsi */}
              <div className={styles.formColumn}>
                <h4 className={styles.columnTitle}>Resepsi</h4>
                <div className={styles.inputGroup}>
                  <input type="date" id="receptionDate" className={styles.inputField} placeholder=" " />
                  <label htmlFor="receptionDate" className={styles.inputLabel}>Tanggal</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="time" id="receptionTime" className={styles.inputField} placeholder=" " />
                  <label htmlFor="receptionTime" className={styles.inputLabel}>Waktu</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" id="receptionLocation" className={styles.inputField} placeholder=" " />
                  <label htmlFor="receptionLocation" className={styles.inputLabel}>Nama Lokasi/Gedung</label>
                </div>
                <div className={styles.inputGroup}>
                  <textarea id="receptionAddress" className={styles.textareaField} placeholder=" " rows={3}></textarea>
                  <label htmlFor="receptionAddress" className={styles.inputLabel}>Alamat Lengkap</label>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepContent}>
            <div className={styles.stepTitle}>
              <h3>Kisah & Galeri (Opsional)</h3>
              <p>Bagikan perjalanan cinta dan foto-foto pre-wedding terbaik Anda.</p>
            </div>
            
            <div className={styles.singleColumn}>
              <div className={styles.inputGroup}>
                <textarea id="loveStory" className={styles.textareaField} placeholder=" " rows={5}></textarea>
                <label htmlFor="loveStory" className={styles.inputLabel}>Kisah Cinta Singkat</label>
              </div>
              
              <div className={styles.uploadBox}>
                <div className={styles.uploadIcon}>
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>
                <h4>Unggah Foto Pre-Wedding</h4>
                <p>Drag & drop foto ke sini, atau klik untuk memilih file (Max 10 foto)</p>
                <button className={styles.btnUpload}>Pilih Foto</button>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className={styles.stepContent}>
            <div className={styles.stepTitle}>
              <h3>Review & Selesai</h3>
              <p>Pastikan semua data sudah benar sebelum kami membuatkan keajaiban untuk Anda.</p>
            </div>
            
            <div className={styles.reviewBox}>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <h4>Data berhasil disimpan sementara!</h4>
              <p>Silakan klik tombol "Simpan & Buat Undangan" di bawah ini untuk melihat hasil desainnya.</p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.formActions}>
        <button 
          className={styles.btnBack} 
          onClick={prevStep}
          disabled={step === 1}
          style={{ opacity: step === 1 ? 0.3 : 1 }}
        >
          <i className="fa-solid fa-arrow-left"></i> Kembali
        </button>
        
        {step < 4 ? (
          <button className={styles.btnNext} onClick={nextStep}>
            Selanjutnya <i className="fa-solid fa-arrow-right"></i>
          </button>
        ) : (
          <button className={styles.btnSubmit}>
            <i className="fa-solid fa-check"></i> Simpan & Buat Undangan
          </button>
        )}
      </div>
    </div>
  );
}
