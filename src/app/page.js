"use client";  // Bu direktifi en üste ekliyoruz

import Header from '../components/Header'; // Header bileşenini import ettik
import Footer from '../components/Footer'; // Footer bileşenini import ettik
import { useState } from "react";
import '../style/home.css'; // Home sayfası için özel stiller

export default function Home() {
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "application",
      new Blob(
        [
          JSON.stringify({
            firstName,
            lastName,
            email,
            applicationDetails: "Logo koruma başvurusu",
          }),
        ],
        { type: "application/json" }
      )
    );

    try {
      const response = await fetch(
        "http://localhost:8080/api/trademark/apply",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Başvurunuz başarıyla alındı.");
      } else {
        const errorMessage = await response.text();
        alert(
          `Başvuru sırasında bir hata oluştu: ${response.status} - ${errorMessage}`
        );
      }
    } catch (error) {
      alert(`Sunucuya erişilemedi: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header /> {/* Header bileşenini çağırdık */}

      <div className="container mt-5">
        <h1 className="text-center mb-4">Logo Koruma Başvurusu</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Ad</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Soyad</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Logo Yükle</label>
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Başvuru Yapılıyor..." : "Marka Başvurusu ile Koru"}
          </button>
        </form>
      </div>

      <Footer /> {/* Footer bileşenini çağırdık */}
    </div>
  );
}
