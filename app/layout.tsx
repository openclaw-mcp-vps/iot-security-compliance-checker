import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IoT Security Compliance Checker",
  description: "Scan IoT devices on your network and verify FCC security update compliance. Discover devices, check firmware, and generate audit-ready reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84f5db54-d9fc-4daa-9182-6d13df49f46a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
