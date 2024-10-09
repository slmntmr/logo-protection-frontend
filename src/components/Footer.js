import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Karataş & Partners Hukuk Bürosu</h3>
        <p>Adres: XYZ Sokak, 12345 İstanbul, Türkiye</p>
        <p>Telefon: +90 212 123 45 67</p>
        <p>E-posta: info@karataspartners.com</p>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
