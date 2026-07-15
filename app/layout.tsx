import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Shubham Bhardwaj | Full Stack & AI/ML Engineer",
  description:
    "Personal portfolio website of Shubham Bhardwaj, a passionate Full Stack & AI/ML Engineer specializing in collaborative platforms, scalable backend, and NLP pipelines.",
  icons: {
    icon: "/Shubham.png",
  },
  keywords: [
    "Shubham Bhardwaj",
    "Portfolio",
    "Full Stack Developer",
    "AI Engineer",
    "ML Engineer",
    "Next.js",
    "Python",
    "TensorFlow",
    "Ranchi",
  ],
  openGraph: {
    title: "Shubham Bhardwaj | Full Stack & AI/ML Engineer",
    description:
      "Personal portfolio website of Shubham Bhardwaj. Explore projects, credentials, and technical skills.",
    type: "website",
    locale: "en_US",
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
        <div className="fixed inset-0 bg-dots opacity-25 pointer-events-none z-[1]" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24 pb-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
