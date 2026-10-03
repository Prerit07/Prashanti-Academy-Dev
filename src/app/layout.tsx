import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prashanti Academy | Corporate-Grade Financial Market Education",
  description:
    "Master Stock Market, Forex, Bonds, and Derivatives with institutional trading rigor and risk-first discipline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased bg-white text-brand-navy selection:bg-brand-gold/20 selection:text-brand-navy">
        {children}
      </body>
    </html>
  );
}