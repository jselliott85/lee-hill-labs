import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leehilllabs.com"),
  title: "Lee Hill Labs",
  description: "The coordination layer communities need.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>L</text></svg>",
  },
  openGraph: {
    title: "Lee Hill Labs",
    description: "The coordination layer communities need.",
    images: [{ url: "/og-image-20260821.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Hill Labs",
    description: "The coordination layer communities need.",
    images: ["/og-image-20260821.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
