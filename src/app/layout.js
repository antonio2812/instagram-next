import "./globals.css";

export const metadata = {
  title: "UI Clone NextJS",
  description: "UI Clone NextJS",
  keywords: "UI Clone, Instagram, NextJS",
  author: "antonio2812",
  viewport: "width-device-width, scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
