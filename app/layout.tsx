import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-comfortaa",
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
  description: "Personal portfolio website of Shubham Bhardwaj, a passionate Full Stack & AI/ML Engineer specializing in collaborative platforms, scalable backend, and NLP pipelines.",
  keywords: ["Shubham Bhardwaj", "Portfolio", "Full Stack Developer", "AI Engineer", "ML Engineer", "Next.js", "Python", "TensorFlow", "Ranchi"],
  openGraph: {
    title: "Shubham Bhardwaj | Full Stack & AI/ML Engineer",
    description: "Personal portfolio website of Shubham Bhardwaj. Explore projects, credentials, and technical skills.",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}>
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
      <body className="bg-bg text-text-primary selection:bg-accent selection:text-bg overflow-x-hidden min-h-screen flex flex-col justify-between">
        <CustomCursor />
        {/* Futuristic Glowing Ambient Orbs */}
        <div className="glow-orb top-[-100px] left-[-100px]" />
        <div className="glow-orb top-[40vh] right-[-100px]" style={{ background: "radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)" }} />
        <div className="glow-orb bottom-[-100px] left-[20vw]" style={{ background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)" }} />
        
        {/* Dot pattern overlay */}
        <div className="fixed inset-0 bg-dots opacity-30 pointer-events-none z-[1]" />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-24 pb-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
