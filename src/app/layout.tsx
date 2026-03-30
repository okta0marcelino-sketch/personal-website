import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import { ResumeDownloadProvider } from "@/context/ResumeDownloadContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDET Portfolio | Software Development Engineer in Test",
  description: "Professional portfolio for an SDET specializing in test automation, quality engineering, and CI/CD pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "SDET Professional",
    jobTitle: "Software Development Engineer in Test",
    url: "https://yourportfolio.com",
    sameAs: [
      "https://github.com/marcelino230",
      "https://linkedin.com/in/yourusername"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <ResumeDownloadProvider>
            <ScrollProgress />
            {children}
          </ResumeDownloadProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
