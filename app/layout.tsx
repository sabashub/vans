import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vans Transport Company",
  description: "Best Vans Transportation Company In France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
