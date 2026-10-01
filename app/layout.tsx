import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlos-castro-portfolio-alpha.vercel.app"),
  title: "Carlos Castro | Business Operations & Practical Systems",
  description:
    "Portfolio for Carlos Castro, an early-career operator learning business operations and building practical tools around real workflows.",
  openGraph: {
        title: "Carlos Castro | Business Operations & Practical Systems",
        description:
          "TurnOS, apartment turnover operations, CleanDay in development, and practical AI-assisted work.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Carlos Castro portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Castro | Business Operations & Practical Systems",
    description:
      "TurnOS, apartment turnover operations, and practical AI-assisted work.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
