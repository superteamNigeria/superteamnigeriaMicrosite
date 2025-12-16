"use client";

export const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SuperteamNG",
    description:
      "SuperteamNG is the Nigerian chapter of Superteam, a global network of builders working to grow the Solana ecosystem through real products, real contributions, and real earnings.",
    url: "https://superteamng-new.vercel.app",
    logo: "https://superteamng-new.vercel.app/og.png",
    sameAs: ["https://x.com/SuperteamNG", "https://discord.gg/C6EgkeEAed"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Community Support",
      availableLanguage: ["English"],
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SuperteamNG",
    url: "https://superteamng-new.vercel.app",
    description:
      "Where Nigerians learn, build, and earn by contributing to the Solana ecosystem.",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://superteamng-new.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SuperteamNG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SuperteamNG is the Nigerian chapter of the global Superteam network — a community of developers, designers, creators, and operators building and earning within the Solana ecosystem through bounties, hackathons, grants, and real-world projects.",
        },
      },
      {
        "@type": "Question",
        name: "Who can join SuperteamNG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SuperteamNG is open to developers (frontend, backend, blockchain, mobile), designers (UI/UX, product, brand, motion), writers & content creators, community managers & marketers, students and beginners looking to break into web3, and founders building on Solana. You don't need to be an expert — just willing to learn, contribute, and collaborate.",
        },
      },
      {
        "@type": "Question",
        name: "How do I earn with SuperteamNG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Members can earn by completing bounties posted by Solana protocols, working on ecosystem projects and startups, participating in hackathons and demo days, and contributing to research, content, design, or engineering work. Most payouts are made in crypto (often USDC).",
        },
      },
      {
        "@type": "Question",
        name: "What is SuperteamNG's mission?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SuperteamNG's mission is to lower the barrier to entry into web3 and make it possible for Nigerians to gain practical experience building on Solana, earn income through meaningful ecosystem contributions, connect with global protocols and startups, and build long-term careers in crypto and web3.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
