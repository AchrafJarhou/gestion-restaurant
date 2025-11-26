import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestion Restaurant",
  description: "Crée par Achraf Dev",
  generator: "AchrafDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
