import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Private Strategic Advisory for Global Enterprises | Caribbean Ventures",
    template: "%s | Caribbean Ventures"
  },
  description: "Caribbean Ventures is a boutique strategic advisory firm specializing in corporate structuring, international operations management, and capital strategy for cross-border enterprises.",
  icons: {
    icon: [
      { url: '/logo.webp', type: 'image/webp' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/logo.webp', type: 'image/webp' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <LanguageProvider>
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
