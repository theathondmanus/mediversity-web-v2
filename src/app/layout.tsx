import type { ReactNode } from "react";
import "./globals.css";

// Root layout — provides the bare HTML shell.
// Language-specific providers live in [locale]/layout.tsx.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
