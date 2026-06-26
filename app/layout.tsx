import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlos-castro-portfolio-alpha.vercel.app"),
  title: "Carlos Castro | AI Operations & Technical Support Builder",
  description:
    "Portfolio for Carlos Castro, an AI operations and technical support builder focused on practical workflow systems, user operations, and business operations.",
  openGraph: {
    title: "Carlos Castro | AI Operations & Technical Support Builder",
    description:
      "Live operations troubleshooting, AI workflow systems, and customer-facing execution for AI support and business operations roles.",
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
    title: "Carlos Castro | AI Operations & Technical Support Builder",
    description:
      "Live operations troubleshooting, AI workflow systems, and customer-facing execution.",
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
