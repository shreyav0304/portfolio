import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Shreya V | AIML Portfolio",
  description: "Shreya V's portfolio showcasing computer vision, machine learning, IoT-linked projects, leadership, and certifications.",
  keywords: ["Shreya V", "AIML Portfolio", "Cambridge Institute of Technology", "Computer Vision", "Machine Learning", "Bengaluru"],
  openGraph: {
    title: "Shreya V | AIML Portfolio",
    description: "Shreya V's portfolio showcasing computer vision, machine learning, IoT-linked projects, leadership, and certifications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya V | AIML Portfolio",
    description: "Shreya V's portfolio showcasing computer vision, machine learning, IoT-linked projects, leadership, and certifications.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shreya V",
    jobTitle: "B.E. Artificial Intelligence & Machine Learning Student",
    alumniOf: "Cambridge Institute of Technology",
    homeLocation: "Bengaluru, Karnataka",
    email: "mailto:shreyav0304@gmail.com",
    telephone: "+91 6360516101",
    sameAs: ["https://linkedin.com/in/shreyavinod", "https://github.com/shreyav0304"],
    knowsAbout: ["Machine Learning", "Computer Vision", "Deep Learning", "IoT", "Data Science"],
  };

  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
