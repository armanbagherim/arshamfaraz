import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آرشام فراز | کاتالوگ طراحی و ساخت آسانسور",
  description:
    "کاتالوگ طراحی کابین، متریال و سیستم‌های آسانسور — آرشام فراز شرق، تهران.",
  robots: { index: false, follow: false, nocache: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ea",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
