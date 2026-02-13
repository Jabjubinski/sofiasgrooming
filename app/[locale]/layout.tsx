import { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Space_Grotesk,
  Noto_Serif_Georgian,
} from "next/font/google";
import "../../app/globals.css";
import { routing } from "../i18n/routing";
import { getMessages } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Link, MessageCircle, Phone } from "lucide-react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Sofia's grooming salon",
  description: "Hair salon for dogs of all sizes and flufiness",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
