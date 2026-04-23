import type { ReactNode } from "react";
import { IBM_Plex_Sans, Noto_Sans_SC, Playfair_Display } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Root layout — provides the bare HTML shell.
// Language-specific providers live in [locale]/layout.tsx.
// Fonts are loaded via next/font/google (build-time download, zero runtime CDN dependency).
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${notoSansSC.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
