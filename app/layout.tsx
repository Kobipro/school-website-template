import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const font = Plus_Jakarta_Sans({
  weight : '400',
  subsets : ['latin']
})

export const metadata: Metadata = {
  title: "Oobiiee | Empowering Your Tomorrow",
  description: "Empower your tomorrow with Oobiiee, offering flexible monthly loans and financial solutions to help you achieve your goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >

        {children}
        <Analytics />
      </body>
    </html>
  );
}
