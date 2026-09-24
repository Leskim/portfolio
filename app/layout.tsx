import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lesley Kimutai — Engineer close to the hardware",
  description:
    "Portfolio of Lesley Kimutai, a computer engineering graduate student building thoughtful software, embedded systems, and IoT experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
