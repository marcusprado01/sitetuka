import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iman Abou Tuka — Architecture, Photography & Design",
  description: "Multidisciplinary portfolio by Iman Abou Tuka — Architecture, Photography, Construction Coordination & Handmade Design. Based in Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-14 md:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
