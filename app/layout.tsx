import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Shubham Bhardwaj | Full Stack & AI/ML Engineer",
    template: "%s | Shubham Bhardwaj",
  },
  description:
    "Personal portfolio of Shubham Bhardwaj — Full Stack & AI/ML Engineer. MCA student at BIT Mesra building real-time collaborative systems, NLP pipelines, and backend services.",
  icons: {
    icon: "/Shubham.png",
  },
  keywords: [
    "Shubham Bhardwaj",
    "Full Stack Developer",
    "AI/ML Engineer",
    "BIT Mesra",
    "CollabDocs",
    "SkimLit",
    "RecallAI",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "TensorFlow",
  ],
  authors: [{ name: "Shubham Bhardwaj", url: "https://github.com/Shubham37204" }],
  creator: "Shubham Bhardwaj",
  openGraph: {
    title: "Shubham Bhardwaj | Full Stack & AI/ML Engineer",
    description:
      "Full Stack & AI/ML Engineer. MCA student at BIT Mesra building real-time collaborative systems and NLP pipelines.",
    type: "website",
    locale: "en_US",
    siteName: "Shubham Bhardwaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Bhardwaj | Full Stack & AI/ML Engineer",
    description:
      "Full Stack & AI/ML Engineer building real-time collaborative platforms and applied ML products.",
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}
      style={{ ["--font-comfortaa" as string]: "var(--font-display)" }}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(t);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg text-text-primary selection:bg-accent selection:text-bg overflow-x-hidden min-h-screen flex flex-col">
        <ThemeProvider>
          <div className="fixed inset-0 bg-dots opacity-25 pointer-events-none z-[1]" />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-24 pb-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
