import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "@/providers/LayoutProviders";
import { StructuredData } from "@/components/seo/structured-data";
import { ThemeProvider } from "next-themes";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "SuperteamNG — Building Nigeria's Solana Ecosystem",
    template: "%s | SuperteamNG",
  },
  description:
    "SuperteamNG is the Nigerian chapter of Superteam, a global network of builders working to grow the Solana ecosystem. Learn, build, and earn in web3 with real products, real contributions, and real earnings.",
  keywords: [
    "SuperteamNG",
    "Solana",
    "Nigeria",
    "Web3",
    "Blockchain",
    "Crypto",
    "Ethereum alternative",
    "DeFi",
    "NFT",
    "Developer community",
    "Solana ecosystem",
    "Web3 Nigeria",
    "Blockchain Nigeria",
    "Crypto community",
    "Solana builders",
    "Web3 developers",
    "Blockchain developers",
    "Solana hackathons",
    "Crypto bounties",
    "Web3 opportunities",
  ],
  authors: [{ name: "SuperteamNG" }],
  creator: "SuperteamNG",
  publisher: "SuperteamNG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://superteamng-new.vercel.app"),
  alternates: {
    canonical: "/",
  },
  other: {
    "theme-color": "#10b981",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://superteamng-new.vercel.app",
    siteName: "SuperteamNG",
    title: "SuperteamNG — Building Nigeria's Solana Ecosystem",
    description:
      "Where Nigerians learn, build, and earn by contributing to the Solana ecosystem. Locally rooted, globally connected, and execution-driven.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SuperteamNG - Building Nigeria's Solana Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperteamNG — Building Nigeria's Solana Ecosystem",
    description:
      "Where Nigerians learn, build, and earn by contributing to the Solana ecosystem. Join the community today.",
    creator: "@SuperteamNG",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased bg-[#0a0a0a]`}
        suppressHydrationWarning
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        > */}
          <StructuredData />
          <LayoutProvider>{children}</LayoutProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
