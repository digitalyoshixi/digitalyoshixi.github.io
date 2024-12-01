import type { Metadata } from "next";
import { Sour_Gummy, Acme } from "next/font/google"
import "./globals.css"

const sourGummy = Sour_Gummy({
  subsets: ["latin"],
  variable: "--font-sour-gummy",
  weight: ["400"],
})

const acme = Acme({
  subsets: ["latin"],
  variable: "--font-acme",
  weight: ["400"],
})


export const metadata: Metadata = {
  title: "Yoshixi's Blog",
  description: "Lots of stuff to have here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
className={`${sourGummy.variable} ${acme.variable} bg-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
