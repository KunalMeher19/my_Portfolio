import { Inter, Prata } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata",
});

export const metadata = {
  title: "Ardhendu",
  description:
    "Full Stack Developer and Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} ${prata.variable}`}>
        <SmoothScrollProvider>
          {children}
          <Toaster richColors position="bottom-right" />
          <Analytics />
          <SpeedInsights />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}