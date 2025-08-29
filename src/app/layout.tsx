import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/comps/nav";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato", // Optional: for Tailwind/CSS variable usage
  weight: ["400", "700"], // or "100" to "900", depending on what you need
});

export const metadata: Metadata = {
  title: "SMK NEGERI 2 CIMAHI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable}antialiased`}
      >
        <Nav />

        <main>
        {children}
        </main>


      </body>
    </html>
  );
}
