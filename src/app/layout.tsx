import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "React Workshop",
  description: "Learn React in this interactive workshop!",
  openGraph: {
    title: "React Workshop",
    description: "Learn React in this interactive workshop!",
    images: [
      {
        url: "/Intro.png",
        width: 800,
        height: 600,
        alt: "React Workshop Intro Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Workshop",
    description: "Learn React in this interactive workshop!",
    images: ["/Intro.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
