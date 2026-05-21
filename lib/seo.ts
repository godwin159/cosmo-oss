/**
 * Central SEO / site configuration.
 *
 * Override the canonical URL per environment with NEXT_PUBLIC_SITE_URL,
 * e.g. NEXT_PUBLIC_SITE_URL=https://cosmo.example.com
 */

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  // Vercel sets VERCEL_PROJECT_PRODUCTION_URL without a protocol.
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Cosmo Playground",
  shortName: "Cosmo",
  url: resolveSiteUrl(),
  description:
    "Tune count, size, and speed for live particle motion. Preview on the canvas, then copy the snippet.",
  tagline: "Interactive particle motion playground",
  keywords: [
    "particle animation",
    "motion library",
    "particle playground",
    "canvas animation",
    "react particles",
    "interactive motion",
    "creative coding",
    "Next.js",
  ],
  locale: "en_US",
  creator: "@uxgodwin",
} as const;

export type SiteConfig = typeof siteConfig;
