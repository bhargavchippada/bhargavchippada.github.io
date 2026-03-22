import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Personal website of Bhargav Chippada - ML Engineer at Google, based in Mountain View, US";

export const metadata: Metadata = {
  title: "Bhargav Chippada",
  description,
  metadataBase: new URL("https://bhargavchippada.github.io"),
  openGraph: {
    title: "Bhargav Chippada",
    description,
    url: "https://bhargavchippada.github.io",
    siteName: "Bhargav Chippada",
    type: "website",
    images: [{ url: "/images/profile-photo.jpg", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary",
    title: "Bhargav Chippada",
    description,
    images: ["/images/profile-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "d2RtZTKBvgBAeJ9VHBGOmJSmlL4IQD1UlW0JIYjjbo8",
    other: {
      "msvalidate.01": ["97F2C8E326270AB4A2086FF27E7F149E"],
    },
  },
  alternates: {
    canonical: "https://bhargavchippada.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
