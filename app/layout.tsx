import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono} from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Sasmit Mishra | The Observer",
  description: "Software engineering, AI research, creativity, and the systems connectiong them. Explore the portfolio of Sasmit Mishra",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${mono.variable}`}> 
        {children} 
      </body>
    </html>
  );
}
