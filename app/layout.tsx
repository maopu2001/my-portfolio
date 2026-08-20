import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/lib/content";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Computer Science & Software`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} — ${profile.headline}. ${profile.intro}`,
  keywords: [
    "M. Aktaruzzaman Opu",
    "Aktaruzzaman Opu",
    "Computer Science",
    "Software Engineer",
    "Web Developer",
    "Next.js",
    "React",
    "Computer Vision",
    "Machine Learning",
    "RMSTU",
    "Bangladesh",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Computer Science & Software`,
    description: profile.intro,
    url: "https://maopu.com.bd",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, newsreader.variable, mono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#fffcf3] text-[#1a2332] dark:bg-[#0a0a0a] dark:text-zinc-100 font-sans antialiased selection:bg-[#ff4d00]/30 selection:text-[#ff4d00]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6 pt-6 sm:pt-28 pb-28 sm:pb-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
