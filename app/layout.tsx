import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { CommandPalette } from "@/components/CommandPalette";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { ScrollManager } from "@/components/ScrollManager";
import { RootStructuredData } from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/lib/content";
import "./globals.css";
import { cn } from "@/lib/utils";

/* Design language follows aditya-gupta.com.np: grotesque sans display
   (Whyte there — Space Grotesk as free stand-in), Poppins body, mono labels. */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1319" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maopu.com.bd"),
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
    "TypeScript",
    "Computer Vision",
    "Vision Transformers",
    "DINOv2",
    "Machine Learning",
    "RMSTU",
    "Bangladesh",
  ],
  authors: [{ name: profile.name, url: "https://maopu.com.bd" }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${profile.name} — Computer Science & Software`,
    description: profile.intro,
    url: "https://maopu.com.bd",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Computer Science & Software`,
    description: profile.intro,
    creator: "@maopu2001",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* Runs before first paint: sets palette and shows the static cover only when intro plays */
  const themeBootScript = `try{var p=localStorage.getItem("theme-palette")||"oceanic";document.documentElement.dataset.palette=p;var s=sessionStorage.getItem("preloaderSeen");var n=performance.getEntriesByType("navigation")[0];var r=!!(n&&n.type==="reload");var m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!(s||r||m)){document.documentElement.classList.add("preloader-boot")}}catch(e){}`;

  return (
    <html
      lang="en"
      className={cn(poppins.variable, spaceGrotesk.variable, mono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <RootStructuredData />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {/* Skip to Content Link for Keyboard / Screen Reader Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-99999 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Painted with the initial HTML so content never flashes first */}
        <div className="preloader-static" aria-hidden="true">
          <div className="preloader-grain" />
        </div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Preloader />
          <ScrollManager />
          <CommandPalette />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main
              id="main-content"
              tabIndex={-1}
              className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6 pt-20 lg:pt-24 focus:outline-none"
            >
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
