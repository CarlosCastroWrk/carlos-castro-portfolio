import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Castro | AI-Native Operator",
  description:
    "Portfolio for Carlos Castro, an AI-native operator and workflow systems builder focused on practical business operations systems.",
  openGraph: {
    title: "Carlos Castro | AI-Native Operator",
    description:
      "Workflow systems builder helping businesses turn messy operations into organized operating systems.",
    type: "website",
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
