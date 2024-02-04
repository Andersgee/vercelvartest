import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rust/edge/nodejs runtime test",
  description: "welp",
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
