import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import React from "react";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anas Bouabid",
    description: "Web portfolio of Anas Bouabid",
    authors: [{name: 'Anas Bouabid', url: 'https://www.linkedin.com/in/anasbouabid/'}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
      {children}
      </body>
    </html>
  );
}
