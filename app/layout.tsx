import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";

export const metadata: Metadata = {
  title: "Ciudad Secreta | La ciudad que no ves",
  description: "Ciudad Secreta es una experiencia gamificada híbrido-física que revela la 'capa oculta' de Madrid, Barcelona y Valencia mediante misiones, códigos QR, puzzles y un sistema de progresión tipo RPG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased star-field">
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}