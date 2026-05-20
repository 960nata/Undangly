"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { submitRsvp, getRsvps } from "../actions";
import styles from "./Rsvp.module.css";

interface RsvpItem {
  id: string;
  name: string;
  status: string;
  guestsCount: number;
  message: string;
  createdAt: Date;
}

export default function Rsvp() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Hadir");
  const [guestsCount, setGuestsCount] = useState(1);
  const [message, setMessage] = useState("");
  const [rsvps, setRsvps] = useState<RsvpItem[]>([]);
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<{ success: boolean; text: string } | null>(null);

  // Set default name from query param
  useEffect(() => {
    const to = searchParams.get("to");
    if (to) {
      setName(to);
    }
  }, [searchParams]);

  // Load RSVPs
  const loadRsvps = async () => {
    const data = await getRsvps();
    setRsvps(data as unknown as RsvpItem[]);
  };

  useEffect(() => {
    loadRsvps();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFormStatus({ success: false, text: "Nama dan ucapan harus diisi." });
      return;
    }

    setFormStatus(null);
    startTransition(async () => {
      const actualGuests = status === "Hadir" ? guestsCount : 0;
      const res = await submitRsvp(name, status, actualGuests, message);
      if (res.success) {
        setFormStatus({ success: true, text: "Konfirmasi & ucapan Anda berhasil dikirim!" });
        setMessage("");
        setGuestsCount(1);
        // Reload list
        loadRsvps();
      } else {
        setFormStatus({ success: false, text: res.error || "Gagal mengirim ucapan." });
      }
    });
  };

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0] ? parts[0][0].toUpperCase() : "?";
  };

  return (
    <section id="rsvp" className={`${styles.rsvp} reveal`}>
      <div className={styles.container}>
        <div className={styles.introHeader}>
          <span className={styles.introSubtitle}>KEHADIRAN & UCAPAN</span>
          <h2 className={styles.introTitle}>RSVP & Ucapan Bahagia</h2>
          <div className="floral-divider">
            <span style={{ fontSize: "1.2rem", color: "var(--accent)" }}>✿</span>
          </div>
          <p className={styles.introText}>
            Konfirmasikan kehadiran Anda dan kirimkan doa restu serta ucapan terbaik bagi kami berdua:
          </p>
        </div>

        <div className={styles.rsvpGrid}>
          {/* Form RSVP */}
          <div className={styles.rsvpCard}>
            <h3 className={styles.cardTitle}>Formulir Kehadiran</h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Nama Anda</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ketik nama lengkap Anda"
                  className={styles.input}
                  disabled={isPending}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Konfirmasi Kehadiran</label>
                <div className={styles.radioGroup}>
                  <label className={`${styles.radioLabel} ${status === "Hadir" ? styles.radioSelected : ""}`}>
                    <input
                      type="radio"
                      name="status"
                      value="Hadir"
                      checked={status === "Hadir"}
                      onChange={() => setStatus("Hadir")}
                      disabled={isPending}
                    />
                    <span>Hadir</span>
                  </label>
                  <label className={`${styles.radioLabel} ${status === "Tidak Hadir" ? styles.radioSelected : ""}`}>
                    <input
                      type="radio"
                      name="status"
                      value="Tidak Hadir"
                      checked={status === "Tidak Hadir"}
                      onChange={() => setStatus("Tidak Hadir")}
                      disabled={isPending}
                    />
                    <span>Tidak Hadir</span>
                  </label>
                </div>
              </div>

              {status === "Hadir" && (
                <div className={styles.inputGroup}>
                  <label htmlFor="guestsCount" className={styles.label}>Jumlah Tamu yang Hadir</label>
                  <select
                    id="guestsCount"
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className={styles.select}
                    disabled={isPending}
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4 Orang</option>
                    <option value={5}>5 Orang</option>
                  </select>
                </div>
              )}

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Doa &amp; Ucapan</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Kirimkan doa dan ucapan hangat untuk kedua mempelai..."
                  className={styles.textarea}
                  rows={4}
                  disabled={isPending}
                  required
                />
              </div>

              {formStatus && (
                <div className={`${styles.alert} ${formStatus.success ? styles.alertSuccess : styles.alertError}`}>
                  {formStatus.text}
                </div>
              )}

              <button type="submit" className={styles.submitBtn} disabled={isPending}>
                {isPending ? (
                  <span>MENGIRIM...</span>
                ) : (
                  <>
                    BUAT KONFIRMASI
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Wishes Board */}
          <div className={styles.wishesBoard}>
            <h3 className={styles.cardTitle}>Ucapan &amp; Doa ({rsvps.length})</h3>
            
            <div className={styles.wishesList}>
              {rsvps.length === 0 ? (
                <div className={styles.emptyState}>
                  <p>Belum ada ucapan. Jadilah yang pertama memberikan doa restu!</p>
                </div>
              ) : (
                rsvps.map((rsvp) => (
                  <div key={rsvp.id} className={styles.wishCard}>
                    <div className={styles.avatar}>
                      {getInitials(rsvp.name)}
                    </div>
                    <div className={styles.wishContent}>
                      <div className={styles.wishHeader}>
                        <span className={styles.wishName}>{rsvp.name}</span>
                        <span className={`${styles.badge} ${rsvp.status === "Hadir" ? styles.badgeHadir : styles.badgeAbsen}`}>
                          {rsvp.status === "Hadir" ? `Hadir (${rsvp.guestsCount} Orang)` : "Tidak Hadir"}
                        </span>
                      </div>
                      <p className={styles.wishMessage}>{rsvp.message}</p>
                      <span className={styles.wishTime}>
                        {new Date(rsvp.createdAt).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
