import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlos-castro-portfolio-alpha.vercel.app"),
  title: "Carlos Castro | AI-Native Workflow Systems Builder",
  description:
    "Portfolio for Carlos Castro, an AI-native operator who builds practical workflow systems for real business operations, support, and implementation roles.",
  openGraph: {
    title: "Carlos Castro | AI-Native Workflow Systems Builder",
    description:
      "Boardroom/Cortex, Zakar dealership workflow systems, live operations troubleshooting, and customer-facing execution for AI support, implementation, and product operations roles.",
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
    title: "Carlos Castro | AI-Native Workflow Systems Builder",
    description:
      "Practical AI workflow systems, live operations troubleshooting, and customer-facing execution.",
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
