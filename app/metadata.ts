import type { Metadata } from "next";

export const siteMetadata: Metadata = {
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
  metadataBase: new URL("https://superteamng.fun"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://superteamng.fun",
    siteName: "SuperteamNG",
    title: "SuperteamNG — Building Nigeria's Solana Ecosystem",
    description:
      "Where Nigerians learn, build, and earn by contributing to the Solana ecosystem. Locally rooted, globally connected, and execution-driven.",
    images: [
      {
        url: "/logo-full.png",
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
    images: ["/logo-full.png"],
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
  other: {
    "theme-color": "#10b981",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};
