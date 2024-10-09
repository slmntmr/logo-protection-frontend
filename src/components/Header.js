import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">Karataş & Partners</h1> {/* Yazıyı logonun üstüne taşıdık */}
        <img
          src="/images/karatas-partners-logo.png"
          alt="Karataş & Partners Logo"
          className="header-logo" /* Logoya genişlik vereceğimiz sınıf */
        />
      </div>
    </header>
  );
}
