import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Nos Disparus - Plateforme d'Alerte de Personnes Disparues",
    template: "%s | Nos Disparus"
  },
  description: "Aidez-nous à retrouver les personnes disparues à Brazzaville, Pointe-Noire et partout au Congo. Signalez un repérage ou publiez un avis de recherche gratuitement.",
  openGraph: {
    title: "Nos Disparus - Solidarité pour retrouver nos proches",
    description: "Plateforme citoyenne pour signaler et retrouver les personnes disparues en République du Congo.",
    url: defaultUrl,
    siteName: "Nos Disparus",
    locale: "fr_CG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Disparus",
    description: "Signalez une disparition ou un repérage en quelques clics.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
