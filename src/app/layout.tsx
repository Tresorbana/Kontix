import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SimpleCursor } from "@/components/animations/SimpleCursor";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Caribbean Ventures",
    template: "%s | Caribbean Ventures"
  },
  description: "Enhancing your efficiency and competitiveness with specialized B2B solutions",
  icons: {
    icon: [
      { url: '/logo.webp', type: 'image/webp' },
      { url: '/logo.webp', type: 'image/x-icon' },
    ],
    shortcut: '/logo.webp',
    apple: [
      { url: '/logo.webp', type: 'image/webp' },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <LanguageProvider>
          <SimpleCursor />
          <ScrollProgress />
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "CaribbeanVentures", "version": "1.0.0"}'
          />
          {children}
          <VisualEditsMessenger />
        </LanguageProvider>
      </body>
    </html>
  );
}
