import '../style/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>Logo Protection</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
